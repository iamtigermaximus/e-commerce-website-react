import React from 'react'

const ProductCard = (props) => {
    return (
        <div className="card">
            <img src={props.image} className="card-img" alt="..."/>
            <div className="ps-3">
                <div className="fw-bold fs-6">{props.name}</div>
                <div className="card-item">{props.description}</div>
                <div className="card-item">Price:{props.price}</div>
            </div>
             <div className="text-center">
                <button className="btn btn-primary btn-sm">add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard