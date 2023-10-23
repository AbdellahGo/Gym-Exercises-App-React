import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY_EXERCISES,
  "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
};

const baseUrl = "https://exercisedb.p.rapidapi.com";

export const exercisesApi = createApi({
  reducerPath: "exercisesApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  endpoints: (builder) => ({
    getBodyParts: builder.query({
      query: () => "exercises/bodyPartList",
    }),
    getExercises: builder.query({
      query: (bodyPart) =>
        `exercises${
          bodyPart === "all" ? "" : `/bodyPart/${bodyPart}`
        }?limit=1324`,
    }),
    getExerciseDetails: builder.query({
      query: (id) => `exercises/exercise/${id}`,
    }),
    getExerciseByEquipment: builder.query({
      query: (type) => `exercises/equipment/${type}`,
    }),
    getExerciseByTarget: builder.query({
      query: (type) => `exercises/target/${type}`,
    }),
  }),
});

export const {
  useGetBodyPartsQuery,
  useGetExercisesQuery,
  useGetExerciseDetailsQuery,
  useGetExerciseByEquipmentQuery,
  useGetExerciseByTargetQuery
} = exercisesApi;
