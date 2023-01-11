import React from 'react'
import '../Components/Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li>Recipes</li>
            <li>Articles</li>
            <li>Videos</li>
        </ul>
        <div className='logo'><img src={require('../Components/images/logo.webp')}/></div>
        <ul>
            <li>Shop</li>
            <li>About</li>
        </ul>
    </nav>
  )
}

export default Navbar