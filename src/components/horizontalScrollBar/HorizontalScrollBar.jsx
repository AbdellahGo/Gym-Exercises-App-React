import React, { useState } from 'react'
import './styles.css'
import { iconsMuscle, backwards, forwards } from '../../assets/icons'
import BodyPart from '../bodyPart/BodyPart'

const HorizontalScrollBar = ({ bodyParts, selectedPart, setSelectedPart, isFetching }) => {
  const [scroll, setScroll] = useState(0)

  if (isFetching) return ''
  bodyParts = ['all', ...Object.values(bodyParts)];
  
  return (
    <div className='horizontal-scroll-bar' style={{ marginTop: '80px' }}>
      <div className="container">
        <div className="parent">
          <div className='body-parts w-100 overflow-hidden position-relative' style={{ height: '195px' }}>
            <div className='d-flex position-absolute' style={{ gap: '80px', left: `${scroll > 0 ? 0 : scroll}px` }}>
              {bodyParts?.map((item, i) => (
                <BodyPart key={i} icon={iconsMuscle[`${item}`]} item={item} selectedPart={selectedPart} setSelectedPart={setSelectedPart} />
              ))}
            </div>
          </div>
          <div className='arrows d-flex justify-content-center gap-3 mt-5' style={{ height: '30px' }}>
            <button className='bg-transparent' style={{ outline: 'none', border: 'none' }}
              onClick={() => setScroll((prev) => scroll >= 0 ? 0 : prev += 336)}>
              <img className='h-100' src={backwards} alt="backwards" />
            </button>
            <button className='bg-transparent' style={{ outline: 'none', border: 'none' }}
              onClick={() => setScroll((prev) => scroll <= -3024 ? -3024 : prev += -336)}>
              <img className='h-100' src={forwards} alt="forwards" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalScrollBar
