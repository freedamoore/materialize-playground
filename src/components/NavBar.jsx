import React, { Component } from 'react';

class NavBar extends Component {

    componentDidMount() {
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, { edge: 'right' });
        });
    };

    render() {
        return (
            <div>
                <nav className="nav-wrapper cyan">
                    <div className="container">
                        <a href="#" className="brand-logo left"><span class="material-icons">sports_volleyball</span><span> Material</span></a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger right hide-on-med-and-up"><i className="material-icons">menu</i></a>

                        <ul className="right hide-on-small-only">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>

                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                </ul>


            </div >
        );

    }
}

export default NavBar;