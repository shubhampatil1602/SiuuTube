import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  YOUTUBE_LIVE_VIDEOS_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoShimmer from "./VideoShimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [liveVideos, setLiveVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const activeTab = useSelector((state) => state.activeTab);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const convertToJson = await data.json();
      setVideos(convertToJson.items);
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
      console.log(convertToJson.items);
      setLiveVideos(convertToJson.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "All") {
      fetchVideos();
    } else if (activeTab === "Live") {
      fetchLiveVideos();
    }
  }, [activeTab]);

  const renderVideos = () => {
    switch (activeTab) {
      case "All":
        return loading ? (
          <VideoShimmer />
        ) : videos.length > 0 ? (
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
        ) : liveVideos.length > 0 ? (
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
    <div className='px-4 flex flex-wrap gap-[1rem] justify-center'>
      {renderVideos()}
    </div>
  );
};

export default VideoContainer;
