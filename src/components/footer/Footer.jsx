import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
function Footer() {
    return (
        <footer className='footer'>
            <div className='endContainer G-container'>
                <div className='left-part'>
                <a className='footer-title'>
                <span>Agency</span>Perfect
                </a>
                <p className='footer-p'>We're a digital agency focused on creative 
                    and results-driven solutions.</p>
                    <p className='footer-p'>We measure our success by 
                    the results we drive for our clients</p>
                </div>

                <div className='center-right'>
                        <a>KEEP IN TOUCH</a>
                        <p className='itemCenter'>info@domain.com</p>
                        <p className='itemCenter'>+374 (00) 80 00 00</p>
                        <p>+374 (00) 90 00 00</p>
                        <p>20 Leo, Armenia</p>
                </div>
                <div className='center-right'>
                        <a>FEATURED LINKS</a>
                        <p className='itemCenter'><Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link></p>
                        <p className='itemCenter'><Link to="/blog" style={{textDecoration:"none",color:"black"}}>Blog</Link></p>
                        <p className='itemCenter'> <Link to="/portfolio" style={{textDecoration:"none",color:"black"}} >Portfolio</Link></p>
                        <p className='itemCenter'> <Link to="/contact" style={{textDecoration:"none",color:"black"}}>Contact</Link></p>
                        
                </div>



                

            </div>

            <div className='G-container'>
            <div className='links'>
            <p className='icon-facebook'></p>
            <p className='icon-pinterest'></p>
            <p className='icon-linkedin'></p>
            <p className='icon-twitter'></p>
        </div>
            </div>
        </footer>
    )
}

export default Footer