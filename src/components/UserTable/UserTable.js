import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropType } from '../propTypes/user.proptype';

import styles from './UserTable.module.css';

class UserTable extends Component {
    static propTypes = {
        userList: PropTypes.arrayOf(userPropType)
    };

    static defaultProps = {
        userList: []
    };

    renderHead() {
        return (
            <thead>
            <tr>
                <th className="mdl-data-table__cell--non-numeric"></th>
                <th>Id</th>
                <th>Name</th>
                <th>Ranking</th>
                <th>Points</th>
            </tr>
            </thead>
        )
    }

    renderBody() {
        return (
            <tbody>
            {this.props.userList.map(user => {
                return (
                    <tr key={user.id}>
                        <th>
                            <img src={user.profile_pic}
                                 alt={user.nick_name}
                            />
                        </th>
                        <th>{user.id}</th>
                        <th>{user.nick_name}</th>
                        <th>{user.ranking}</th>
                        <th>{user.points}</th>
                    </tr>
                )
            })}
            </tbody>
        )
    }

    render() {
        const classN = [
            styles.userTable,
            'mdl-data-table mdl-shadow--2dp'
        ].join(' ');
        return (
            <table className={classN}>
                {this.renderHead()}
                {this.renderBody()}
            </table>
        )
    }
}

export default UserTable;
