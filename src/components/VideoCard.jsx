import { useSelector } from "react-redux";
import { convertTime } from "../utils/helper";

const VideoCard = ({ videoInfo }) => {
  const isSidebarOpen = useSelector((state) => state.app.isSidebarOpen);
  const icons = Math.round(Math.random() * 10);
  const icon =
    (icons == 0 && "😬") ||
    (icons == 1 && "🚀") ||
    (icons == 2 && "🤙🏼") ||
    (icons == 3 && "🌿") ||
    (icons == 4 && "🌚") ||
    (icons == 5 && "🥂") ||
    (icons == 6 && "🔥") ||
    (icons == 7 && "👀") ||
    (icons == 8 && "👑") ||
    (icons == 9 && "💐") ||
    (icons == 10 && "🌹");

  return (
    <div
      className={`w-[23rem] ${isSidebarOpen ? "max-w-[24rem]" : "w-[20.3rem]"}`}
    >
      {/* Thumbnail */}
      <div className='w-full relative'>
        <img
          src={videoInfo?.snippet?.thumbnails?.medium?.url}
          alt={videoInfo?.snippet?.title}
          className='w-full h-auto max-h-[215px] object-contain object-center rounded-lg'
        />
        {/* Video duration tag */}
        {videoInfo?.snippet?.liveBroadcastContent !== "live" ? (
          <div className='bg-black bg-opacity-80 tracking-tight text-white w-fit text-xs font-semibold absolute bottom-1 right-2 px-1 py-0.5 rounded'>
            {convertTime(videoInfo?.contentDetails?.duration)?.length <= 2
              ? `00:${convertTime(videoInfo?.contentDetails?.duration)}`
              : convertTime(videoInfo?.contentDetails?.duration)}
          </div>
        ) : null}

        {/* Live video tag */}
        {videoInfo?.snippet?.liveBroadcastContent === "live" ? (
          <div className='bg-red-600 tracking-tight text-white w-fit text-xs font-semibold absolute bottom-1 right-2 px-1 py-0.5 rounded'>
            LIVE
          </div>
        ) : null}
      </div>
      {/* Title and details */}
      <div className='h-[100px] flex pt-2 gap-2 w-full'>
        <div className='h-9 w-9 bg-slate-200 rounded-full flex justify-center items-center'>
          {icon}
        </div>
        <div className='w-[90%] h-full'>
          <h3 className='line-clamp-1 text-base font-semibold'>
            {videoInfo?.snippet?.title}
          </h3>
          <p className='text-gray-500 text-sm'>
            {videoInfo?.snippet?.channelTitle}
          </p>
          <p className='text-gray-500 text-sm'>
            <span>{videoInfo?.statistics?.viewCount} views</span> •{" "}
            <span>{videoInfo?.snippet?.publishedAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
