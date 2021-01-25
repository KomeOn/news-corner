import React from 'react';
import './header.css';

export default function FooterPlate() {
    return (
        <footer style={{ marginTop: "2.25em" }}>
            <h3>Made with React <i className="fab fa-react"></i></h3>
            <hr />
            <p>This project is created by Sanket Sonowal | 2020 - <span>{new Date().getFullYear()}</span> | All rights reserved &copy; &trade; | <a href="#" style={{color: 'white', fontFamily: "'Oswald', sans-serif"}} download="https://github.com/KomeOn/news-corner/blob/master/src/News-corner.pptx">Download</a></p> 
        </footer>

    )
}