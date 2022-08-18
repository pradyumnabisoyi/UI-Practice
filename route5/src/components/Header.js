import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand">Chatashali</div>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/posts'>Post</Link></li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Header;