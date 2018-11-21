import React, { Component } from 'react';

import styles from './Leaderboard.module.css';

import LeaderboardService from '../../services/leaderboard.service';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import UserTable from '../../components/UserTable/UserTable';

function shuffleGeneral(data) {
    const min = 10000;
    const max = 20000;
    return data
        .map(entry => {
            entry.points = Math.floor(Math.random() * (max - min) + min);
            return entry;
        })
        .sort((a, b) => {
            return b.points - a.points;
        })
        .map((entry, idx) => {
            entry.ranking = idx + 1;
            return entry;
        })
}

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalRanking: null,
            userProfile: null,
        };
        this.leaderboardService = new LeaderboardService();
        window.setInterval(this.increasePoints.bind(this), 1000);
    }

    componentDidMount() {
        const leaderData = this.leaderboardService.generalRanking;
        const userData = this.leaderboardService.personalRanking;
        Promise.all([leaderData, userData]).then(data => {
            const newData = data[0].map(entry => {
                entry.points = Math.floor(Math.random() * (20000 - 10000) + 10000);
                return entry;
            });
            this.setState({
                generalRanking: newData,
                userProfile: data[1],
            })
        })
    }

    increasePoints() {
        const newData = this.state.generalRanking
            .map(entry => {
                const shouldAddPoints = Math.floor((Math.random() * 5) + 1);
                const pointsToAdd = Math.floor((Math.random() * 1000) + 1);
                if (shouldAddPoints === 5) {
                    entry.points += pointsToAdd;
                }
                return entry
            })
            .sort((a, b) => {
                return b.points - a.points;
            })
            .map((entry, idx) => {
                entry.ranking = idx + 1;
                return entry;
            });

        this.setState({
            generalRanking: newData
        })
    }

    leaderboardList() {
        if (!this.state.generalRanking) {
            return null;
        }
        return <UserTable userList={this.state.generalRanking}/>
    }

    shuffleUserList() {
        const newUserProfile = {
            ...this.state.userProfile,
            ranking: Math.floor(Math.random() * (200 - 120) + 120)
        };
        this.setState({
            generalRanking: shuffleGeneral(this.state.generalRanking),
            userProfile: newUserProfile
        });
    }

    render() {
        return (
            <div>
                <Header
                    onValueSelected={this.shuffleUserList.bind(this)}
                />
                <div className={styles.leaderboard}>
                    <div>
                        <ul className={styles.personalList}>
                            <UserCard user={this.state.userProfile}/>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.generalList}>
                            {this.leaderboardList()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard;
