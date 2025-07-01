const SearchResultsShimmer = () => {
  return (
    <div className='p-4 flex flex-col gap-4 bg-white dark:bg-zinc-900'>
      <SearchResultsShimmerCard />
      <SearchResultsShimmerCard />
      <SearchResultsShimmerCard />
      <SearchResultsShimmerCard />
    </div>
  );
};

export default SearchResultsShimmer;

const SearchResultsShimmerCard = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row gap-4'>
      <div className='sm:w-[30%] w-full'>
        <div className='w-full h-[200px] mx-auto bg-slate-200 dark:bg-zinc-800 animate-pulse rounded-xl shadow' />
      </div>
      <div className='mt-2 w-full sm:w-[70%]'>
        <p className='h-4 w-2/3 bg-slate-200 dark:bg-zinc-800 rounded-md'></p>
        <p className='h-3 w-1/4 bg-slate-200 dark:bg-zinc-800 rounded-md mt-3'></p>
        <p className='h-3 w-2/5 bg-slate-200 dark:bg-zinc-800 rounded-md mt-4'></p>
        <p className='h-6 w-full bg-slate-200 dark:bg-zinc-800 rounded-md mt-5'></p>
      </div>
    </div>
  );
};
