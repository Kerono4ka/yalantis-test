import React from 'react';
import '../index.css';
import MonthTable from './monthTable';
import UserTable from './userTable';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersPerMonth: null,
      activeMonth: null,
    }

    this.controller = new AbortController();
  }

  componentDidMount() {
    const url = 'https://yalantis-react-school-api.yalantis.com/api/task0/users'
    fetch(url, {
      signal: this.controller.signal
    })
    .then((response) => {
      return response.json();
    })
    .then(users => {
      let usersPerMonth = Array(12).fill().map((el) => []);

      users.forEach((user) => {
        const date = new Date(user["dob"]);
        usersPerMonth[date.getMonth()].push(user);
      });

      this.setState({usersPerMonth: usersPerMonth});
    })
  }

  componentWillUnmount(){
    this.controller.abort();
  }

  handleMouseEnter(i) {
    this.setState({activeMonth: i});
  }

  handleMouseLeave() {
    this.setState({activeMonth: null});
  }

  render() {
    if (!this.state.usersPerMonth) {
      return (<div>Loading...</div>)
    }

    const activeMonth = this.state.activeMonth;
    return (
      <div className="calendar">
        <MonthTable
          usersPerMonth={this.state.usersPerMonth}
          onMouseEnter={(i) => {this.handleMouseEnter(i)}}
          onMouseLeave={() => {this.handleMouseLeave()}}
        />
        {activeMonth !== null ?
          <UserTable
            users={this.state.usersPerMonth[activeMonth]}
            month={activeMonth}
          /> : ''
        }
      </div>
    );
  }
}

export default Calendar;