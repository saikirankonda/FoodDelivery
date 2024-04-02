import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import{Link} from"react-router-dom"
const Navbar =() => {
    const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo } alt='logo' className='logo' />
        <ul className="navabar-menu">
            <Link onCLinkck={() => setMenu("home")} className={menu === "home" ? "active" : ""} >Home</Link>
            <Link onCLinkck={() => setMenu("menu")}  className={menu === "menu" ? "active" : ""} >Menu</Link>
            <Link onCLinkck={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</Link>
            <Link onCLinkck={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</Link>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=" " />
            <div className="navar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar