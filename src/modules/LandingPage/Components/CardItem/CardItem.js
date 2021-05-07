import React from 'react'

export default function CardItem(props) {
    const { item } = props
    return (
        <div className='card-item' key={item.id}>
            <div className='cover-image'>
                <img src={item.coverImage} alt={item.userName} />
                <i className="arrow left white position-left"></i>
                <i className="arrow right white position-right"></i>
            </div>
            <div className='user-image-wrapper'>
                <span className='true-sign'>✓</span>
                <img src={item.userImage} alt={item.userName} />
                <span className='rating'>{item.userRate}</span>
            </div>
            <div className='user-details'>
                <h6>{item.userName}</h6>
                <p>{item.proficient}</p>
                <span>Quick View <i className="arrow down"></i></span>
            </div>

        </div>
    )
}