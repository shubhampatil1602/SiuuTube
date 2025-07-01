const PROXY_URL = "https://thingproxy.freeboard.io/fetch/";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}`;

export const YOUTUBE_LIVE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=10&type=video&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}&q=news`;

export const WATCH_PAGE = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}&id=`;

export const YOUTUBE_SEARCH_SUGGESTIONS_API = `${PROXY_URL}http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=`;

export const YOUTUBE_VIDEO_SEARCH_RESULTS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&safeSearch=moderate&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}&q=`;
