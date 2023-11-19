import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import roomReducer from './room/roomSlice'

export const Store = configureStore({
    reducer: {
        auth: authReducer,
        room: roomReducer
    }
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch