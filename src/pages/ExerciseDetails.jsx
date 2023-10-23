import React from 'react'
import Detail from '../components/detail/Detail'
import { useParams } from 'react-router-dom'
import { useGetExerciseByEquipmentQuery, useGetExerciseByTargetQuery, useGetExerciseDetailsQuery } from '../redux/RTKApis/exercisesApi'
import ExercisesVideos from '../components/exercisesVideos/ExercisesVideos'
import { useGetExercisesVideosQuery } from '../redux/RTKApis/exercisesVideosApi'
import SimilarExercises from '../components/similarExercises/SimilarExercises'
import Loader from '../components/loader/Loader'
import Error from '../components/error/Error'



const ExerciseDetails = () => {
  const { id } = useParams()
  const { data, isFetching, errorDetails } = useGetExerciseDetailsQuery(id)
  const { data: exercisesVideos, errorVideos } = useGetExercisesVideosQuery(data?.name)
  const { data: exercisesByEquipment, errorEquipment } = useGetExerciseByEquipmentQuery(data?.equipment)
  const { data: exercisesByTarget, errorTarget } = useGetExerciseByTargetQuery(data?.target)

  if (isFetching) return <Loader />
  if (!data || errorDetails || errorVideos || errorEquipment || errorTarget) return <Error message={'Sorry, an error occurred and the data for this application was not obtained. Try again'} />
  return (
    <div className='exercises-details' style={{ marginTop: '80px' }}>
      <Detail ExerciseDetails={data} />
      <ExercisesVideos exerciseName={data.name} exercisesVideos={exercisesVideos?.contents} />
      <SimilarExercises exerciseName={data.name} exercisesByType={exercisesByEquipment} />
      <SimilarExercises exerciseName={data.name} exercisesByType={exercisesByTarget} />
    </div>
  )
}

export default ExerciseDetails