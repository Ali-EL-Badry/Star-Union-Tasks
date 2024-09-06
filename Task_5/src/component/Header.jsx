import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
      <div className="Company">Fashion Corner</div>
      <ul className='navbar'>
        <li className='nav_btn'>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
        </li>
        <li className='nav_btn'>
          <NavLink to="/products" activeClassName="active">Products</NavLink>
        </li>
        <li className='nav_btn'>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className='cart-place'>
        <i className='bx bx-search search-icon'></i>
        <NavLink to='/Cart' activeClassName="active">
          <i className='bx bxs-shopping-bag-alt'></i>
        </NavLink>
        <i className='bx bxs-heart'></i>
      </div>
    </nav>

    </>
    )
}

export default Header