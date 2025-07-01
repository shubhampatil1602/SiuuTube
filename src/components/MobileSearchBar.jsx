import { RiSearchLine } from "react-icons/ri";

const MobileSearchBar = ({
  searchQuery,
  setSearchQuery,
  suggestions,
  showSuggestions,
  setShowSuggestions,
  selectSuggestions,
  handleSubmit,
  handleSelectSuggestion,
  setMobileSearchOpen,
}) => (
  <div className='fixed top-0 left-0 w-full h-14 bg-white dark:bg-zinc-900 flex items-center px-4 z-50 border-b dark:border-zinc-800'>
    <form onSubmit={handleSubmit} className='flex-1 flex items-center'>
      <input
        type='text'
        placeholder='Search'
        className='outline-none pr-1 w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-400'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
    </form>
    <button
      onClick={() => setMobileSearchOpen(false)}
      className='ml-2 text-2xl text-zinc-800 dark:text-zinc-100'
    >
      ×
    </button>
    {searchQuery && showSuggestions && (
      <div className='absolute left-0 top-14 w-full bg-zinc-50 dark:bg-zinc-900 border dark:border-zinc-800 shadow text-black dark:text-zinc-100 rounded-b-md z-50'>
        <ul className='py-3'>
          {suggestions?.map((suggestion, index) => (
            <li
              key={suggestion}
              className={`py-1.5 px-4 flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
                selectSuggestions == index ? "bg-zinc-300 dark:bg-zinc-700" : ""
              }`}
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              <RiSearchLine />
              <span>{suggestion}</span>
            </li>
          ))}
          {suggestions?.length === 0 && (
            <li className='py-1.5 px-4 flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800'>
              <RiSearchLine />
              <span>{searchQuery}</span>
            </li>
          )}
        </ul>
      </div>
    )}
  </div>
);

export default MobileSearchBar;
