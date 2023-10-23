import React from 'react'
import './styles.css'
const Loader = () => {
  return (
    <div className='loader vh-100' style={{ marginTop: '80px' }}>
      <div className='container'>
        <div className='parent'>
          <div className='m-auto rounded-pill'
            style={{
              width: '100px',
              height: '100px',
              border: '3px solid transparent',
              borderLeftColor: '#f0fd00',
              borderRightColor: '#f0fd00',
              borderTopColor: '#f0fd00',
            }}></div>
        </div>
      </div>
    </div>
  )
}

export default Loader