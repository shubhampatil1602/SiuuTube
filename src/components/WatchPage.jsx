import { useState, useEffect } from "react";
import { WATCH_PAGE } from "../utils/constants";
import {
  MdThumbUpOffAlt,
  MdThumbUp,
  MdThumbDownOffAlt,
  MdThumbDown,
} from "react-icons/md";
import { formatViews } from "../utils/helper";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { closeMenu } from "../redux/appSlice";
import CommentContainer from "./CommentContainer";
import LiveChats from "./LiveChats";

function formatTimeAgo(dateString) {
  const now = new Date();
  const published = new Date(dateString);
  const seconds = Math.floor((now - published) / 1000);
  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-600 dark:text-blue-400 underline break-all'
      >
        {part}
      </a>
    ) : (
      part
    )
  );
}

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [descExpanded, setDescExpanded] = useState(false);
  const [reaction, setReaction] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const dispatch = useDispatch();
  const queryParam = useLocation();
  const videoId = queryParam.search.split("?v=")[1];

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    async function fetchVideoDetails() {
      try {
        const res = await fetch(`${WATCH_PAGE}${videoId}`);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setVideoDetails(data.items[0]);
        } else {
          setVideoDetails(undefined);
        }
      } catch {
        setVideoDetails(undefined);
      }
    }
    if (videoId) fetchVideoDetails();
  }, [videoId]);

  // Reset reaction and subscribe state when video changes
  useEffect(() => {
    setReaction(null);
    setSubscribed(false);
  }, [videoDetails]);

  return (
    <div className='h-full p-4 sm:flex gap-4 w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100'>
      <div className='h-full sm:w-[65vw] flex flex-col'>
        <div className='mt-3 w-full order-1'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?si=k6qhJWPSGDVUdxkk&autoplay=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
            className={`rounded-lg w-full h-[350px] sm:h-[450px] lg:w-full lg:h-[500px] bg-black`}
          ></iframe>
        </div>
        {!videoDetails ? (
          <div className='text-red-500 mt-3 order-2'>
            No video found or failed to load video details.
          </div>
        ) : !videoDetails.snippet ? (
          <div className='text-red-500 mt-3 order-2'>
            Failed to load video details.
          </div>
        ) : (
          <div className='order-2 mt-3 rounded-2xl p-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100'>
            {/* Title */}
            <h2 className='text-lg font-bold mb-4'>
              {videoDetails.snippet.title}
            </h2>
            {/* Channel info and subscribe */}
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4'>
              <div className='flex items-center gap-3'>
                {/* Channel avatar placeholder */}
                <div className='w-10 h-10 rounded-full bg-slate-300 dark:bg-zinc-700 flex items-center justify-center font-bold text-lg text-zinc-900 dark:text-zinc-100'>
                  {videoDetails.snippet.channelTitle?.[0] || "?"}
                </div>
                <div className='flex flex-col'>
                  <span className='font-semibold text-base'>
                    {videoDetails.snippet.channelTitle}
                  </span>
                </div>
                <button
                  className={`ml-4 px-4 py-1.5 rounded-full font-semibold text-sm hover:opacity-90 transition ${
                    subscribed
                      ? "bg-gray-300 dark:bg-zinc-800 text-black dark:text-zinc-100"
                      : "bg-black text-white dark:bg-white dark:text-black"
                  }`}
                  onClick={() => setSubscribed((prev) => !prev)}
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </button>
              </div>
              {/* Action buttons */}
              <div className='flex items-center gap-2'>
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-semibold bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition-all duration-150 ${
                    reaction === "like"
                      ? "text-zinc-900 dark:text-zinc-100"
                      : ""
                  }`}
                  onClick={() =>
                    setReaction(reaction === "like" ? null : "like")
                  }
                >
                  {reaction === "like" ? (
                    <MdThumbUp className='text-xl' />
                  ) : (
                    <MdThumbUpOffAlt className='text-xl' />
                  )}
                  {videoDetails.statistics?.likeCount
                    ? formatViews(videoDetails.statistics.likeCount)
                    : ""}
                </button>
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-semibold bg-gray-200 dark:bg-neutral-700 hover:bg-gray-300 dark:hover:bg-neutral-600 transition-all duration-150 ${
                    reaction === "dislike"
                      ? "text-zinc-900 dark:text-zinc-100"
                      : ""
                  }`}
                  onClick={() =>
                    setReaction(reaction === "dislike" ? null : "dislike")
                  }
                >
                  {reaction === "dislike" ? (
                    <MdThumbDown className='text-xl' />
                  ) : (
                    <MdThumbDownOffAlt className='text-xl' />
                  )}
                </button>
              </div>
            </div>

            <div className='text-gray-800 dark:text-zinc-100 bg-gray-200 dark:bg-neutral-800 rounded-xl p-4 mt-2'>
              {/* Stats row */}
              <div className='mb-2 font-semibold text-gray-700 dark:text-zinc-200 text-base flex flex-wrap gap-2 items-center '>
                <span>
                  {videoDetails.statistics?.viewCount
                    ? Number(videoDetails.statistics.viewCount).toLocaleString()
                    : "?"}{" "}
                  views
                </span>
                <span>•</span>
                <span>
                  {videoDetails.snippet.publishedAt
                    ? formatTimeAgo(videoDetails.snippet.publishedAt)
                    : "?"}
                </span>
              </div>
              {/* Description (YouTube style) */}
              <div
                className={`relative transition-all duration-200 ${
                  descExpanded ? "" : "line-clamp-3"
                }`}
                style={{ whiteSpace: "pre-line" }}
              >
                {linkify(videoDetails.snippet.description)}
                {videoDetails.snippet.description &&
                  videoDetails.snippet.description.split("\n").length > 3 && (
                    <button
                      className='absolute right-0 bottom-0 font-semibold px-2 py-0.5 rounded hover:underline bg-gray-200 dark:bg-neutral-800'
                      onClick={() => setDescExpanded((v) => !v)}
                    >
                      {descExpanded ? "Show less" : "...more"}
                    </button>
                  )}
              </div>
            </div>
          </div>
        )}
        <div className='h-80 sm:hidden bg-slate-100 dark:bg-zinc-800 border dark:border-zinc-700 shadow-md rounded-lg mt-3 order-3 overflow-y-auto'>
          <LiveChats />
        </div>
        <div className='sm:pb-6 order-4 sm:order-3'>
          <CommentContainer />
        </div>
      </div>
      <div className='hidden sm:block sm:w-[35vw] sm:h-[600px] bg-slate-100 dark:bg-zinc-800 border dark:border-zinc-700 shadow-md rounded-lg sm:mt-3 order-3 sm:order-4 overflow-y-auto'>
        <LiveChats />
      </div>
    </div>
  );
};

export default WatchPage;
