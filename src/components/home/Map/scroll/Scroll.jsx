import React from 'react'
import { useEffect } from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'

function Scroll() {
   const [change,setChange]=useState(0)


   useEffect(()=>{

    setChange(change+1)
   
   },[])
   


   
  return (
    <div>
        <h1>{change}</h1>
      
  </div>
  )
}

export default Scroll