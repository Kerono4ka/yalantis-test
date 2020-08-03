import React from 'react';
import '../index.css';

function User(props) {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.firstName}</td>
      <td>{props.user.lastName}</td>
      <td>{new Date(props.user.dob).toDateString()}</td>
    </tr>
  );
}
export default User;