import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  Container,
  CenteredColumn,
  Form,
  Image,
  Button
} from "./styles.js";

import {LOGIN_USER_AUTH} from '../../services/constants';
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
              <Button onClick={e => this.props.loginUser()}>Login with Google</Button>
            </Form>
          </CenteredColumn>
        </Container>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: () =>
    dispatch({
      type: `ASYNC_${LOGIN_USER_AUTH}`
    })
});

export default connect(undefined, mapDispatchToProps)(Login);
