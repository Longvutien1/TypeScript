import React from 'react'
import { NavLink } from 'react-router-dom';

type Props = {}

const Header = (props: Props) => {
  return (
    
        <div>
          <div className="header" id="header">
            <div className="header-1">
              <NavLink className="logo" to="/"><i className="fas fa-book"/> myBook </NavLink>
              <form  className="search-form">
                <input type="search" placeholder="Search here..." id="search-box" />
                <label htmlFor="search-box" className="fas fa-search"/>
              </form>
              <div className="icons">
                <div id="search-btn" className="fas fa-search" />
                <NavLink to="/#/cart" className="fas fa-shopping-cart"> </NavLink>
                <NavLink to="/#/sign_in" className="fas fa-user" > </NavLink>  
                <NavLink to="" id="logout" className="text-xl"><i className="bx bx-log-out-circle bx-rotate-180" /></NavLink>
              </div>
            </div>
            <div className="header-2">
              <nav className="navbar2">
                <NavLink className="navLink" to="/#/">Home page</NavLink>
                <NavLink className="navLink" to="/#/shop">Shop</NavLink>
                <NavLink className="navLink" to="/#/">featured</NavLink>
                <NavLink className="navLink" to="/#/">arrivals</NavLink>
                <NavLink className="navLink" to="/#/">reviews</NavLink>
                <NavLink className="navLink" to="/#/">blogs</NavLink>
          
              </nav>
            </div>
          </div>
          {/* header section ends */}
        
      </div>

  

  )
}

export default Header;