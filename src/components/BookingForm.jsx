import React, { Component } from 'react';
import './BookingForm.css';

class BookingForm extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {});

            var elemselect = document.querySelectorAll('select');
    var instanceselect = M.FormSelect.init(elemselect, {});
        });

    }

    render() {
        return (
            <div className="container">
                <form action="">
                    {this.props.showOrigin ?
                        <div className="input-field">
                            <input type="text" id="origin" value="" />
                            <label for="origin">Origin</label>
                        </div> : null}
                    <div className="input-field">
                        <input type="text" id="destination" value="" />
                        <label for="destination">Destination</label>
                    </div>
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="input-field">
                                <input type="text" id="depDate" className="datepicker" />
                                <label for="depDate">Departing</label>
                            </div>
                        </div>
                        <div className="col s12 m6">
                            <div className="input-field">
                                <input type="text" id="arrDate" className="datepicker" />
                                <label for="arrDate">Arriving</label>
                            </div>
                        </div>
                    </div>
                    {this.props.showReturn ?
                        <div className="input-field">
                            <label>
                                <input type="checkbox" />
                                <span>Return trip</span>
                            </label>
                        </div> : null}
                    <div className="input-field right">
                        <button className="btn">Submit</button>
                    </div>      
                </form>
            </div>
        );
    }
}

export default BookingForm;