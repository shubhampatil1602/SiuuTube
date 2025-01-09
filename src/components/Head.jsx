import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

import { toggleSidebar } from "../redux/appSlice";
import { cacheResults } from "../redux/searchSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";

import { FaYoutube } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectSuggestions, setSelectSuggestions] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);

  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = {
      search_query: searchQuery,
    };
    navigate({
      pathname: "/results",
      search: `?${createSearchParams(queryParams)}`,
    });
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);

    const queryParams = {
      search_query: suggestion,
    };
    navigate({
      pathname: "/results",
      search: `?${createSearchParams(queryParams)}`,
    });
    setShowSuggestions(false);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [searchQuery]);

  return (
    <nav className='h-14 sticky bg-white border-b z-10 top-0 flex items-center justify-between px-6'>
      {/* (Left) - Ham Menu & Logo */}
      <div className='flex justify-center items-center gap-x-6'>
        <div className='font-bold' onClick={handleSidebar}>
          <GiHamburgerMenu size={24} className='cursor-pointer ' />
        </div>
        <Link to={"/"}>
          <div className='flex justify-center items-center gap-x-1.5'>
            <FaYoutube size={30} color='red' />
            <span className='font-bold text-2xl tracking-tight'>SiuuTube</span>
          </div>
        </Link>
      </div>

      {/* (Middle) - Search Bar */}
      <div className='flex w-[39rem] gap-4'>
        <div className='w-full'>
          <form
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (selectSuggestions <= 1) {
                setSelectSuggestions(0);
              }
              if (e.keyCode === 40) {
                setSelectSuggestions(
                  suggestions.length > selectSuggestions
                    ? selectSuggestions + 1
                    : selectSuggestions
                );
              } else if (e.keyCode === 38) {
                setSelectSuggestions(
                  selectSuggestions > 0 ? selectSuggestions - 1 : 0
                );
              } else if (e.keyCode === 13 && suggestions[selectSuggestions]) {
                setSearchQuery(suggestions[selectSuggestions]);
                setShowSuggestions(false);
              }
            }}
            className={`border h-10 w-full pl-4 flex justify-between items-center rounded-3xl`}
          >
            <input
              type='search'
              placeholder='Search'
              className='outline-none pr-1 w-full'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            />

            <button className='bg-slate-100 h-full w-16 overflow-hidden rounded-r-3xl border-l flex justify-center items-center'>
              <RiSearchLine size={20} />
            </button>
          </form>

          {searchQuery && showSuggestions && (
            <div
              className={`bg-zinc-50 border shadow text-black fixed w-[31.8rem] mt-2 rounded-md`}
            >
              <ul className='py-3'>
                {suggestions?.map((suggestion, index) => (
                  <li
                    key={suggestion}
                    className={`py-1.5 px-4 flex items-center gap-2 hover:bg-zinc-200 ${
                      selectSuggestions == index ? "bg-zinc-300" : ""
                    }`}
                    onClick={() => handleSelectSuggestion(suggestion)}
                  >
                    <RiSearchLine />
                    <span>{suggestion}</span>
                  </li>
                ))}
                {suggestions?.length === 0 && (
                  <li className='py-1.5 px-4 flex items-center gap-2 hover:bg-zinc-200'>
                    <RiSearchLine />
                    <span>{searchQuery}</span>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
        <button className='h-10 w-11 bg-slate-100 rounded-full flex justify-center items-center'>
          <MdKeyboardVoice size={25} />
        </button>
      </div>

      {/* (Right) - User Info */}
      <div className='flex items-center justify-center gap-5'>
        <button className='hidden sm:flex justify-center items-center gap-0.5 bg-slate-100 rounded-3xl h-10 w-24'>
          <FiPlus size={25} />
          <span className='font-semibold text-sm'>Create</span>
        </button>
        <button>
          <IoMdNotificationsOutline size={30} />
        </button>
        <button>
          <img
            src='https://yt3.ggpht.com/yti/ANjgQV-VoNAOqZfsmMRRRNjBjuzlunbgkAlFi9t9NnZj48so2Amg=s108-c-k-c0x00ffffff-no-rj'
            alt='profile'
            className='h-8 w-8 rounded-full'
          />
        </button>
      </div>
    </nav>
  );
};

export default Head;
