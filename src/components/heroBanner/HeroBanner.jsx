import React from 'react'
import banner from '../../assets/images/banner.avif'

import './styles.css'

const HeroBanner = () => {
  return (
    <div className='hero-banner'>
      <div className='container'>
        <div className='parent d-flex justify-content-between align-items-end'>
          <div className='text w-50' style={{ marginTop: '80px' }}>
            <p className='fw-medium' style={{ color: '#f0fd00' }}>Fitness Club</p>
            <p className='h1'>Sweat, Smile <br /> And Repeat</p>
            <p className='my-5 mt-4 fs-6'>Check out the most effective exercises personalized to you</p>
            <a className='p-2 text-black fw-medium text-decoration-none' style={{ backgroundColor: '#f0fd00', cursor: 'pointer' }} href="#exercises">Explore Exercises</a>
            <div className='position-relative'>
              <p
                className='position-absolute m-0'
                style={{ fontSize: '180px', color: '#f0fd0050' }}
              >
                Exercises
              </p>
            </div>
          </div>
          <div className='banner z-2 d-lg-block d-none' style={{ width: '500px', }}>
            <img src={banner} alt="banner" className='w-100' style={{ borderRadius: '0 0 0 80px' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner