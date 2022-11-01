import React from 'react'
import "./map.scss"
function Map() {
  return (
    <div>
        <div className='map'>
       <div className='map-tex'> 
            <iframe width="100%" height="781" id="gmap_canvas" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=UnivSydney, Australia 100 Mainstreet Centerersity of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </div>
    </div>
  )
}

export default Map