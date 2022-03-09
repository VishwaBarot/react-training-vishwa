import React from "react";

class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "abcd",
    };
  }

   componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <>
        <button onClick={this.props.clickHandler}>Click</button>
        <h2>My name is {this.state.name}</h2>
      </>
    );
  }
}

export default Child;
