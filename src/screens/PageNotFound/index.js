import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Button,
  Container,
  CenteredColumn,
  Warning
} from "./styles.js";

const PageNotFound = props => {
  return (
    <Wrapper>
      <Container>
        <CenteredColumn>
          <Warning>404. Page Not Found!</Warning>
          <Button>
            <Link to="/">Go Home</Link>
          </Button>
        </CenteredColumn>
      </Container>
    </Wrapper>
  );
};

export default PageNotFound;
