import React, { Component } from 'react';
import './NavBar.css';


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
                <nav className="nav-wrapper transparent">
                    <div className="container">
                        <a href="#" className="brand-logo left"><span class="material-icons">sports_volleyball</span> <span>Avantyura</span></a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger right hide-on-med-and-up"><i className="material-icons">menu</i></a>

                        <ul className="right hide-on-small-only">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li>
                                <a href="#" className="btn-floating cyan darken-4 z-depth-0">
                                    <i class="material-icons">notifications</i>
                                </a>
                            </li>
                            <li><span className="badge white-text pink new notifications">5</span></li>
                        </ul>
                    </div>

                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Notifications<span className="badge white-text pink new">5</span></a></li>
                </ul>


            </div >
        );

    }
}

export default NavBar;