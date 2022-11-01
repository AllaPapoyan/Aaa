import React from 'react'
import './info.scss'
import ipad from "../../../../src/assets/images/ipad-pro.png"
function Info() {
  return (
    <div className='info-container'>
       <div className='G-container information'>
                <div className='info-row'>
                    <div className='responsive-design'>
                       <h3>Responsive web design</h3>
                       <p>Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation. The practice consists of a mix of flexible grids and layouts, images and an intelligent use of CSS media queries</p>
                    </div>
                    <div className='img-ipad'><img src={ipad} alt="" /></div>
                </div>
       </div>
    </div>
  )
}

export default Info