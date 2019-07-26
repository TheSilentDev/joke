import React, { Component } from "react";
import Unauthenticated from "./Unauthenticated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";

class Home extends Component {
  state = {
    isLoggedIn: false,
    joke: "JOKE TEXT HERE",
    randomJoke: {}
  };

  componentDidMount() {
    const loginStatus = localStorage.getItem("isLoggedIn");

    if (loginStatus) {
      this.setState({ isLoggedIn: loginStatus });
    }
  }

  fetchJoke = async () => {
    await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(result => this.setState({ joke: result.joke }));
  };

  render() {
    const { joke } = this.state;
    const { isLoggedIn, randomJoke } = this.props;

    return isLoggedIn ? (
      <div
        style={{
          width: "100%",
          marginTop: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h2 style={{ margin: "20px 0", width: "65%" }}>{joke}</h2>
        <FontAwesomeIcon
          style={{ margin: "20px 0", cursor: "pointer" }}
          icon="play-circle"
          size={"5x"}
          onClick={this.fetchJoke}
        />
      </div>
    ) : (
      <Unauthenticated />
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn
});

export default connect(mapStateToProps)(Home);
