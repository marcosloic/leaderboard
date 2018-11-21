import React, { Component } from 'react';

import styles from './Leaderboard.module.css';

import LeaderboardService from '../../services/leaderboard.service';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import UserTable from '../../components/UserTable/UserTable';

function shuffleGeneral(data) {
    const min = 10000;
    const max = 100000;
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
    }

    componentDidMount() {
        const leaderData = this.leaderboardService.generalRanking;
        const userData = this.leaderboardService.personalRanking;
        Promise.all([leaderData, userData]).then(data => {
            this.setState({
                generalRanking: data[0],
                userProfile: data[1],
            })
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
