import React from 'react'
import welomeImage from '../../../../resources/images/welcome.png'

export default function WelcomeSection() {
    return (
        <section className='welcome-section'>
            <img src={welomeImage} alt='Welcome To Inpoly'/>
            <p>Register now and secure your spot on top of your category</p>
            <div className='buttons-wrabber'>
                <button className='btn btn-fill-prrimary'>Service Provider</button>
                <button className='btn'>Client</button>
            </div>
        </section>
    )
}