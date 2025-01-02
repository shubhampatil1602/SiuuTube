import { createSlice } from "@reduxjs/toolkit";

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState: "All",
  reducers: {
    toggleTab: (state, action) => {
      return action.payload;
    },
  },
});

export const { toggleTab } = activeTabSlice.actions;

export default activeTabSlice.reducer;
