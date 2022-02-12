import React, { Component, useState } from 'react'
import Program from './Program'
import Categories from './Categories'
import Data from './Data'

const Product = () => {
  const menu = [
    {
      id: 1,
      category: 'Picturi',
      img: './images/p11.png',
      price: 18583,
      old_price: 20000,
      painter: 'Thomas Steyer',
      desc: ' - THUNDER',
    },
    {
      id: 2,
      category: 'Sculpturi',
      img: './images/p21.png',
      price: 23878,
      old_price: 25000,
      painter: 'Malcolm Tait',
      desc: ' - A FRAGILE HARMONY',
    },
    {
      id: 3,
      category: 'Fotografii',
      img: './images/p31.png',
      price: 23177,
      old_price: 25000,
      painter: 'Jean Turco',
      desc: ' - Fotografie',
    },
    {
      id: 4,
      category: 'Desene',
      img: './images/p41.png',
      price: 3470,
      old_price: 4000,
      painter: 'Maria Susarenko',
      desc: ' - INK ON CARDBOARD',
    },
    {
      id: 5,
      category: 'Picturi',
      img: './images/p12.png',
      price: 15715,
      old_price: 17000,
      painter: 'Ira Volkova',
      desc: ' - OIL ON CANVAS',
    },
    {
      id: 6,
      category: 'Sculpturi',
      img: './images/p22.png',
      price: 3679,
      old_price: 4000,
      painter: 'Picrate',
      desc: ' - Offrande',
    },
    {
      id: 7,
      category: 'Fotografii',
      img: './images/p32.png',
      price: 181,
      old_price: 300,
      painter: 'Marilyne K.',
      desc: " - HARMONIE D'UN SOIR",
    },
    {
      id: 8,
      category: 'Desene',
      img: './images/p42.png',
      price: 1357,
      old_price: 1700,
      painter: 'Nath Chipilova',
      desc: '- BEAUTE 1991',
    },
    {
      id: 9,
      category: 'Picturi',
      img: './images/p13.png',
      price: 10301,
      old_price: 15000,
      painter: 'Val Escoubet',
      desc: '- SUNSHINE IN THE WINTER',
    },
    {
      id: 10,
      category: 'Sculpturi',
      img: './images/p23.png',
      price: 2107,
      old_price: 2700,
      painter: 'Didier Fournier',
      desc: '- VICTOIRE',
    },
    {
      id: 11,
      category: 'Fotografii',
      img: './images/p33.png',
      price: 13878,
      old_price: 15000,
      painter: 'Bettina Dupont',
      desc: '- CREER SA BULLE (2020)',
    },
    {
      id: 11,
      category: 'Desene',
      img: './images/p43.png',
      price: 1655,
      old_price: 1800,
      painter: 'Pierre Bayet',
      desc: '- BEAGLE AU REPOS (2021)',
    },
  ]

  // const [menuItems, setMenuItems] = useState(items)
  // const [categories, setCategories] = useState([])

  return (
    <section>
      <div class='contactus'>
        {/* style='background-color: #0fbbad' */}
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-md-8 offset-md-2'>
              <div class='title'>
                <h2>Galeria noastră!</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Categories /> */}

      <Program lista={menu} />
    </section>
  )
}
export default Product
