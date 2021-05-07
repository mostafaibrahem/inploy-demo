import React from 'react'
//import mostafa from '../../../../resources/images/mostafa.jpg'
//import reactCover from '../../../../resources/images/react-cover.png'
import photographerImg from '../../../../resources/images/photographer-img.jpg'
import PhotographerCover from '../../../../resources/images/Photographer-cover.jpeg'
import muralistImg from '../../../../resources/images/muralist-img.jpg'
import muralistCover from '../../../../resources/images/muralist-cover.jpg'
import businessWoman from '../../../../resources/images/bussniess-woman.png'
import businessWomanCover from '../../../../resources/images/bussniess-woman-cover.jpg'
import CardItem from '../CardItem/CardItem'

export default function CardsSlider() {
    const users = [
        // { id: 1, userName: 'Mostafa Ibrahim', proficient: 'FrontEnd Developer | UI Developer | Father', userImage: mostafa, coverImage: reactCover, userRate: 5 },
        { id: 2, userName: 'Mohamed Sayed', proficient: 'Photographer | Videographer |Graphic Designer', userImage: photographerImg, coverImage: PhotographerCover, userRate: 5 },
        { id: 1, userName: 'Heba ElSayed', proficient: 'Digital Marketing | Business Woman', userImage: businessWoman, coverImage: businessWomanCover, userRate: 5 },
        { id: 3, userName: 'Adel Amin', proficient: 'Architect | Muralist', userImage: muralistImg, coverImage: muralistCover, userRate: 5 },
    ]
    return (
        <div className='cards-slider'>
            <div>
                <h5>2000+ Service Providers on board</h5>
            </div>
            <div className='cards-slider-wrapper'>
                {users.map((item) => (
                    <CardItem key={item.id} item={item} />
                ))}
            </div>

        </div>
    )
}