import React from 'react';
import './header.css';
import Logo from './pictures/LogoMaker.svg';

export default function HeaderNav() {
    return (
        <nav>
            <div id="bigg">
                <img src={Logo} alt="..." className="header-logo" />
            </div>
            <div className="left-aside">
                <a href="https://docs.webhose.io/reference#about-webhose" title="Webhose API Documentation Link" target="_blank" rel="noreferrer">Webhose API <i className="fab fa-quinscape"></i></a>
                <a href="https://github.com/KomeOn/news-corner" title="Github Repository Containing Source Code Link" target="_blank" rel="noreferrer">Github <i className="fab fa-github"></i></a>
            </div>
        </nav>
    )
}