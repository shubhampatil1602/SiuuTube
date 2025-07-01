import { useEffect, useState, useRef, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { YOUTUBE_VIDEO_SEARCH_RESULTS_API } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";
import SearchResultsShimmer from "./SearchResultsShimmer";

const MAX_RESULTS = 50;

const SearchResults = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const loader = useRef(null);

  const fetchSearchResults = async (pageToken = "") => {
    try {
      setLoading(true);
      let url = YOUTUBE_VIDEO_SEARCH_RESULTS_API + searchQuery;
      if (pageToken) url += `&pageToken=${pageToken}`;
      const data = await fetch(url);
      const json = await data.json();
      setSearchData((prev) => {
        const items = Array.isArray(json.items) ? json.items : [];
        const combined = pageToken ? [...prev, ...items] : items;
        return combined.slice(0, MAX_RESULTS);
      });
      setNextPageToken(json.nextPageToken || null);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Reset and fetch new results on search change
  useEffect(() => {
    setSearchData([]);
    setNextPageToken(null);
    fetchSearchResults();
    // eslint-disable-next-line
  }, [searchQuery]);

  // Infinite scroll observer
  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      // Only fetch more if we have less than MAX_RESULTS
      if (
        target.isIntersecting &&
        nextPageToken &&
        !loading &&
        (Array.isArray(searchData) ? searchData.length : 0) < MAX_RESULTS
      ) {
        fetchSearchResults(nextPageToken);
      }
    },
    [nextPageToken, loading, searchData]
  );

  useEffect(() => {
    const option = { root: null, rootMargin: "20px", threshold: 1.0 };
    const observer = new window.IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  // Only show videos (not channels or playlists)
  const videoResults = Array.isArray(searchData)
    ? searchData.filter((item) => item.id?.kind === "youtube#video")
    : [];

  return (
    <div className='p-4 flex flex-col gap-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100'>
      {videoResults.map((item) => (
        <Link to={`/watch?v=${item?.id?.videoId}`} key={item?.id?.videoId}>
          <SearchVideoCard data={item} />
        </Link>
      ))}
      <div ref={loader} />
      {loading && <SearchResultsShimmer />}
    </div>
  );
};

export default SearchResults;
