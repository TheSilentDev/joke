import React, { Component } from "react";
import { loginUser } from "../store/actions/loginActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

class Login extends Component {
  state = {
    email: "",
    password: "",
    loginUnsuccessful: false
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    this.props.loginUser(email, password);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      this.props.history.push("/");
    }
  }

  render() {
    const { email, password } = this.state;
    const { isLoggedIn, loginUnsuccessful } = this.props;
    return (
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Row style={{ justifyContent: "center" }}>
          <Col>
            {loginUnsuccessful && (
              <Alert variant="danger">Username or Password is incorrect</Alert>
            )}
          </Col>
        </Row>

        <Row>
          <Col style={{ justifyContent: "center" }}>
            <Card style={{ padding: "20px" }}>
              <Form className="flex flex-column" onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label> Email Address </Form.Label>
                  <Form.Control
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    type="text"
                    placeholder="Your email address"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label> Password </Form.Label>
                  <Form.Control
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                    type="password"
                    placeholder="Choose a safe password"
                  />
                </Form.Group>
                <button
                  name="submit"
                  type="submit"
                  style={{
                    padding: "10px",
                    color: "#fff",
                    float: "right",
                    background: "#000",
                    border: "none"
                  }}
                  onClick={this.handleSubmit}
                >
                  login
                </button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  loginUnsuccessful: state.login.loginUnsuccessful
});

const mapDispatchToProps = { loginUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
