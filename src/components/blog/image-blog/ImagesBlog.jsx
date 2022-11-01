import React from 'react'
import './imgBlog.scss'



function ImagesBlog(props) {
  return (
    <div className='blog-images-container'>
        <img src={props.img_s}></img>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
             <button className='blog-btn'> Read More<div className='line'></div></button>
        <div className='icons-img'>
            <div className='name'>
                <div className='calendarfolder' ><p>John Smith</p></div>
            </div>
            <div className='calendarfolder'> <div className='icon-calendar calendarfolder-icon'></div><p>September 21, 2045</p></div>
            <div className='calendarfolder'><div className='icon-folder-open calendarfolder-icon'></div><p>PSD Template</p></div>
        </div>
    </div>
  )
}

export default ImagesBlog