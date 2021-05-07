import React from 'react'
export default function SocialMediaIcon(props) {
    const {item,small}=props
    return (
        <span className={small?'socialmedia-item small':'socialmedia-item'} key={item.id}>
            <img src={item.img} alt={item.alt} />
        </span>
    )
}
