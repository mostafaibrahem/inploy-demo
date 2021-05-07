import React, { useState } from 'react'

export default function ContactUsForm() {
    const [contactusValue, setContactusValue] = useState('Email')
    return (
        <div className='contact-us-form'>
            <h3>Contact</h3>
            <h3>info@inploy.me</h3>
            <div className='rectangle-shape' />
            <p>For further assistance with projects or pre registration </p>
            <h4>How would like us to contact you?</h4>
            <form>
                <label htmlFor="Call">
                    <input
                        type="radio"
                        id="Call"
                        name="contactus"
                        value="Call"
                        onChange={(e) => { setContactusValue(e.target.value) }} />
                    <span></span>
                Call</label><br />
                <label htmlFor="Email">
                    <input
                        type="radio"
                        id="Email"
                        name="contactus"
                        defaultChecked
                        value="Email"
                        onChange={(e) => { setContactusValue(e.target.value) }} />
                    <span></span>
                Email</label><br />
                <input className='custom-input' type='text' placeholder={contactusValue} /><br />
                <button className='btn small-btn btn-fill-prrimary'>Send</button>
            </form>
        </div>
    )
}