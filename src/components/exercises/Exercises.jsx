import React from 'react'
import './styles.css'
import ExerciseCard from '../exerciseCard/ExerciseCard'
import Loader from '../loader/Loader'
import Pagination from '../pagination/Pagination'
import Error from '../error/Error'

const Exercises = ({ exercises, isLoading, selectedPage, setSelectedPage }) => {
  const numberOfExercises = 8 * selectedPage
  const numberStartExercises = selectedPage === 1 ? 0 : numberOfExercises - 8
  if(!isLoading && !exercises?.length) return <Error message={`There may not be an exercise with the name you entered. Try again`} />

  
  return (
    <div id='exercises' className='exercises' style={{ marginTop: '80px' }}>
      <div className="container">
        <div className="parent">
          <h2>Showing Results</h2>
          <div className='cards mt-4'>
            {isLoading ? <Loader/> : exercises?.slice(numberStartExercises, numberOfExercises)?.map((item) => (
              <ExerciseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <Pagination numberPages={ Math.floor(exercises?.length / 8)} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </div>
    </div>
  )
}

export default Exercises