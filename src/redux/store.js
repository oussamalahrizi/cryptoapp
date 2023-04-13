import { configureStore } from "@reduxjs/toolkit";
import Screen from "./Screen";
export default configureStore({
  reducer: {
    screen : Screen,
  },
});