import React from 'react'
import { Container, Row } from 'react-bootstrap'
// import Product from './Product'

const Menu = ({ id, category, img, price, old_price, painter, desc }) => {
  return (
    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
      <div className='full product'>
        <div className='product_img'>
          <div className='center'>
            <img src={img} alt='#' />
            {/* https://i.postimg.cc/d3z3bmD9/p12.png */}
            <div className='overlay_hover'>
              <a className='add-bt' href='product_detail3.html'>
                + Adaugă în coș
              </a>
            </div>
          </div>
        </div>
        <div className='product_detail text_align_center'>
          <p className='product_price'>
            {price}
            <span className='old_price'>Ron {old_price}</span>
          </p>
          <p className='product_descr'>
            {painter} {desc}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Menu
