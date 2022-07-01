import React from 'react'
import MenProductImage from '../images/men2.jpg'
import ProductCard from '../components/ProductCard'
import data from '../data/db.json'

const Men = () => {
  return (
    <div className='men-page'>
      <div className='men-hero-container'>
        <div className='page-title'>
          <h1 className='text-light'>MEN PRODUCTS</h1>
        </div>
      </div>
      <div className='men-products'>
        <div className='-products-container'>
          <div className='container'>
            <div className='row p-3'>
              {data.men.map((item, index) => (
                <div className='col-lg-3 col-md-3  col-6 mt-2' key={index}>
                  <ProductCard
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    item={item}
                    image={MenProductImage}
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

export default Men
