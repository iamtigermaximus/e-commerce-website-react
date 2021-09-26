import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from '../images/image-gallery-cone.jpg'
import Image2 from '../images/image-gallery-orange.jpg'
import Image3 from '../images/image-gallery-milkbottles.jpg'
import Image4 from '../images/image-gallery-sugarcubes.jpg'


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
                            <div className="row p-3">
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
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
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image2} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image2} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image2} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image2} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
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
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image3} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image3} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image3} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image3} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
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
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image4} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image4} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image4} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="card">
                                        <img src={Image4} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    </div>
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
