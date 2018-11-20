import React, { Component } from 'react';
import { userPropType } from '../propTypes/user.proptype';

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

        let backgroundStyle = {
            color: '#fff',
            background: 'url(' + this.props.user.profile_pic + ') center / cover'
        };

        return (
            <div className="userCard demo-card-square mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-card--expand" style={backgroundStyle}>
                    <h2 className="mdl-card__title-text">Hey {user.nick_name}</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    You currently rank {user.ranking}st. Good job!
                </div>
            </div>
        )
    }
}

export default UserCard;
