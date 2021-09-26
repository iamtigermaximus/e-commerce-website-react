import React, {useState, useEffect} from 'react'
import ElectronicsProductImage from '../images/electronics2.jpg'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Electronics = () => {
    const [electronics, setElectronics] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/electronics")
            .then(response => {
            setElectronics(response.data)
        })
    }, []);
    return (
        <div className="electronics-page">
            <div className="electronics-hero-container">
                <div className="page-title">
                    <h1 className="text-light">ELECTRONICS PRODUCTS</h1>
                </div>
            </div>
            <div className="electronics-products">
                    <div className="-products-container">
                        <div className="container">
                            <div className="row p-3">
                                {electronics.map(item => (
                                <div className="col-lg-3 col-md-3  col-6 mt-2">
                                    <ProductCard
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
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
