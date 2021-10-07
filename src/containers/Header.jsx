import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <>
        <div class="Header__Container">
            <img src={`${process.env.PUBLIC_URL}/MarvelLogo.svg`} alt="" class="Header__Logo" />
        </div>
        </>
    )
}

export { Header, }
