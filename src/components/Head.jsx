import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../redux/appSlice";
import { toggleTheme } from "../redux/themeSlice";
import { FaYoutube } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import useSearchBar from "../hooks/useSearchBar";
import { Moon, Sun } from "lucide-react";

const Head = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const {
    searchQuery,
    setSearchQuery,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    selectSuggestions,
    setSelectSuggestions,
    mobileSearchOpen,
    setMobileSearchOpen,
    handleSubmit,
    handleSelectSuggestion,
  } = useSearchBar();

  const handleSidebar = () => dispatch(toggleSidebar());

  return (
    <nav className='h-14 sticky bg-white dark:bg-zinc-900 border-b dark:border-zinc-800 z-10 top-0 flex items-center justify-between px-6'>
      <div className='flex justify-center items-center gap-x-6'>
        <div className='font-bold' onClick={handleSidebar}>
          <GiHamburgerMenu
            size={24}
            className='cursor-pointer text-zinc-800 dark:text-zinc-100'
          />
        </div>
        <Link to={"/"}>
          <div className='flex justify-center items-center gap-x-1.5'>
            <FaYoutube size={30} color='red' />
            <span className='font-bold text-2xl tracking-tight text-zinc-900 dark:text-zinc-100'>
              SiuuTube
            </span>
          </div>
        </Link>
      </div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        suggestions={suggestions}
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
        selectSuggestions={selectSuggestions}
        setSelectSuggestions={setSelectSuggestions}
        handleSubmit={handleSubmit}
        handleSelectSuggestion={handleSelectSuggestion}
      />
      <div className='sm:hidden flex items-center'>
        {!mobileSearchOpen ? (
          <button onClick={() => setMobileSearchOpen(true)}>
            <svg
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-search text-zinc-800 dark:text-zinc-100'
            >
              <circle cx='11' cy='11' r='8' />
              <path d='m21 21-4.3-4.3' />
            </svg>
          </button>
        ) : (
          <MobileSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            suggestions={suggestions}
            showSuggestions={showSuggestions}
            setShowSuggestions={setShowSuggestions}
            selectSuggestions={selectSuggestions}
            handleSubmit={handleSubmit}
            handleSelectSuggestion={handleSelectSuggestion}
            setMobileSearchOpen={setMobileSearchOpen}
          />
        )}
      </div>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => dispatch(toggleTheme())}
          className='text-2xl focus:outline-none transition-transform duration-150 text-zinc-800 dark:text-zinc-100'
          title='Toggle theme'
        >
          {theme === "dark" ? (
            <Moon className='size-5' />
          ) : (
            <Sun className='size-5' />
          )}
        </button>
        <button className='hidden sm:flex justify-center items-center gap-0.5 bg-slate-100 dark:bg-zinc-800 rounded-3xl h-10 w-24'>
          <FiPlus size={25} className='text-zinc-800 dark:text-zinc-100' />
          <span className='font-semibold text-sm text-zinc-900 dark:text-zinc-100'>
            Create
          </span>
        </button>
        <div>
          <IoMdNotificationsOutline
            size={26}
            className='cursor-pointer text-zinc-800 dark:text-zinc-100'
          />
        </div>
        <div>
          <img
            src='https://randomuser.me/api/portraits/men/75.jpg'
            alt='profile'
            className='w-9 h-9 rounded-full object-cover border border-gray-300 dark:border-zinc-700'
          />
        </div>
      </div>
    </nav>
  );
};

export default Head;
