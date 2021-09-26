import React from 'react'

const ProductCard = () => {
    return (
        <div className="card">
            <img src={Image3} className="card-img" alt="..."/>
            <div className="ps-3">
                <div className="fw-bold fs-6">Product Name</div>
                <div className="card-item">Lorem ipsum lorem</div>
                <div className="card-item">Price:20</div>
            </div>
             <div className="text-center">
                <button className="btn btn-primary btn-sm">add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard
