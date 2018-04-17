import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 40px);
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Warning = styled.h1`
  margin-bottom: 2rem;
`;

export const Button = styled.div`
  background: #ccc;
  color: ${props => props.theme.colors.greyDark};
  padding: 0.75rem 1.25rem;
  line-height: 1rem * 1.414;
  font-size: 1rem;
  box-shadow: 0 2px 2px 0 rgba(#000, 0.125);
  border: 1px solid #ccc;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.greyDark};
  }
`;
