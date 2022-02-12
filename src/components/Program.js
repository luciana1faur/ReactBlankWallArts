import React from 'react'
import Menu from './Menu'
import { Container, Row, Col } from 'react-bootstrap'

const Program = (props) => {
  const listaNoua = props.lista.map((product) => {
    return (
      <Menu
        id={product.id}
        category={product.category}
        img={product.img}
        price={product.price}
        old_price={product.old_price}
        painter={product.painter}
        desc={product.desc}
      />
    )
  })

  return (
    <div className='ourproduct'>
      <div className='container'>
        <div className='row'></div>
        <div style={{ overflow: 'hidden' }} className='row product_style_3 '>
          {listaNoua}
        </div>
      </div>
      {/* <div className=' d-flex justify-content-between' */}
    </div>
  )
}

export default Program
