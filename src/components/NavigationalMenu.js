import React from "react";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../store/actions/loginActions";

function NavigationalMenu(props) {
  if (!props.isLoggedIn) {
    return (
      <div className={css(styles.navbar)}>
        <div className={css(styles.navbar_item)}>
          <Link to={"/login"}>Login</Link>
        </div>
        <div className={css(styles.navbar_item)}>
          <Link>Register</Link>
        </div>
      </div>
    );
  }

  function signOut() {
    props.signOut();
  }

  return (
    <div className={css(styles.navbar)}>
      <div className={css(styles.navbar_item)}>
        <Link to={"/"}>Crack Joke</Link>
      </div>
      <div
        style={{ cursor: "pointer" }}
        className={css(styles.navbar_item)}
        onClick={signOut}
      >
        <Link>Logout</Link>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  navbar_item: {
    padding: "30px 25px",
    margin: "0 15px"
  }
});

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn
});
const mapDispatchToProps = {
  signOut
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationalMenu);
