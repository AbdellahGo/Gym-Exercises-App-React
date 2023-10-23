import React from 'react'
import logo from '../../assets/images/logo-1.png'


const Footer = () => {
  return (
    <div className='footer text-center p-3 bg-dark' style={{marginTop: '80px'}}>
      <div className='parent'>
        <img src={logo} alt="logo" style={{width: '180px'}} />
        <p className='fs-5 fw-normal mt-3'>
          VideoHub © 2023, All Rights Reserved
          created by <span className='fw-bold' style={{color: '#f0fd00'}}>AbdellahGX</span>
        </p>
      </div>
    </div>
  )
}

export default Footer



// VideoHub © 2023, All Rights Reserved
// Design by AbdellahGX