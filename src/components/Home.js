import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const JokeText = styled.h2`
  margin: 20px 0;
  width: 65%;
`;

class Home extends Component {
  state = {
    joke: "JOKE TEXT HERE",
    randomJoke: {}
  };

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
    return (
      <Wrapper>
        <JokeText>{joke}</JokeText>
        <FontAwesomeIcon
          style={{ margin: "20px 0", cursor: "pointer" }}
          icon="play-circle"
          size={"5x"}
          onClick={this.fetchJoke}
        />
      </Wrapper>
    );
  }
}

export default Home;
