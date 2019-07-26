import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function NavigationalMenu(props){

  if(!props.loggedIn) {
    return (
      <div className={css(styles.navbar)}>
        <div>Login</div>
        <div>Register</div>
      </div>
    )
  }

  return (
    <div className={css(styles.navbar)}>
      <div>Crack Joke</div>
      <div>Logout</div>
    </div>
  )
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex'
  }
});

export default NavigationalMenu