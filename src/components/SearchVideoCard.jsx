const SearchVideoCard = ({ data }) => {
  return (
    <div className='w-full flex flex-col sm:flex-row gap-1 sm:gap-4 p-3 sm:p-0 rounded-lg transition-all duration-200 hover:bg-slate-100'>
      <div className='sm:w-[30%] w-full'>
        <img
          src={
            data?.snippet?.thumbnails?.default?.url ||
            data?.snippet?.thumbnails?.medium?.url ||
            data?.snippet?.thumbnails?.high?.url
          }
          alt='thumbnail'
          className='sm:w-[360px] w-full h-[200px] mx-auto object-cover rounded-xl shadow'
        />
      </div>
      <div className='mt-2 w-full sm:w-[70%]'>
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

        {data?.snippet?.liveBroadcastContent === "live" ? (
          <div className='mt-3 bg-red-600 tracking-tight text-white w-fit text-xs font-semibold px-1.5 py-0.5 rounded'>
            LIVE
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchVideoCard;
