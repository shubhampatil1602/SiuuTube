export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${
  import.meta.env.VITE_YOUTUBE_API_KEY
}`;

// export const YOUTUBE_VIDEOS_API =
//   "https://www.googleapis.com/youtube/v3/search?part=snippet&q=dwarka&maxResults=25&key=AIzaSyCsF3aw9Mq5B8zC_b_HjIMN3Op3yB-Kzhk";

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
