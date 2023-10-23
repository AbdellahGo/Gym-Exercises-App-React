import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY_YOUTUBE,
  "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
};

const baseUrl = "https://youtube-search-and-download.p.rapidapi.com";

export const exercisesVideosApi = createApi({
  reducerPath: "exercisesVideosApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  endpoints: (builder) => ({
    getExercisesVideos: builder.query({
      query: (name) => `/search?query=${name}`,
    }),
  }),
});

export const { useGetExercisesVideosQuery } = exercisesVideosApi;