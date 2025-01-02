import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import activeTabSlice from "./activeTabSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
    activeTab: activeTabSlice,
  },
});

export default store;
