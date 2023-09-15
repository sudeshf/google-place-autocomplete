import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./app-store";

export default configureStore({
  reducer: {
    appReducer: appReducer,
  },
});

