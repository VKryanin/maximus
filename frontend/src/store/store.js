import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./carsSlice/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsSlice,
  },
  devTools: true,
});

export default store;
