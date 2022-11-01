import React from 'react'
import "./map.scss"
// import Scroll from './scroll/Scroll'
function Map() {
  return (
  <section className='map-blue'>
   <div className='G-container  map-container'>
        
          <h2 className='map-title'>
          Responsive Web Design
          </h2>
          <p className='map-decs'>Web design is responsive design. Responsive web design is web design, done right.</p>

<button className='map-btn'>Learn more</button>
<div className='data-part'>
<p className='data-info'>377
  <br />
  <span>Cofee Cups</span>
</p>
<p className='data-info'>1204
  <br />
  <span>Projects completed</span>
</p>
<p className='data-info'>475
  <br />
  <span>Happy Clients</span>
</p>
<p className='data-info'>675
  <br />
  <span>Average Deal

  </span>
</p>
</div>

   </div>
  </section>
  )
}

export default Map