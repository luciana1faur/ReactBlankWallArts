import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import Product from './Product'

const Navbar = (props) => {
  // const { products } = props
  return (
    <nav className='navbar navbar-expand-sm navbar-light px-sm-5'>
      <Link to='/'>
        <img
          src='./images/logo.jpg'
          alt='Blank Wall Art'
          className='navbar-brand'
        />
      </Link>
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/'>
            <ButtonContainer>Cumpără artă online!</ButtonContainer>
          </Link>
        </li>
      </ul>
      <Link to='/cart' className='ml-auto'>
        <ButtonContainer>
          <span className='mr-2'>
            <FaCartPlus />
            {/* <img src='./images/menu_icon.png' alt='Coș de cumpărături' /> */}
          </span>
          Coș de cumpărături
          {/* <div>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div> */}
        </ButtonContainer>
      </Link>
    </nav>
  )
}

export default Navbar
