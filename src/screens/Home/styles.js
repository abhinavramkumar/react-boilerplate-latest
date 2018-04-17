import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  height: calc(100vh - 40px);
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;

export const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Welcome = styled.h1`
  color: ${props => props.theme.colors.greyDark};
`;

export const Image = styled.img`
  width: 175px;
  height: 175px;
`;
