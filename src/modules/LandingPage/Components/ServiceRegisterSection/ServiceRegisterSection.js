import React from 'react'
import CardsSlider from '../CardsSlider/CardsSlider'
import RegisterForm from '../RegisterForm/RegisterForm'

export default function ServiceRegisterSection() {
    return (
        <section className='service-register-section'>
            <CardsSlider />
            <RegisterForm />
        </section>
    )
}