import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import { useGetExercisesQuery } from '../../redux/RTKApis/exercisesApi'

const SearchExercises = ({ setSearchExercises }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const input = useRef('')
    const { data } = useGetExercisesQuery('all')

    useEffect(() => {
        if (searchTerm) {
            setSearchExercises(data?.filter((exercise) =>
                exercise.name.toLowerCase().includes(searchTerm) ||
                exercise.target.toLowerCase().includes(searchTerm) ||
                exercise.bodyPart.toLowerCase().includes(searchTerm) ||
                exercise.equipment.toLowerCase().includes(searchTerm)
            ))
        }
    }, [searchTerm])

    return (
        <div className='search-exercises text-center' style={{ marginTop: '80px' }}>
            <div className='container'>
                <div className='parent'>
                    <p className='fs-1'>Awesome Exercises You <br />Should Know</p>
                    <div className='bg-dark'>
                        <input
                            ref={input}
                            className='bg-dark p-2 text-light'
                            style={{ width: '85%', border: 'none', outline: 'none' }}
                            type="text"
                            placeholder='Search For Exercises'
                        />
                        <button
                            className='p-2 fw-medium' style={{ backgroundColor: '#f0fd00', width: '15%', border: 'none', outline: 'none' }}
                            onClick={() => {
                                setSearchTerm(input.current.value.toLowerCase())
                                input.current.value = ''
                            }}
                        >Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchExercises