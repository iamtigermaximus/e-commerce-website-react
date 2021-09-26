import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Image1 from '../images/image-gallery-cone.jpg'

const Men = () => {
    const [menItems, setMenItems] = useState([])
    
   useEffect(() => {
       axios.get('https://fakestoreapi.com/products')
           .then(response => {
               setMenItems(response.data)
               console.log(response.data)
       })
   }, []);

    return (
        <div className="men-page">
            <div className="men-hero-container">
                <div className="page-title">
                    <h1 className="text-light">MEN PRODUCTS</h1>
                </div>
            </div>
             <div className="men-products">
                    <div className="-products-container">
                        <div className="container">
                            <div className="row p-3">
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                    <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6 mt-2">
                                    <div className="card">
                                        <img src={Image1} className="card-img" alt="..."/>
                                    <div className="ps-3">
                                        <div className="fw-bold fs-6">Product Name</div>
                                        <div className="card-item">Lorem ipsum lorem</div>
                                        <div className="card-item">Price:20</div>
                                    </div>
                                        <div className="text-center">
                                            <button className="btn btn-primary btn-sm">add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Men
 