import React from 'react'
import './ourservices.scss'
function OurServices() {
    let arr=[{
        id:1,
        img:"icon-anchor",
        title:"BRANDING",
        desc:'Learn why your brand is a valuable component when it comes to your marketing communication and why you dont want to be without one.'
    },
    {
        id:2,
        img:"icon-bike",
        title:"DESIGN",
        desc:'The strength of a design lies as much in the steps taken to create it as in the final result.'
    },
    {
        id:3,
        img:'icon-paperplane',
        title:"DEVELOPMENT",
        desc:"Development is a way to make people aware of the services and/or products you are offering."
    },
    {
        id:4,
        img:"icon-camera",
        title:"PHOTOGRAPHY",
        desc:"Photographs are the legacy you leave for generations to come."
    },
    {
        id:5,
        img:"icon-microphone-outline",
        title:"SUPPORT",
        desc:"A support network can include a variety of forms of interaction with a range of people who can support you in different ways."
    },
    {
        id:6,
        img:"icon-rocket",
        title:"MARKETING",
        desc:"Marketing is of vital importance to any business. It is the key process of researching, promoting and selling products or services to your target."
    },
    {
        id:7,
        img:"icon-shopping-cart",
        title:"ECOMMERCE",
        desc:"When customers are deciding on a purchase, they start by looking online."
    },
    {
        id:"8",
        img:"icon-flask",
        title:"CODING",
        desc:"We use the best coding practices"
    }

]
  return (
    <div className='bg-grey'>
    <section className='G-container container'>
        <div className='our-services'>
        <h2 className='services-h2'>Our Services</h2>
        <p className='services-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
       
        <div className='services-container'>
            {
             arr.map((item)=>{
                return <div key={item.id} className="servic">
                    <div className={item.img}></div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
              })
          }
          </div>
        
    </section>
    </div>
  )
}

export default OurServices