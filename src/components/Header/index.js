import React, { Component } from "react";
import { Wrapper, Container, Row, Brand, Button } from "./styles.js";

class Header extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Brand>Brand</Brand>
            <Button>Logout</Button>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
