import React, { useState } from 'react'
import "./contactUs.scss"
function ContactUs() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    console.log(name);
    return (
        <section className="ContactUs G-container">


            <div className='form-part'>

                <h3>SEND A MESSAGE</h3>
                <div className='from-data'>
                    <div className='form-data-item'>
                        <label>Name:</label>
                        <input className='data-item-input' type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
                    </div>
                    <div className='form-data-item'>
                        <label>Email:</label>
                        <input type="email" className='data-item-input' onChange={(e) => { setEmail(e.target.value) }} value={email} />
                    </div>

                    <div className='form-data-item-m'>
                        <label>Subject::</label>
                        <label></label>
                        <input className='data-item-input-m' type="message" onChange={(e) => { setSubject(e.target.value) }} value={subject} />
                    </div>
                    <div className='form-data-item-m'>
                        <label>Message:</label>
                        <input className='data-item-input-mm' type="textarea" onChange={(e) => { setMessage(e.target.value) }} value={message} />
                    </div>
                </div>
                <div style={{width:100+"%",textAlign:"center"}}>
                    <button className='contact-btn'>ContactUs</button>
                </div>
            </div>

            <div className='contact-info'>
                <h3>CONTACT INFORMATION</h3>
                <ul className='list-ul'>
                    <li className='list-li'>Address</li>
                    <li className='list-li'>Sydney, Australia
                        <br/>
                    <span>100 Mainstreet Center</span></li>
                    <li className='list-li'>E-mail
                        <br/>
                        <span>pixelperfectmk@gmail.com</span>
                    </li>
                    <li className='list-li'>Phone
                        <br/>
                        <span>(208) 333 9296</span>
                    </li>
                    <li className='list-li'>Fax
                        <br/>
                        <span>(208) 333 9296</span>
                    </li>

                </ul>

            </div>
        </section>
    )
}

export default ContactUs