import React, { Component } from 'react';
import { userPropType } from '../propTypes/user.proptype';

import styles from './UserCard.module.css';

class UserCard extends Component {
    static propTypes = {
        user: userPropType
    };

    static defaultProps = {
        user: null
    };

    render() {
        const {user} = this.props;

        if (!user) {
            return null;
        }

        return (
            <div className={styles.userCard}>
                <div className={styles.image}>
                    <img src={user.profile_pic} alt={user.id} />
                </div>
                <div className="mdl-card__supporting-text">
                    <h4>Hey {user.nick_name}</h4>
                    You currently rank {user.ranking}. Good job!
                </div>
            </div>
        )
    }
}

export default UserCard;
