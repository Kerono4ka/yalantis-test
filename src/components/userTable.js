import React from 'react';
import '../index.css';
import User from './user';
import monthNames from '../monthNames';

class UserTable extends React.Component {
  render() {

    return (
      <div className="user-table">
        <h3>{monthNames[this.props.month]}</h3>
        <table>
          <thead>
              <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Birthday</th>
              </tr>
          </thead>

          <tbody>
            {this.props.users.map((user) =>
              <User user={user}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserTable;