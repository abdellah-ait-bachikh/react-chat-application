import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TappInitialState } from "../../lib/types";

const initialState: TappInitialState = {
  navOpen: false,
  disktopNotifications:false
};
const appSLice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNavOpen(state, action: PayloadAction<TappInitialState["navOpen"]>) {
      state.navOpen = action.payload;
    },
    setDesktopNotification(state, action: PayloadAction<TappInitialState["disktopNotifications"]>) {
      state.disktopNotifications = action.payload;
    },
  },
});


export const {setNavOpen,setDesktopNotification} = appSLice.actions
export const appReducer = appSLice.reducer