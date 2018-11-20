import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/71/DAZN_logo.svg" />
                <h1>Leaderboard</h1>
            </header>
        )
    }
}

export default Header;
