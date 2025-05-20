import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices/appSLice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
