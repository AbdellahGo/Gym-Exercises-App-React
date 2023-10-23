import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ item }) => {
  return (
    <div className="card bg-dark rounded-2 overflow-hidden">
      <Link to={`/exercise/${item.id}`} className='text-white text-decoration-none'>
        <div className='bg-white p'>
          <img src={item.gifUrl} className="card-img-top" loading='lazy' />
        </div>
        <div className="card-body">
          <p className='text-part d-inline-block p-2 me-2 rounded-pill'>{item.bodyPart}</p>
          <p className='text-target-muscle d-inline-block p-2 rounded-pill'>{item.target}</p>
          <h5 className="card-title">{item.name}</h5>
        </div>
      </Link>
    </div>
  )
}

export default ExerciseCard