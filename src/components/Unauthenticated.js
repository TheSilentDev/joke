import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Unauthenticated() {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>You need to login to Crack Jokes!</h1>
    </div>
  );
}

export default Unauthenticated;
