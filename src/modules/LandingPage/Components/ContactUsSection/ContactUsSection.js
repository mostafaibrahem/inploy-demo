import React from 'react'
import ContactUsCard from '../ContactUsCard/ContactUsCard'
import ContactUsForm from '../ContactUsForm/ContactUsForm'

export default function ContactUsSection() {
    return (
        <section className='contact-us-section'>
            <ContactUsForm/>
            <ContactUsCard/>
        </section>
    )
}