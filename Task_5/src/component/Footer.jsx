import React from 'react'
import { NavLink } from 'react-router-dom'

const footer = () => {
  return (
    <>
    <footer>
    <div className="footer-container" id='contact'>
        <div className="footer-about">
          <h2>Fashion Corner</h2>
          <p>Your go-to place for the latest fashion trends and timeless classics. Shop with us and elevate your style game.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to='/Cart'>Cart</NavLink></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i className='bx bxl-facebook'></i>
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-twitter'></i>
            <i className='bx bxl-pinterest'></i>
          </div>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fashion Corner. All rights reserved.</p>
      </div>
      </footer>
    </>
  )
}

export default footer