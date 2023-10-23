import React, { useState } from 'react'
import { backwards, forwards } from '../../assets/icons'
import ExerciseCard from '../exerciseCard/ExerciseCard'
import './styles.css'
const SimilarExercises = ({ exercisesByType, exerciseName }) => {
    const [scroll, setScroll] = useState(0)
    const screen = window.innerWidth
    const scrollValue = screen <= 783 ? 450 : 336
    const maxScroll = screen <= 783 ? -3224 : -3024
    console.log(scroll);

    return (
        <div className='similar-exercises' style={{ marginTop: '80px' }}>
            <div className="container">
                <div className="parent">
                    <h1>Watch <span style={{color: '#f0fd00'}}>{exerciseName}</span> exercise videos</h1>
                    <div className='scroll-bar mt-4 w-100 overflow-hidden position-relative'>
                        <div className='bar d-flex position-absolute' style={{ gap: '20px', left: `${scroll}px` }}>
                            {exercisesByType?.map((item, i) => (
                                <ExerciseCard key={i} item={item}/>
                            ))}
                        </div>
                    </div>
                    <div className='arrows d-flex justify-content-center gap-3 mt-5' style={{ height: '30px' }}>
                        <button className='bg-transparent' style={{ outline: 'none', border: 'none' }}
                            onClick={() => setScroll((prev) => scroll >= 0 ? 0 : prev += scrollValue)}>
                            <img className='h-100' src={backwards} alt="backwards" />
                        </button>
                        <button className='bg-transparent' style={{ outline: 'none', border: 'none' }}
                            onClick={() => setScroll((prev) => scroll <= maxScroll ? maxScroll : prev += -scrollValue)}>
                            <img className='h-100' src={forwards} alt="forwards" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimilarExercises