import React from 'react'
import { Link } from 'react-router-dom'
import MenProductImage from '../images/men2.jpg'
import WomenProductImage from '../images/women2.jpg'
import JewelryProductImage from '../images/jewelry2.jpg'
import ElectronicsProductImage from '../images/electronics2.jpg'
import ProductCard from '../components/ProductCard'




const Home = () => {
    return (
        <div className="home-container">
            <section className="men-section">
                <div className="section-top  align-items-center">
                    <div className="section-top-heading">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-sm column1 order-lg-2 ">
                            </div>
                            <div className="col-lg-5 col-sm column2 order-lg-1">
                                <div className="column2-content">
                                    <h2 className="display-4 fw-bolder text-light column2-title">Men Products</h2>
                                    <p className="text-light pt-3 column2-item">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año .</p>
                                    <Link className="text-decoration-none" to="/men">Shop now -></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section-bottom">
                    <div className="-products-container">
                        <div className="container">
                            <div className="row p-5">
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='1'
                                        name="Men Item"
                                        description='Lorem ipsum lorem'
                                        price='10'
                                        image={MenProductImage}
                                    />
                                </div>
                                 <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='2'
                                        name="Men Item"
                                        description='Lorem ipsum lorem'
                                        price='20'
                                        image={MenProductImage}
                                    />
                                </div>
                                 <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='3'
                                        name="Men Item"
                                        description='Lorem ipsum lorem'
                                        price='30'
                                        image={MenProductImage}
                                    />
                                </div>
                                 <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='4'
                                        name="Men Item"
                                        description='Lorem ipsum lorem'
                                        price='40'
                                        image={MenProductImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="women-section">
                <div className="section-top  align-items-center">
                    <div className="section-top-heading">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-sm column1 order-lg-2 ">
                            </div>
                            <div className="col-lg-5 col-sm column2 order-lg-1">
                                <div className="column2-content">
                                    <h2 className="display-4 fw-bolder text-light column2-title">Women Products</h2>
                                    <p className="text-light pt-3 column2-item">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año .</p>
                                    <Link className="text-decoration-none" to="/women">Shop now -></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section-bottom">
                    <div className="-products-container">
                        <div className="container">
                            <div className="row p-3">
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='1'
                                        name=' Women Item'
                                        description='Lorem ipsum lorem'
                                        price='10'
                                        image={WomenProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='2'
                                        name=' Women Item'
                                        description='Lorem ipsum lorem'
                                        price='20'
                                        image={WomenProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='3'
                                        name=' Women Item'
                                        description='Lorem ipsum lorem'
                                        price='30'
                                        image={WomenProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='4'
                                        name=' Women Item'
                                        description='Lorem ipsum lorem'
                                        price='40'
                                        image={WomenProductImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="jewelry-section">
                <div className="section-top  align-items-center">
                    <div className="section-top-heading">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-sm column1 order-lg-2 ">
                            </div>
                            <div className="col-lg-5 col-sm column2 order-lg-1">
                                <div className="column2-content">
                                    <h2 className="display-4 fw-bolder text-light column2-title">Jewelry Products</h2>
                                    <p className="text-light pt-3 column2-item">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año .</p>
                                    <Link className="text-decoration-none" to="/jewelry">Shop now -></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section-bottom">
                    <div className="-products-container">
                        <div className="container">
                            <div className="row p-3">
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='1'
                                        name='Jewelry Item'
                                        description='Lorem ipsum lorem'
                                        price='10'
                                        image={JewelryProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='2'
                                        name='Jewelry Item'
                                        description='Lorem ipsum lorem'
                                        price='20'
                                        image={JewelryProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='3'
                                        name='Jewelry Item'
                                        description='Lorem ipsum lorem'
                                        price='30'
                                        image={JewelryProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='4'
                                        name='Jewelry Item'
                                        description='Lorem ipsum lorem'
                                        price='40'
                                        image={JewelryProductImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="electronics-section">
                <div className="section-top  align-items-center">
                    <div className="section-top-heading">
                        <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-sm column1 order-lg-2 ">
                            </div>
                            <div className="col-lg-5 col-sm column2 order-lg-1">
                                <div className="column2-content">
                                    <h2 className="display-4 fw-bolder text-light column2-title">Electronic Products</h2>
                                    <p className="text-light pt-3 column2-item">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año .</p>
                                    <Link className="text-decoration-none" to="/electronics">Shop now -></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="section-bottom">
                    <div className="-products-container">
                        <div className="container">
                            <div className="row p-3">
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='1'
                                        name='Electronics Item'
                                        description='Lorem ipsum lorem'
                                        price='10'
                                        image={ElectronicsProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='2'
                                        name='Electronics Item'
                                        description='Lorem ipsum lorem'
                                        price='20'
                                        image={ElectronicsProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='3'
                                        name='Electronics Item'
                                        description='Lorem ipsum lorem'
                                        price='30'
                                        image={ElectronicsProductImage}
                                    />
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id='4'
                                        name='Electronics Item'
                                        description='Lorem ipsum lorem'
                                        price='40'
                                        image={ElectronicsProductImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
