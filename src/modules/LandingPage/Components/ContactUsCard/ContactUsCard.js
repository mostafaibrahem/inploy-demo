import React from 'react'
import freeContact from '../../../../resources/images/free-contact.png'
import CardItem from '../CardItem/CardItem'
import mostafa from '../../../../resources/images/mostafa.jpg'
import reactCover from '../../../../resources/images/react-cover.png'
import mackbook from '../../../../resources/images/mac-book.png'
import instgram from '../../../../resources/images/instgram.png'
import linkendin from '../../../../resources/images/linkendin.png'
import twitter from '../../../../resources/images/twitter.png'
import facebook from '../../../../resources/images/facebook.png' 
import behance from '../../../../resources/images/behance.png' 
import website from '../../../../resources/images/website.png' 
import vimeo from '../../../../resources/images/vimeo.png' 
import youtube from '../../../../resources/images/youtube.png' 

import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon'
export default function ContactUsCard() {
    const item = { id: 1, userName: 'Mostafa Ibrahim', proficient: 'FrontEnd Developer | UI Developer | Father', userImage: mostafa, coverImage: reactCover, userRate: 5 }
    const socialmediaArray = [
        { id: 1, img: website, alt: 'website' },
        { id: 2, img: facebook, alt: 'facebook' },
        { id: 3, img: twitter, alt: 'twitter' },
        { id: 4, img: instgram, alt: 'instgram' },
        { id: 5, img: linkendin, alt: 'linkendin' },
        { id: 6, img: behance, alt: 'behance' },
        { id: 7, img: youtube, alt: 'youtube' },
        { id: 8, img: vimeo, alt: 'vimeo' },
    ]
    return (
        <div className='contact-us-card'>
            <img className='macbook-img' src={mackbook} alt='mac book' />
            <div className='img-wrapper'>
                <img src={freeContact} alt='free contact' />
            </div>
            <div className='contacts-wrapper'>
                <div className='card-item-wrapper'>
                    <CardItem key={item.id} item={item} />

                </div>
                <div className='contact-user-details'>
                    <p className='phone-email'>0111-530-990-3 | mostafa.ibrahem@yahoo.com</p>
                    <div className='socialmedia-wrapper center'>
                        {socialmediaArray.map((item1) => (
                            <SocialMediaIcon key={item1.id} item={item1} small />

                        ))}
                    </div>
                </div>
            </div>



        </div>
    )
}