import { RiSearchLine } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  suggestions,
  showSuggestions,
  setShowSuggestions,
  selectSuggestions,
  setSelectSuggestions,
  handleSubmit,
  handleSelectSuggestion,
}) => (
  <div className='flex w-[39rem] gap-4 max-sm:hidden'>
    <div className='w-full'>
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (selectSuggestions <= 1) setSelectSuggestions(0);
          if (e.keyCode === 40)
            setSelectSuggestions(
              suggestions.length > selectSuggestions
                ? selectSuggestions + 1
                : selectSuggestions
            );
          else if (e.keyCode === 38)
            setSelectSuggestions(
              selectSuggestions > 0 ? selectSuggestions - 1 : 0
            );
          else if (e.keyCode === 13 && suggestions[selectSuggestions]) {
            setSearchQuery(suggestions[selectSuggestions]);
            setShowSuggestions(false);
          }
        }}
        className='border dark:border-zinc-800 h-10 w-full pl-4 flex justify-between items-center rounded-3xl bg-white dark:bg-zinc-900'
      >
        <input
          type='text'
          placeholder='Search'
          className='outline-none pr-1 w-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-400'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
        />
        <button className='bg-slate-100 dark:bg-zinc-800 h-full w-16 overflow-hidden rounded-r-3xl border-l dark:border-zinc-800 flex justify-center items-center text-zinc-800 dark:text-zinc-100'>
          <RiSearchLine size={20} />
        </button>
      </form>
      {searchQuery && showSuggestions && (
        <div className='bg-zinc-50 dark:bg-zinc-900 border dark:border-zinc-800 shadow text-black dark:text-zinc-100 fixed w-[31.8rem] mt-2 rounded-md'>
          <ul className='py-3'>
            {suggestions?.map((suggestion, index) => (
              <li
                key={suggestion}
                className={`py-1.5 px-4 flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
                  selectSuggestions == index
                    ? "bg-zinc-300 dark:bg-zinc-700"
                    : ""
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
    <button className='h-10 w-11 bg-slate-100 dark:bg-zinc-800 rounded-full flex justify-center items-center text-zinc-800 dark:text-zinc-100'>
      <MdKeyboardVoice size={25} />
    </button>
  </div>
);

export default SearchBar;
