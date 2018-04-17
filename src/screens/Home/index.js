import React, { Component } from "react";
import IconAi from "./assets/ai.svg";
import {
  Wrapper,
  Welcome,
  Container,
  CenteredColumn,
  Image
} from "./styles.js";

class Home extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <CenteredColumn>
            <Image src={IconAi} alt="AI" />
            <Welcome>React Boilerplate v4</Welcome>
          </CenteredColumn>
        </Container>
      </Wrapper>
    );
  }
}

export default Home;
