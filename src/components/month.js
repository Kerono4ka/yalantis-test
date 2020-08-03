import React from 'react';
import '../index.css';
import monthNames from '../monthNames';

class Month extends React.Component {
  getColorByUsersCount(count) {
    const colors = [
      {
        lb: 0,
        ub: 2,
        v: 'grey',
      },
      {
        lb: 3,
        ub: 6,
        v: 'blue',
      },
      {
        lb: 7,
        ub: 10,
        v: 'green',
      }
    ];

    for(const color of colors) {
      if (count >= color.lb && count <= color.ub) {
        return color.v;
      }
    }

    return 'red';
  }

  render() {
    return (
      <div
        className="month"
        style={{backgroundColor: this.getColorByUsersCount(this.props.users.length)}}
        onMouseEnter={() => this.props.onMouseEnter()}
        onMouseLeave={() => this.props.onMouseLeave()}
      >
        {monthNames[this.props.index]}
      </div>
    );
  }
}

export default Month;