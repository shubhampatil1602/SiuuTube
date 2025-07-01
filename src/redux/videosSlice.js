import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videosByTab: {}, // { [tabName]: [array of videos] }
};

const videosSlice = createSlice({
  name: "videos",
  initialState,

  reducers: {
    setVideosForTab: (state, action) => {
      const { tab, videos, append } = action.payload;
      const items = Array.isArray(videos) ? videos : [];
      const filteredVideos = items.filter(
        (item) => !item.id.kind || item.id.kind === "youtube#video"
      );
      if (append) {
        state.videosByTab[tab] = [
          ...(state.videosByTab[tab] || []),
          ...filteredVideos,
        ];
      } else {
        state.videosByTab[tab] = filteredVideos;
      }
    },
    clearVideos: (state) => {
      state.videosByTab = {};
    },
  },
});

export const { setVideosForTab, clearVideos } = videosSlice.actions;

export default videosSlice.reducer;
