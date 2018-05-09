import React, { Component } from "react";
import { Wrapper, Container, Row, Brand, StyledLink, Links } from "./styles.js";

class Header extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Brand>React Boilerplate</Brand>
            <Links>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/login">Login</StyledLink>
            </Links>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Header;
