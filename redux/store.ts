import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./services/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
