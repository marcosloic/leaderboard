import React, { Component } from 'react';

import styles from './Leaderboard.module.css';

class Leaderboard extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>I'm the leaderboard</h1>
                </header>
                <div>
                    <h3>This is where you stand</h3>
                    <ul className={styles.personalList}>
                        <li>User one</li>
                        <li>User two</li>
                        <li>You !</li>
                        <li>Sucker behind you</li>
                        <li>Sucker even farther away</li>
                    </ul>
                </div>
                <div>
                    <h3>This is the general ranking</h3>
                    <ul className={styles.generalList}>
                        <li>User one</li>
                        <li>User two</li>
                        <li>User three</li>
                        <li>User four</li>
                        <li>User five</li>
                        <li>User six</li>
                        <li>etc...</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Leaderboard;
