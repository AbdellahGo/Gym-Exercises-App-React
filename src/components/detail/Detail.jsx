import React from 'react'
import { bodyIcon, equipmentIcon, targetIcon } from '../../assets/icons'
import './styles.css'

const Detail = ({ ExerciseDetails }) => {
    const { gifUrl, bodyPart, equipment, name, target, instructions } = ExerciseDetails
    return (
        <div className='detail'>
            <div className='container'>
                <div className='parent d-flex gap-3 align-items-start'>
                    <div className='image' style={{marginTop: '12px',width: '55%'}}>
                        <img className='w-100 rounded' style={{maxHeight: '500px', objectFit: 'cover'}} src={gifUrl} alt={name} />
                    </div>
                    <div className='info w-50'>
                        <h1>{name}</h1>
                        <ul className='d-flex flex-column row-gap-2 list-unstyled'>
                            {instructions.map((instruction, i) => (
                                <li key={i}>{instruction}</li>
                            ))}
                        </ul>
                        <div className='d-flex flex-wrap column-gap-3'>
                            <p className='fw-medium'>
                                <img className='me-3 h-100' src={bodyIcon} alt="bodyIcon" />
                                {bodyPart}
                            </p>
                            <p className='fw-medium'>
                                <img className='me-3 h-100' src={equipmentIcon} alt="equipmentIcon" />
                                {equipment}
                            </p>
                            <p className='fw-medium'>
                                <img className='me-3 h-100' src={targetIcon} alt="targetIcon" />
                                {target}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail