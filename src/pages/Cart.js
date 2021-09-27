import React from 'react'
import {useCart} from 'react-use-cart'

const Cart = () => {
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

   
if (isEmpty)
return <div className="cart-page p-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="cart-message">
                            <div className="heading p-5">
                                <h3 className="text-center text-light">There are no products in your shopping cart.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-10 mx-auto">
                        <div className="cart-buttons">
                            <div className="cart-links">
                                <button className="btn btn-primary col-12 mx-auto fs-6 mb-2" type="submit">
                                    Login
                                </button>
                                <button className="btn btn-warning col-12 mx-auto fs-6 mb-2" type="submit">
                                    Continue shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    return (
        <div className="cart-page">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col py-5">
                            <h5 className="text-center text-light">Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                        </div>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                       {/* <td>
                                            <div className="cart-img-container">
                                                <img src={item.img} className="card-image"/>
                                            </div>
                                       </td>*/}
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button
                                            className="btn btn-info ms-2"
                                            onClick={()=>updateItemQuantity(item.id,item.quantity -1 )}
                                            > - </button>
                                            <button
                                            className="btn btn-info ms-2"
                                            onClick={()=>updateItemQuantity(item.id,item.quantity +1 )}
                                            > + </button>
                                            <button
                                                className="btn btn-danger ms-2"
                                                onClick={()=>removeItem(item.id)}
                                            >Remove Item</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                    <div className="col-auto ms-auto">
                        <h2>Total Price: {cartTotal}</h2>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-danger m-2" onClick={() => emptyCart()}>clear cart</button>
                        <button className="btn btn-primary m-2" onClick={()=>emptyCart()}>buy now</button>
                    </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Cart
