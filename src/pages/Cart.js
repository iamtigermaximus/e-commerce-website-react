import React from 'react'

const Cart = () => {
    return (
        <div className="cart-page">
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <div className="cart-message">
                            <div className="heading p-5">
                                <h3 className="text-center text-light">There are no products in your shopping cart.</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-10 mx-auto">
                            <div className="cart-buttons">
                                <div className="cart-links">
                                <button className="btn btn-primary col-12 mx-auto fs-6 mb-2" type="submit">Login</button>
                                <button className="btn btn-warning col-12 mx-auto fs-6" type="submit">Continue shopping</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
