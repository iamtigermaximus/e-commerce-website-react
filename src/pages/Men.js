import React, {useState, useEffect} from 'react'
import Image1 from '../images/image-gallery-cone.jpg'
import ProductCard from '../components/ProductCard'
import axios from 'axios'


const Men = () => {
    const [men, setMen] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/men")
            .then(response => {
            setMen(response.data)
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
                                
                                {/*<div className="card">
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
    </div>*/}
                            {men.map(item => (
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        image={Image1}
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
 