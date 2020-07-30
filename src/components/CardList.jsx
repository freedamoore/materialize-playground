import React from 'react';
import Card from './Card';
import img1 from './../assets/boat.jpg';
import img2 from './../assets/maldives.jpg';
import img3 from './../assets/nature.jpg';
import img4 from './../assets/road.jpg';
import img5 from './../assets/yellowstone.jpg';
import img6 from './../assets/bled.jpg';


const CardList = () => {
    return (
        <div className="container">
            <div className="row">
                <Card image={img1} title="Lake District" />
                <Card image={img2} title="Maldives" />
                <Card image={img3} title="Rivers and Mountains" />
                <Card image={img4} title="Autumn Forest" />
                <Card image={img5} title="Yellowstone Park" />
                <Card image={img6} title="Swampy Place" />
            </div>

        </div>
    );

}

export default CardList;