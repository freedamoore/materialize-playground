import React, { Component } from 'react';
import './Tabs.css';
import BookingForm from './BookingForm';

class Tabs extends Component {

    componentDidMount() {
        const M = window.M;

        var el = document.querySelectorAll('.tabs');
        var instance = M.Tabs.init(el, {});

    };
    render() {
        return (
            <div className="container" id="services" >
                <div className="card tab-card">
                    <ul id="tabs-swipe" className="tabs">
                        <li className="tab col s3"><a href="#swipe-1">Flights</a></li>
                        <li className="tab col s3"><a href="#swipe-2">Hotels</a></li>
                        <li className="tab col s3"><a href="#swipe-3">Packages</a></li>
                    </ul>
                    <div id="swipe-1" className="col s12 tab-content">
                        <div className="row">
                            <div className="col s12">
                                <BookingForm showOrigin={true} showReturn={true} />
                            </div>
                        </div>
                    </div>
                    <div id="swipe-2" className="col s12 tab-content">
                        <div className="row">
                            <div className="col s12">
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                    <div id="swipe-3" className="col s12 tab-content">
                        <div className="row">
                            <div className="col s12">
                                <BookingForm showOrigin={true} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Tabs;