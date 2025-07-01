import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setVideosForTab } from "../redux/videosSlice";
import { Loader } from "lucide-react";

import {
  YOUTUBE_LIVE_VIDEOS_API,
  YOUTUBE_VIDEO_SEARCH_RESULTS_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";

const MAX_RESULTS = 50;

const Spinner = () => (
  <div className='flex justify-center py-4 w-full text-zinc-900 dark:text-zinc-100'>
    <Loader className='size-6 animate-spin' />
  </div>
);

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const videosByTab = useSelector((store) => store.videos.videosByTab);
  const activeTab = useSelector((store) => store.activeTab);
  const videos = videosByTab[activeTab] || [];
  const loader = useRef(null);

  const fetchVideos = async (pageToken = "") => {
    try {
      setLoading(true);
      let url = "";
      if (activeTab === "All") {
        url = `${YOUTUBE_VIDEOS_API}&maxResults=10`;
      } else if (activeTab === "Live") {
        url = YOUTUBE_LIVE_VIDEOS_API;
      } else {
        url = YOUTUBE_VIDEO_SEARCH_RESULTS_API + activeTab;
      }
      if (pageToken) url += `&pageToken=${pageToken}`;
      const data = await fetch(url);
      const json = await data.json();
      dispatch(
        setVideosForTab({
          tab: activeTab,
          videos: json?.items || [],
          append: !!pageToken,
        })
      );
      setNextPageToken(json.nextPageToken || null);
    } catch (error) {
      console.log("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setNextPageToken(null);
    if (!videos || videos.length === 0) {
      fetchVideos();
    }
    // eslint-disable-next-line
  }, [activeTab]);

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (
        target.isIntersecting &&
        nextPageToken &&
        !loading &&
        videos.length < MAX_RESULTS
      ) {
        fetchVideos(nextPageToken);
      }
    },
    [nextPageToken, loading, videos]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "0px", threshold: 1.0 };
    const observer = new window.IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  if (loading && videos.length === 0) return <VideoShimmer />;

  return (
    <div className='px-4 flex flex-wrap gap-[1rem] justify-center bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100'>
      {videos.map((video) => (
        <Link
          key={video?.id?.videoId || video?.id}
          to={`/watch?v=${video?.id?.videoId || video?.id}`}
        >
          <VideoCard videoInfo={video} />
        </Link>
      ))}
      <div ref={loader} />
      {loading && videos.length > 0 && <Spinner />}
    </div>
  );
};

export default VideoContainer;
