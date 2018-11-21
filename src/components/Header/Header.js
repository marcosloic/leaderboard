import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
    static propTypes = {
        onValueSelected: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            activeBtn: 'alltime'
        }
    }

    onValueSelected(period) {
        this.setState({
            activeBtn: period
        });
        this.props.onValueSelected();
    }

    render() {
        return (
            <header>
                <div className="branding">
                    <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/71/DAZN_logo.svg" />
                    <h1>Leaderboard</h1>
                </div>
                <div className="controls">
                    <label>Filter by:</label>
                    <select onChange={() => this.onValueSelected()}>
                        <option>Football</option>
                        <option>Basket Ball</option>
                        <option>Rugby</option>
                    </select>
                    <button
                        onClick={() => this.onValueSelected('week')}
                        className={(this.state.activeBtn === "week") ? "active" : ""}
                    >
                        This Week
                    </button>
                    <button
                        onClick={() => this.onValueSelected('month')}
                        className={(this.state.activeBtn === "month") ? "active" : ""}
                    >
                        This Month
                    </button>
                    <button
                        onClick={() => this.onValueSelected('alltime')}
                        className={(this.state.activeBtn === "alltime") ? "active" : ""}
                    >
                        All Time
                    </button>
                </div>
            </header>
        )
    }
}

export default Header;
