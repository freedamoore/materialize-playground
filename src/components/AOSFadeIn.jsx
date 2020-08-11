import React, {useEffect} from 'react';
import './AOSFadeIn.scss';
//*** I've included the below in index.js */
// import 'aos/dist/aos.css';
// import 'aos/dist/aos.js';
import AOS from 'aos';

const AOSFadeIn = () => {

    useEffect(() => {
        AOS.init();
    });

    return(
        <div className="aos-fade-in" >
            <div className="aos-fade-in__item" data-aos="fade-up" data-aos-duration="2000">I should fade up.</div>
            <div className="aos-fade-in__item" data-aos="fade-down" data-aos-duration="2000">I should fade down</div>
            <div className="aos-fade-in__item" data-aos="fade-right" data-aos-duration="2000">I should fade in from the right.</div>
            <div className="aos-fade-in__item" data-aos="fade-left" data-aos-duration="2000">I should fade in from the left</div>
            <div className="aos-fade-in__item" data-aos="fade-up-right" data-aos-duration="2000">I should fade up right</div>
            <div className="aos-fade-in__item" data-aos="fade-down-right" data-aos-duration="2000">I should fade down right</div>
            <div className="aos-fade-in__item" data-aos="fade-up-left" data-aos-duration="2000">I should fade up left.</div>
            <div className="aos-fade-in__item" data-aos="fade-down-left">I should fade down left</div>
            <div className="aos-fade-in__item" data-aos="flip-left" data-aos-duration="2000">I should flip left.</div>
            <div className="aos-fade-in__item" data-aos="flip-right" data-aos-duration="2000">I should flip right</div>
            <div className="aos-fade-in__item" data-aos="flip-up" data-aos-duration="2000">I should flip up.</div>
            <div className="aos-fade-in__item" data-aos="flip-down" data-aos-duration="2000">I should flip down</div>
            <div className="aos-fade-in__item" data-aos="zoom-in">I should zoom in</div>
            <div className="aos-fade-in__item" data-aos="zoom-in-up" data-aos-duration="2000">I should zoom in up</div>
            <div className="aos-fade-in__item" data-aos="zoom-in-left" data-aos-duration="2000">I should zoom in left</div>
            <div className="aos-fade-in__item" data-aos="zoom-out" data-aos-duration="2000">I should zoom out.</div>
            <div className="aos-fade-in__item" data-aos="zoom-out-down" data-aos-duration="2000">I should zoom out down</div>
        </div>
    );
}

export default AOSFadeIn;