import React from 'react'

const BodyPart = ({ item, icon, selectedPart, setSelectedPart }) => {
    return (
        <div className='part text-center p-4 bg-dark d-block'
            style={{ width: '400px !important', cursor: 'pointer', borderTop: selectedPart === item && '3px solid #f0fd00' }}
            onClick={() => setSelectedPart(item)}
        >
            <div style={{ width: '210px' }}>
                <img className='w-25' src={icon} style={{ filter: 'invert(1)' }} />
            </div>
            <p className='fs-5 mt-5' >{item}</p>
        </div>
    )
}

export default BodyPart