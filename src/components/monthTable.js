import React from 'react';
import '../index.css';
import Month from './month';

class MonthTable extends React.Component {
  renderMonth(i) {
    return (
      <Month
        index={i}
        users={this.props.usersPerMonth[i]}
        onMouseEnter={() => this.props.onMouseEnter(i)}
        onMouseLeave={() => this.props.onMouseLeave()}
      />
    );
  }

  render() {
    const size = 4;
    let months = [];
    for (let i = 0; i < size - 1; i++) {
      months.push(<div className="month-row" />)
      for (let j = 0; j < size; j++) {
        months.push(this.renderMonth(i*size + j));
      }
    }

    return (
      <div className="month-table">{months}</div>
    );
  }
}

export default MonthTable;