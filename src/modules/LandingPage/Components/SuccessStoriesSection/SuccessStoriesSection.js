import React from 'react'
import aucImage from '../../../../resources/images/auc.png'
import tradelineImage from '../../../../resources/images/tradeline.png'
import judeImage from '../../../../resources/images/jude.png'
import sclubImage from '../../../../resources/images/sclub.png'
import trellaImage from '../../../../resources/images/trella.png'
import ixinaImage from '../../../../resources/images/ixina.png'
import seacodeImage from '../../../../resources/images/seacode.png'
import makwaImage from '../../../../resources/images/makwa.png'
import imageimage from '../../../../resources/images/imageimage.png'
import quwaImage from '../../../../resources/images/quwa.png'

export default function SuccessStoriesSection() {
    const pictures = [
        { id: 1, alt: 'AUC', image: aucImage },
        { id: 2, alt: 'tradeline', image: tradelineImage },
        { id: 3, alt: 'jude', image: judeImage },
        { id: 4, alt: 'sclub', image: sclubImage },
        { id: 5, alt: 'trella', image: trellaImage },
        { id: 6, alt: 'ixina', image: ixinaImage },
        { id: 7, alt: 'seacode', image: seacodeImage },
        { id: 8, alt: 'makwa', image: makwaImage },
        { id: 9, alt: 'image', image: imageimage },
        { id: 10, alt: 'quwa', image: quwaImage },
    ]
    return (
        <section className='success-stories-section'>
            <h3>Success stories with 400+ Clients</h3>
            <div className='images-wrapper'>
                {pictures.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={item.alt} />
                ))}
            </div>
        </section>
    )
}