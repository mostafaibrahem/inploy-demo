import React from 'react'
import inployLogo from '../../../../resources/images/inploy-logo.png'
import facebook from '../../../../resources/images/facebook.png'
import instgram from '../../../../resources/images/instgram.png'
import linkendin from '../../../../resources/images/linkendin.png'
import twitter from '../../../../resources/images/twitter.png'
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon'

export default function AppFooter() {
    const socialmediaArray = [
        { id: 1, img: facebook, alt: 'facebook' },
        { id: 2, img: instgram, alt: 'instgram' },
        { id: 3, img: linkendin, alt: 'linkendin' },
        { id: 4, img: twitter, alt: 'twitter' },
    ]
    return (
        <footer>
            <div className='first-line'>
                <img src={inployLogo} alt='inploy Logo' className='logo' />
                <div className='socialmedia-wrapper'>
                    {socialmediaArray.map((item) => (
                        <SocialMediaIcon key={item.id} item={item} />

                    ))}
                </div>

            </div>
            <div className='second-line'>
                <ul>
                    <li>SUPPORT</li>
                    <li>UNDERSTAND</li>
                    <li>TERMS & REGULATIONS</li>
                </ul>
                <p>Inploy 2021. All rights reserved by Mostafa Ibrahim</p>

            </div>
        </footer>
    )
}