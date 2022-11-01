import React, { useState } from 'react'
import './Subscribe.scss'

function Subscribe() {

    const [submit, useSubmit] = useState("")
    const [err, setErr] = useState("")

    function isSubERR(val) {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(val)) {
            return setErr("Invalid Email!!")
        } else { setErr("-----") }

    }

  return (
    <section className='newsletter-section'>
    <h2>Subscribe our newsletters</h2>
    <div className='newLettwer-block G-container'>

        <div className='questions'>
            <input type="email"
                placeholder='Your e-mail'
                className='question'
                onChange={(e)=>useSubmit(e.target.value)}
            />
            <button className='BtnSubmit' onClick={() => {
                isSubERR(submit)
            }}>Submit</button>
            
        </div>
        <span className='error'>{err}</span>
    </div>

</section>
  )
}

export default Subscribe