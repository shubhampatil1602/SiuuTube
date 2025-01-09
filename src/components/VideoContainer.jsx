import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  YOUTUBE_LIVE_VIDEOS_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";
import { cacheVideos } from "../redux/videosSlice";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [videosPage, setVideosPage] = useState(1);
  const [liveVideos, setLiveVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const activeTab = useSelector((store) => store.activeTab);
  // const videos = useSelector((store) => store.videosSlice.videos);

  // const dispatch = useDispatch();

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const data = await fetch(
        `${YOUTUBE_VIDEOS_API}&maxResults=${videosPage * 10}`
      );
      const convertToJson = await data.json();
      setVideos(convertToJson.items);
      setVideosPage(videosPage + 1);
      // console.log(convertToJson.items);
      // dispatch(cacheVideos(convertToJson.items));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLiveVideos = async () => {
    try {
      setLoading(true);
      const data = await fetch(YOUTUBE_LIVE_VIDEOS_API);
      const convertToJson = await data.json();
      setLiveVideos((prevData) => [...prevData, ...convertToJson.items]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "All") {
      // if (!videos.length) {
      fetchVideos();
      // }
    } else if (activeTab === "Live") {
      fetchLiveVideos();
    }
  }, [activeTab]);

  const handleScroll = async () => {
    try {
      // console.log("scrolling ------", document.documentElement.scrollHeight);
      // console.log("inner ------", window.innerHeight);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  const renderVideos = () => {
    switch (activeTab) {
      case "All":
        return loading ? (
          <VideoShimmer />
        ) : videos?.length > 0 ? (
          videos.map((video) => (
            <Link key={video?.id} to={`/watch?v=${video?.id}`}>
              <VideoCard videoInfo={video} />
            </Link>
          ))
        ) : (
          <VideoShimmer />
        );

      case "Live":
        return loading ? (
          <VideoShimmer />
        ) : liveVideos?.length > 0 ? (
          liveVideos.map((video) => (
            <Link
              key={video?.id?.videoId}
              to={`/watch?v=${video?.id?.videoId}`}
            >
              <VideoCard videoInfo={video} />
            </Link>
          ))
        ) : (
          <VideoShimmer />
        );

      default:
        return <VideoShimmer />;
    }
  };

  return (
    <div className={`px-4 flex flex-wrap gap-[1rem] justify-center`}>
      {renderVideos()}
      {loading && "loading........"}
    </div>
  );
};

export default VideoContainer;
