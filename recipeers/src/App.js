import React, { Component } from "react";
import "./App.css";
import Landing from "./components/landing";

class App extends Component {
  state = {
    response: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <div>
        <h1>{this.state.response}</h1>
        <Landing />
      </div>
    );
  }
}

export default App;
