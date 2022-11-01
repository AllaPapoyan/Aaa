import React from 'react'
import "./photolist.scss"
import img1 from "../../../assets/images/portfolio-1.jpg"
import img2 from "../../../assets/images/portfolio-2.jpg"
import img3 from "../../../assets/images/portfolio-3.jpg"
import img4 from "../../../assets/images/portfolio-4.jpg"
import img5 from "../../../assets/images/portfolio-5.jpg"
import img6 from "../../../assets/images/portfolio-6.jpg"
import img7 from "../../../assets/images/portfolio-7.jpg"
import img8 from "../../../assets/images/portfolio-8.jpg"
function PhotoList() {

    const list=[{
        id: Date.now(),
        img: img1,
        name:1.1
    },
    {
        id: Date.now(),
        img: img2,
        name:1.2,
    },
    {
        id: Date.now(),
        img: img3,
        name:1.3,
    },
    {
        id: Date.now(),
        img: img4,
        name:1.4,
    },
    {
        id: Date.now(),
        img: img5,
        name:1.5
    },
    {
        id: Date.now(),
        img: img6,
        name:1.6,
    },
    {
        id: Date.now(),
        img: img7,
        name:1.7,
    },
    {
        id: Date.now(),
        img: img8,
        name:1.8,
    },
    ]
  return (
    <section className='photolist'>
        <h2 className='title'>Latest Work</h2>
        <p className='desc'>This is some of our best work</p>
        <div className='G-container photos-container'>
{
        list.map((item)=>{
                return <div key={item.name} className ="photo-container">
                    <div className='photo'><img src={item.img}/></div>
                    <div className='hover-photo'>
                        <h6  className='hh6'></h6>
                        </div>
                </div>
            })
        }
        </div>
    </section>
  )
}

export default PhotoList