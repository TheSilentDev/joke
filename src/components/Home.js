import React, {Component} from 'react';
import axios from 'axios';
class Home extends Component {

  state = {
    randomJoke: ""
  };

  fetchJoke =  () => {

    fetch('https://icanhazdadjoke.com/', {
      headers: {
        mode: 'cors',
        'Content-Type': 'application/json'
      }
    }).then(response => console.log(response))
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchJoke}>Click for random joke</button>
      </div>
    );
  }
}

export default Home;