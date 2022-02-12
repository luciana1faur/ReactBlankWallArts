import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'

const Navbar = () => {
  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src='./images/logo.jpg' alt='Blank Wall Art' />
      </div>
      <div className='right_header_info'>
        <ul className='links'>
          <li className=''>Acasa</li>
        </ul>
      </div>
      <button className='show-container'>
        <img src='./images/menu_icon.png' alt='burger' />
      </button>

      {/* <div className='links-container show-container'></div>
      <ul className='social-icons'></ul> */}
    </div>
  )
}
export default Navbar
