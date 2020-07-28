import React from 'react';

const Footer = () => {
    return (
        <div className="page-footer grey darken-3">
            <div className="container">
                <h5>About</h5>
                <p>This is a mockup website built with Create React App and Materialize.css</p>
            </div>
            <div className="footer-copyright">
                <div className="container center-align">
                    <span>&copy; {new Date().getFullYear()}</span>
                    <a href="https://freedamoore.github.io/" className="cyan-text"> Freeda Moore</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;