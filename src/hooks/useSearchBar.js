import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../redux/searchSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function useSearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectSuggestions, setSelectSuggestions] = useState(0);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/results",
      search: `?${createSearchParams({ search_query: searchQuery })}`,
    });
    setMobileSearchOpen(false);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion);
    navigate({
      pathname: "/results",
      search: `?${createSearchParams({ search_query: suggestion })}`,
    });
    setShowSuggestions(false);
    setMobileSearchOpen(false);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => clearTimeout(id);
  }, [searchQuery]);

  return {
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
  };
}
