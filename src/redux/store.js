import { configureStore } from "@reduxjs/toolkit";
import Onboard from "./Onboard";
export default configureStore({
  reducer: {
    onboard : Onboard,
  },
});