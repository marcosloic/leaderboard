import React, { Component } from 'react';

import styles from './Leaderboard.module.css';

import LeaderboardService from '../../services/leaderboard.service';
import Header from '../../components/Header/Header';
import UserCard from '../../components/UserCard/UserCard';
import UserTable from '../../components/UserTable/UserTable';

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

    render() {
        return (
            <div>
                <Header />
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
