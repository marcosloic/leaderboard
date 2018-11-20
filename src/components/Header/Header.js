import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="branding">
                    <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/71/DAZN_logo.svg" />
                    <h1>Leaderboard</h1>
                </div>
                <div className="controls">
                    <label>Filter by:</label>
                    <select>
                        <option>Football</option>
                        <option>Basket Ball</option>
                        <option>Rugby</option>
                    </select>
                    <button>This Week</button>
                    <button>This Month</button>
                    <button>All Time</button>
                </div>
            </header>
        )
    }
}

export default Header;
