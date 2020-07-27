import React from 'react';
import Card from './Card';

const CardList = () => {
    return (
        <div className="container">
            <div className="row">
                <Card image="/images/boat.jpg" title="Lake District" />
                <Card image="/images/maldives.jpg" title="Maldives" />
                <Card image="/images/nature.jpg" title="Rivers and Mountains" />
                <Card image="/images/road.jpg" title="Autumn Forest" />
                <Card image="/images/yellowstone.jpg" title="Yellowstone National Park" />
                <Card image="/images/bled.jpg" title="Swampy Place" />
            </div>

        </div>
    );

}

export default CardList;