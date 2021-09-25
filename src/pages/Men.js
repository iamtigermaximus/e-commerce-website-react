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
        </div>
    )
}

export default Men
 