import React from 'react'
import HomeBg from '../components/home/home-Bg/HomeBg'
import Info from '../components/home/Information/Info'
import Map from '../components/home/Map/Map'
import OurServices from '../components/home/ourServices/OurServices'
import PhotoList from '../components/home/photoList/PhotoList'
import Subscribe from '../components/home/subscribe/Subscribe'

function Homepage() {
  return (
    < >
      <HomeBg />
      <Info />
      <OurServices />
      <Map />
      <PhotoList />
      <Subscribe />
    </>
  )
}

export default Homepage