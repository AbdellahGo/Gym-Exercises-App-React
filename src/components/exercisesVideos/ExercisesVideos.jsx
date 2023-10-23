import React from 'react'
import { Link } from 'react-router-dom';


const ExercisesVideos = ({ exerciseName, exercisesVideos }) => {


  return (
    <div className='exercises-videos' style={{ marginTop: '80px' }}>
      <div className='container'>
        <div className="parent">
          <h1>Watch <span style={{ color: '#f0fd00' }}>{exerciseName}</span> Exercise Videos</h1>
          <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 row-gap-4 mt-4'>
            {exercisesVideos?.slice(0, 3).map((item) => (
              <Link key={item?.video?.videoId} target='_blank' to={`https://www.youtube.com/watch?v=${item?.video?.videoId}`} className='text-decoration-none'>
                <div className='card rounded bg-dark text-white'>
                  <img src={item?.video?.thumbnails[0]?.url} alt={exerciseName}/>
                  <div className='card-body'>
                    <h2 className='card-title'>{exerciseName}</h2>
                    <p className='card-text'>{item?.video?.channelName}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ExercisesVideos