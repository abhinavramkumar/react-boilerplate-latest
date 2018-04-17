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
  padding: 0;
`;

export const CenteredColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid #eee;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  p {
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: calc(1.125rem * 1.414);
  }
`;

export const Image = styled.img`
  height: 125px;
  width: 125px;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  line-height: 1rem * 1.414;
  background: #eaeaea;
  border: 1px solid #eee;
  cursor: pointer;
`;
