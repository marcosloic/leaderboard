import React, { Component } from 'react';

import styles from './Leaderboard.module.css';

import LeaderboardService from '../../services/leaderboard.service';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalRanking: null,
            personalRanking: null,
        };
        this.leaderboardService = new LeaderboardService();
    }

    componentDidMount() {
        const leaderData = this.leaderboardService.generalRanking;
        const userData = this.leaderboardService.personalRanking;
        Promise.all([leaderData, userData]).then(data => {
            this.setState({
                generalRanking: data[0],
                personalRanking: data[1],
            })
        })
    }

    leaderboardList() {
        if (!this.state.generalRanking) {
            return null;
        }
        return this.state.generalRanking.map(entry => {
            console.log(entry);
            return <li key={entry.id}>{entry.nick_name}</li>
        })
    }

    personalList() {
        if (!this.state.personalRanking) {
            return null;
        }
        return <li>{this.state.personalRanking.nick_name}</li>
    }

    render() {
        return (
            <div>
                <header>
                    <h1>I'm the leaderboard</h1>
                </header>
                <div>
                    <h3>This is where you stand</h3>
                    <ul className={styles.personalList}>
                        {this.personalList()}
                    </ul>
                </div>
                <div>
                    <h3>This is the general ranking</h3>
                    <ul className={styles.generalList}>
                        {this.leaderboardList()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Leaderboard;
