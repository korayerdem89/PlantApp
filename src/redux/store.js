import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import questionsReducer from "./questionsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
  },
});
