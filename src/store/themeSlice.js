import { createSlice } from "@reduxjs/toolkit";

export const THEME_MODES = ["light", "dark", "system"];

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "system" },
  reducers: {
    setTheme: (state, action) => {
      if (THEME_MODES.includes(action.payload)) {
        state.mode = action.payload;
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const selectThemeMode = (state) => state.theme.mode;
export default themeSlice.reducer;
