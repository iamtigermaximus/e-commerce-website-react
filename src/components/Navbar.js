import React, { useState } from 'react'
import {
  FaBars,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaTimes,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #19181a;
  height: 8vh;
`

const LogoContainer = styled.div`
  display: flex;
  font-size: 20px;
  color: azure;
`

const Navbar = () => {
  const { totalItems } = useCart()
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavigationContainer>
      <div className='burger' onClick={categoryMenu}>
        {click ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={click ? 'category active' : 'category'}
        onClick={categoryMenu}
      >
        <li>
          <Link className='item-link' to='/men'>
            MEN
          </Link>
        </li>
        <li>
          <Link className='item-link' to='/women'>
            WOMEN
          </Link>
        </li>
        <li>
          <Link className='item-link' to='/jewelry'>
            JEWELRY
          </Link>
        </li>
        <li>
          <Link className='item-link' to='/electronics'>
            ELECTRONICS
          </Link>
        </li>
      </ul>
      <LogoContainer>
        <Link className='item-link' to='/'>
          <h3>
            <span className='logo-icon'>
              <FaStar />
            </span>
            SHOP
          </h3>
        </Link>
      </LogoContainer>
      <div className='search-bar'>
        <input
          className='form-control form-control-sm'
          type='text'
          placeholder='Search'
        />
      </div>
      <ul className='cart-container'>
        <li>
          <Link className='item-link' to='/user'>
            <FaUser />
          </Link>
        </li>
        <li>
          <Link className='item-link' to='/like'>
            <FaHeart />
          </Link>
        </li>
        <li>
          <Link className='item-link' to='/cart'>
            <FaShoppingCart />
            <span className='text-danger cart-icon-total position-absolute'>
              {totalItems}
            </span>
          </Link>
        </li>
      </ul>
    </NavigationContainer>
  )
}

export default Navbar
