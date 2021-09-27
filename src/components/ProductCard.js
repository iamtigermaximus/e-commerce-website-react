import React from 'react'
import {useCart} from 'react-use-cart'

const ProductCard = (props) => {
    const { addItem } = useCart();
    return (
        <div className="card-container">
            <div className="card-image-container" key={props.id }>
                <img src={props.image} className="card-image" alt="..."/>
            </div>
            <div className="ps-3 card--body">
                <div className="card-name">{props.name}</div>
                <div className="card-item">{props.description}</div>
                <div className="card-item">Price:${props.price}</div>
            </div>
             <div className="text-center">
                <button className="btn btn-primary " onClick={()=>addItem(props.item)}><div className="card-item">add to cart</div></button>
            </div>
        </div>
    )
}

export default ProductCard
