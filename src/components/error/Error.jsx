import React from 'react'

const Error = ({message}) => {
  return (
    <div className='error text-center vh-100' style={{marginTop: '80px'}}>
        <div className='container'>
            <p className='fs-5 text-danger fw-medium'>{message}</p>
        </div>
    </div>
  )
}

export default Error