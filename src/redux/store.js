import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import activeTabSlice from "./activeTabSlice";
import videosReducer from "./videosSlice";
import themeReducer from "./themeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    activeTab: activeTabSlice,
    videos: videosReducer,
    theme: themeReducer,
  },
});

export default store;
