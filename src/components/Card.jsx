import React from 'react';
import './Card.css';

const Card = ({ image, title }) => {
    return (
        <div className="col s12 m6 xl4">
            <div className="card">
                <div className="card-image">
                    <img src={image} alt="Image of holiday destination"></img>
                    <a href="#" className="halfway-fab btn-floating pink pulse">
                        <i className="material-icons">favorite</i>
                    </a>
                </div>
                <div className="card-content">
                    <span className="card-title">{title}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="card-action">
                    <a href="#">More details</a>
                    <a href="#" className="right">Book Now</a>
                </div>
            </div>
        </div>
    );
}

export default Card;