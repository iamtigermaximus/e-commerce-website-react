import React from 'react'
import WomenProductImage from '../images/women2.jpg'
import ProductCard from '../components/ProductCard'
import data from '../data/db.json'

const Women = () => {
  return (
    <div className='women-page'>
      <div className='women-hero-container'>
        <div className='page-title'>
          <h1 className='text-light'>WOMEN PRODUCTS</h1>
        </div>
      </div>
      <div className='women-products'>
        <div className='-products-container'>
          <div className='container'>
            <div className='row p-3'>
              {data.women.map((item, index) => (
                <div className='col-lg-3 col-md-3  col-6 mt-2' key={index}>
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    item={item}
                    image={WomenProductImage}
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

export default Women
