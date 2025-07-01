const VideoShimmer = () => {
  return (
    <div className='px-4 flex flex-wrap gap-[1rem] justify-center bg-white dark:bg-zinc-900'>
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
      <VideoCardShimmer />
    </div>
  );
};

export default VideoShimmer;

const VideoCardShimmer = () => {
  return (
    <div className={`w-[370px] animate-pulse`}>
      {/* Thumbnail */}
      <div className='w-full h-[215px] bg-slate-200 dark:bg-zinc-800 rounded-lg' />
      {/* Title and details */}
      <div className='h-[100px] flex pt-2 gap-2 w-full'>
        <div className='h-9 w-9 bg-slate-300 dark:bg-zinc-700 rounded-full'></div>
        <div className='w-[90%] h-full'>
          <h3 className='h-4 mb-2 bg-slate-200 dark:bg-zinc-800'></h3>
          <p className='bg-slate-200 dark:bg-zinc-800 h-3 mb-2 w-[70%]'></p>
          <p className='bg-slate-200 dark:bg-zinc-800 h-3 w-[70%]'></p>
        </div>
      </div>
    </div>
  );
};
