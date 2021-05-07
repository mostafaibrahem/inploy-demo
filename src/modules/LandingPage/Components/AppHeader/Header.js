import React from 'react'
import inployLogo from '../../../../resources/images/inploy-logo.png'

export default function AppHeader() {
    return (
        <header className='main-header'>
            <img src={inployLogo} alt='inploy Logo' />
        </header>
    )
}