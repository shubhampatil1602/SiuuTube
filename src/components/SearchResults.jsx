import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { YOUTUBE_VIDEO_SEARCH_RESULTS_API } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";
import SearchResultsShimmer from "./SearchResultsShimmer";

const SearchResults = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search_query");

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const data = await fetch(YOUTUBE_VIDEO_SEARCH_RESULTS_API + searchQuery);
      const json = await data.json();
      setSearchData(json.items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  if (loading) {
    return <SearchResultsShimmer />;
  }
  return (
    <div className='p-4 flex flex-col gap-4'>
      {searchData?.map((item) => (
        <Link to={`/watch?v=${item?.id?.videoId}`} key={item?.id?.videoId}>
          <SearchVideoCard data={item} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
