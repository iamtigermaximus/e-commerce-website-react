import React, {useState, useEffect} from 'react'
import JewelryProductImage from '../images/jewelry2.jpg'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Jewelry = () => {
    const [jewelry, setJewelry] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/jewelry")
            .then(response => {
            setJewelry(response.data)
        })
    }, []);
    return (
        <div className="jewelry-page">
            <div className="jewelry-hero-container">
                <div className="page-title">
                    <h1 className="text-light">JEWELRY</h1>
                </div>
            </div>
            <div className="jewelry-products">
                    <div className="-products-container">
                        <div className="container">
                            <div className="row p-3">
                                {jewelry.map(item => (
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        image={JewelryProductImage}
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

export default Jewelry
