import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { YOUTUBE_VIDEO_SEARCH_RESULTS_API } from "../utils/constants";
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
        <SearchVideoCard key={item?.id?.videoId} data={item} />
      ))}
    </div>
  );
};

export default SearchResults;

const SearchVideoCard = ({ data }) => {
  return (
    <div className='w-full flex gap-4'>
      <div className='w-[30%]'>
        <img
          src={
            data?.snippet?.thumbnails?.default?.url ||
            data?.snippet?.thumbnails?.medium?.url ||
            data?.snippet?.thumbnails?.high?.url
          }
          alt='thumbnail'
          className='w-[360px] h-[200px] mx-auto object-cover rounded-xl shadow'
        />
      </div>
      <div className='mt-2 w-[70%]'>
        <h4 className='line-clamp-1 text-xl font-medium'>
          {data?.snippet?.title}
        </h4>
        <p className='text-gray-600 text-sm'>
          <span className=''>{Math.floor(Math.random() * 1000)}K views</span>{" "}
          <span>•</span> <span>{data?.snippet?.publishedAt} ago</span>
        </p>
        <div className='text-sm flex gap-1 items-center mt-4'>
          <div className='h-6 w-6 rounded-full flex justify-center items-center font-medium text-black bg-slate-200'>
            {data?.snippet?.channelTitle[0]}
          </div>
          <span className='text-gray-600 '>{data?.snippet?.channelTitle}</span>
        </div>
        <p className='line-clamp-2 text-gray-600 text-sm mt-5'>
          {data?.snippet?.description}
        </p>
      </div>
    </div>
  );
};
