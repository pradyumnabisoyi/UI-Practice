import React, {Component} from 'react';
import {Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div>Chatashali</div>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/about'>About</Link>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Header;