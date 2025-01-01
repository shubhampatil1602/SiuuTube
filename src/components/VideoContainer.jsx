import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainer = () => {
  const [videos, getVideos] = useState([]);
  const fetchVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const convertToJson = await data.json();
      getVideos(convertToJson.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return (
      <div className='px-4 flex flex-wrap gap-[1rem]'>
        <VideoCardShimmer />
        <VideoCardShimmer />
        <VideoCardShimmer />
        <VideoCardShimmer />
        <VideoCardShimmer />
        <VideoCardShimmer />
      </div>
    );
  }
  return (
    <div className='px-4 flex flex-wrap gap-[1rem] justify-center'>
      {videos?.map((video) => (
        <Link key={video?.id} to={`/watch?v=${video?.id}`}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
