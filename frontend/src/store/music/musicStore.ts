import { configureStore } from "@reduxjs/toolkit";
import { saavanApi } from '../../api/music/saavanApi';

export const musicStore=  configureStore({
    reducer: {
        [saavanApi.reducerPath]: saavanApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saavanApi.middleware),
})

