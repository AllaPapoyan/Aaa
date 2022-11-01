import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
function Header() {

    const [click, setClick] = useState(false)


    let isClick = () => {
        setClick(!click)
    }

    return (
        <header className={!click ?'header':"header0 header"} >
            <nav className='navbar G-container' >
                <a className='navbar-brand'>
                    <span>Agency</span>Perfect
                </a>
                <ul className={!click ? "menu-items-open" : "menu-items-close aa"}>
                    <li className='menu-item'><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></li>
                    <li className='menu-item'>Pages</li>
                    <li className='menu-item'><Link to="/portfolio" style={{textDecoration:"none",color:"black"}}>Portfolio</Link></li>
                    <li className='menu-item'><Link to="/blog" style={{textDecoration:"none",color:"black"}}>Blog</Link></li>
                    <li className='menu-item'><Link to="/contact" style={{textDecoration:"none",color:"black"}}>Contact</Link></li>
                    <li className='menu-item'><Link to="/ul" style={{textDecoration:"none",color:"black"}}>UI Elements</Link></li>
                </ul>

                <div class="burger-icon"  onClick={isClick}>
                    <div className={!click?'icon-1':"close-1"} ></div>
                    <div className={!click?'icon-2':"close-2"}></div>
                    <div className={!click?'icon-3':"close-3"}></div>
                    
                </div>
             
            </nav>
        </header>
    )
}

export default Header