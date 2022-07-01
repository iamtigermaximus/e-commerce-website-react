import React from 'react'
import ElectronicsProductImage from '../images/electronics2.jpg'
import ProductCard from '../components/ProductCard'
//import axios from 'axios'
import data from '../data/db.json'

const Electronics = () => {
  return (
    <div className='electronics-page'>
      <div className='electronics-hero-container'>
        <div className='page-title'>
          <h1 className='text-light'>ELECTRONICS PRODUCTS</h1>
        </div>
      </div>
      <div className='electronics-products'>
        <div className='-products-container'>
          <div className='container'>
            <div className='row p-3'>
              {data.electronics.map((item, index) => (
                <div className='col-lg-3 col-md-3  col-6 mt-2' key={index}>
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    item={item}
                    image={ElectronicsProductImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Electronics
