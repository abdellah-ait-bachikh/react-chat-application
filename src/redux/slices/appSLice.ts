import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TappInitialState } from "../../lib/types";

const initialState: TappInitialState = {
  navOpen: false,
};
const appSLice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNavOpen(state, action: PayloadAction<TappInitialState["navOpen"]>) {
      state.navOpen = action.payload;
    },
  },
});


export const {setNavOpen} = appSLice.actions
export const appReducer = appSLice.reducer