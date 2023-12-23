import React from 'react'
import './Navbar.css'
//Add your logo
//Import icon

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
          <h1>LOOP</h1>
        </div>
        <ul className="menu">
          <li>About</li>
          <li>Product</li>
          <li>Trending</li>
        </ul>
        <div className='login-cart'>
          <button>Login</button>
          {/**Cart Icon here */}
        </div>
    </div>
  )
}

export default Navbar
