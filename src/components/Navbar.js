import React, {useState} from 'react'
import {FaBars, FaUser, FaHeart,FaShoppingCart, FaStar, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);
  
    
    const categoryMenu= () => setClick(!click)

    return (
        <nav>
            <div className="burger" onClick={categoryMenu}>
                {click ? <FaTimes/> : <FaBars/>} 
            </div>
            <ul className={click ?"category": "category active"} onClick={categoryMenu}>
                <li><Link className="item-link" to="/men">MEN</Link></li>
                <li><Link className="item-link" to="/women">WOMEN</Link></li>
                <li><Link className="item-link" to="/jewelry">JEWELRY</Link></li>
                <li><Link className="item-link" to="/electronics">ELECTRONICS</Link></li>
            </ul>
            <div className="logo">
                <Link className="item-link" to="/"><h3 ><span className="logo-icon"><FaStar/></span>SHOP</h3></Link>
            </div>
            <div className="search-bar">
                <input className="form-control form-control-sm" type="text" placeholder="Search"/>
            </div>
            <ul className="cart-container">
                <li><Link className="item-link" to="/user"><FaUser/></Link></li>
                <li><Link className="item-link" to="/like"><FaHeart/></Link></li>
                <li><Link className="item-link" to="/cart"><FaShoppingCart/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
