import React from 'react'
import { Link } from 'react-router-dom'
import MenProductImage from '../images/men2.jpg'
import WomenProductImage from '../images/women2.jpg'
import JewelryProductImage from '../images/jewelry2.jpg'
import ElectronicsProductImage from '../images/electronics2.jpg'
import ProductCard from '../components/ProductCard'
import data from '../data/db.json'

const Home = () => {
  return (
    <div className='home-container'>
      <section className='men-section'>
        <div className='section-top  align-items-center'>
          <div className='section-top-heading'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-7 col-sm column1 order-lg-2 '></div>
                <div className='col-lg-5 col-sm column2 order-lg-1'>
                  <div className='column2-content'>
                    <h2 className='display-4 fw-bolder text-light column2-title'>
                      Men Products
                    </h2>
                    <p className='text-light pt-3 column2-item'>
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas y archivos de texto. Lorem Ipsum ha sido el
                      texto de relleno estándar de las industrias desde el año .
                    </p>
                    <Link className='text-decoration-none' to='/men'>
                      Shop now ->
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-bottom'>
          <div className='-products-container'>
            <div className='container'>
              <div className='row p-3'>
                {data.men.slice(0, 4).map((item, index) => (
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
      </section>
      <section className='women-section'>
        <div className='section-top  align-items-center'>
          <div className='section-top-heading'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-7 col-sm column1 order-lg-2 '></div>
                <div className='col-lg-5 col-sm column2 order-lg-1'>
                  <div className='column2-content'>
                    <h2 className='display-4 fw-bolder text-light column2-title'>
                      Women Products
                    </h2>
                    <p className='text-light pt-3 column2-item'>
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas y archivos de texto. Lorem Ipsum ha sido el
                      texto de relleno estándar de las industrias desde el año .
                    </p>
                    <Link className='text-decoration-none' to='/women'>
                      Shop now ->
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-bottom'>
          <div className='-products-container'>
            <div className='container'>
              <div className='row p-3'>
                {data.women.slice(0, 4).map((item, index) => (
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
      </section>
      <section className='jewelry-section'>
        <div className='section-top  align-items-center'>
          <div className='section-top-heading'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-7 col-sm column1 order-lg-2 '></div>
                <div className='col-lg-5 col-sm column2 order-lg-1'>
                  <div className='column2-content'>
                    <h2 className='display-4 fw-bolder text-light column2-title'>
                      Jewelry Products
                    </h2>
                    <p className='text-light pt-3 column2-item'>
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas y archivos de texto. Lorem Ipsum ha sido el
                      texto de relleno estándar de las industrias desde el año .
                    </p>
                    <Link className='text-decoration-none' to='/jewelry'>
                      Shop now ->
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-bottom'>
          <div className='-products-container'>
            <div className='container'>
              <div className='row p-3'>
                {data.jewelry.slice(0, 4).map((item, index) => (
                  <div className='col-lg-3 col-md-3  col-6 mt-2' key={index}>
                    <ProductCard
                      id={item.id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      item={item}
                      image={JewelryProductImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='electronics-section'>
        <div className='section-top  align-items-center'>
          <div className='section-top-heading'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-7 col-sm column1 order-lg-2 '></div>
                <div className='col-lg-5 col-sm column2 order-lg-1'>
                  <div className='column2-content'>
                    <h2 className='display-4 fw-bolder text-light column2-title'>
                      Electronic Products
                    </h2>
                    <p className='text-light pt-3 column2-item'>
                      Lorem Ipsum es simplemente el texto de relleno de las
                      imprentas y archivos de texto. Lorem Ipsum ha sido el
                      texto de relleno estándar de las industrias desde el año .
                    </p>
                    <Link className='text-decoration-none' to='/electronics'>
                      Shop now ->
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-bottom'>
          <div className='-products-container'>
            <div className='container'>
              <div className='row p-3'>
                {data.electronics.slice(0, 4).map((item, index) => (
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
      </section>
    </div>
  )
}

export default Home
