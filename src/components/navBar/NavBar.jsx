import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logo-1.png'
import { Link } from 'react-router-dom'
import './styles.css'
import {
  facebook,
  github,
  tiktok
} from '../../assets/icons'


const NavBar = () => {

  return (
    <div className='nav-bar bg-dark'>
      <div className='container'>
        <div className='parent py-2 d-flex gap-3 flex-nowrap align-items-center'>
          <div className='logo w-25'>
            <Link to='/'>
              <img src={Logo} alt="logo" className='w-100' />
            </Link>
          </div>

          <div className='parent-links d-flex pt-3 align-items-end justify-content-between  w-75'>
            <ul className='routes d-flex gap-3 w-50 list-unstyled'>
              <li className='nav-item pb-1'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item pb-1'>
                <a className='nav-link' href="#exercises">
                  Exercises
                </a>
              </li>
            </ul>
            <ul className='media d-none d-md-flex gap-3 w-50 justify-content-end list-unstyled'>
              <li className='nav-item'>
                <a className='nav-link bg-light' target='_blank' href='https://github.com/AbdellahGo'>
                  <img className='w-100' src={github} alt="github" />
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link bg-light' target='_blank' href='https://www.tiktok.com/@zigzagxz3'>
                  <img className='w-100' src={tiktok} alt="tiktok" />
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link bg-light' target='_blank' href='https://www.facebook.com/profile.php?id=100053501469803'>
                  <img className='w-100' src={facebook} alt="facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
