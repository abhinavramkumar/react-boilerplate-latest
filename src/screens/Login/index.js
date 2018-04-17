import React, { Component } from "react";
import {
  Wrapper,
  Container,
  CenteredColumn,
  Form,
  Image,
  Button
} from "./styles.js";
import { start__logIn } from "../../services";
import IconLogin from "./assets/login.svg";

class Login extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <Container>
          <CenteredColumn>
            <Form>
              <Image src={IconLogin} />
              <p>Click the button and Come on In!</p>
              <Button onClick={start__logIn}>Login with Google</Button>
            </Form>
          </CenteredColumn>
        </Container>
      </Wrapper>
    );
  }
}

export default Login;
