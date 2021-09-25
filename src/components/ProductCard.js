import React from 'react'

const ProductCard = () => {
    return (
        <div className="card">
            <img src={Image3} className="card-img" alt="..."/>
            <div className="ps-3">
                <div className="fw-bold fs-6">Product Name</div>
                <div>Lorem ipsum lorem</div>
                <div>Price:20</div>
            </div>
        </div>
    )
}

export default ProductCard
