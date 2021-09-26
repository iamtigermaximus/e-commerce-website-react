import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={props.image} className="card-image" alt="..."/>
            </div>
            <div className="ps-3 card--body">
                <div className="card-name">{props.name}</div>
                <div className="card-item">{props.description}</div>
                <div className="card-item">Price:{props.price}</div>
            </div>
             <div className="text-center">
                <button className="btn btn-primary"><div className="card-item">add to cart</div></button>
            </div>
        </div>
    )
}

export default ProductCard
