import { configureStore } from "@reduxjs/toolkit";
import { exercisesApi } from "./RTKApis/exercisesApi";
import { exercisesVideosApi } from "./RTKApis/exercisesVideosApi";

export default configureStore({
  reducer: {
    [exercisesApi.reducerPath]: exercisesApi.reducer,
    [exercisesVideosApi.reducerPath]: exercisesVideosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    exercisesApi.middleware,
    exercisesVideosApi.middleware
  ),
});
