import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropType } from '../propTypes/user.proptype';

class UserTable extends Component {
    static propTypes = {
        userList: PropTypes.arrayOf(userPropType)
    };

    static defaultProps = {
        userList: null
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
                    <tr>
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
        return (
            <table className="mdl-data-table mdl-shadow--2dp">
                {this.renderHead()}
                {this.renderBody()}
            </table>
        )
    }
}

export default UserTable;
