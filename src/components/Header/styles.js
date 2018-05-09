import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  height: 40px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;

export const Row = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  height: 100%;
  font-family: ${props => props.theme.fonts.sans};
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
  color: ${props => props.theme.colors.greyDark};
  word-spacing: 2px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  margin: 0;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  display: block;
  box-sizing: border-box;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => props.theme.colors.greyDark};
  text-decoration: none;
`;
