import React, { useState } from 'react'
import HeroBanner from '../components/heroBanner/HeroBanner'
import SearchExercises from '../components/searchExercises/SearchExercises'
import HorizontalScrollBar from '../components/horizontalScrollBar/HorizontalScrollBar'
import Exercises from '../components/exercises/Exercises'
import { useGetBodyPartsQuery, useGetExercisesQuery } from '../redux/RTKApis/exercisesApi'
import Pagination from '../components/pagination/Pagination'
import Error from '../components/error/Error'

const Home = () => {
  const [selectedPage, setSelectedPage] = useState(1)
  const [searchExercises, setSearchExercises] = useState('')
  const [selectedPart, setSelectedPart] = useState('all')
  const { data: bodyParts, isFetching, error } = useGetBodyPartsQuery()
  const { data: exercises, isFetching: isLoading } = useGetExercisesQuery(selectedPart)

  return (
    <div className='home'>
      <HeroBanner />
      <SearchExercises searchExercises={searchExercises} setSearchExercises={setSearchExercises} />
      {error ? <Error message={'Sorry, No results, the monthly quota for orders has expired. Try later'} /> : (
        <>
          <HorizontalScrollBar bodyParts={bodyParts} selectedPart={selectedPart} setSelectedPart={setSelectedPart} isFetching={isFetching} />
          <Exercises exercises={searchExercises ? searchExercises : exercises} selectedPage={selectedPage} isLoading={isLoading} setSelectedPage={setSelectedPage} />
        </>
      )}
    </div>
  )
}

export default Home
