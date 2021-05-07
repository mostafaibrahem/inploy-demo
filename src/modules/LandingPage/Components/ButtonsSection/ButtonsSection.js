import React from 'react'
import starImage from '../../../../resources/images/star.png'
import sencImage from '../../../../resources/images/senc.png'
import layersImage from '../../../../resources/images/layers.png'

export default function ButtonsSection() {
    const buttons = [
        { id: 1, text: 'Free Commission', image: starImage },
        { id: 2, text: 'Free Contact Exchange', image: sencImage },
        { id: 3, text: '30+ Services', image: layersImage },
    ]
    return (
        <div className='buttons-section'>
            {buttons.map((item) => (
                <button key={item.id} className='btn image-btn larg-btn btn-fill-white'>
                    <img src={item.image} alt={item.text} />
                    <span>{item.text}</span>
                </button>
            ))}
        </div>
    )
}