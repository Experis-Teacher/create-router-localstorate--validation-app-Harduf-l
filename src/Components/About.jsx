import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveName(e) {
    if (e.target.value.match(/harduf/)) {
      localStorage["name"] = e.target.value;
    }

    localStorage["name"] = "not harduf"
  }

  navigate = () => {
    this.props.history.push("/contact");
  }

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          onBlur={this.saveName}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
