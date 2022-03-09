import React from "react";

class User extends React.Component {
  render() {
    const {
      data: { firstName, lastName, city, state, country },
    } = this.props;
    return (
      <>
        <h3 class="head"> Employee Detail </h3>

        <div class="content">
          <p>FirstName : {firstName} </p>
          <p>LastName : {lastName} </p>
          <p>City : {city} </p>
          <p>State : {state} </p>
          <p>Country : {country} </p>
        </div>
      </>
    );
  }
}

export default User;
