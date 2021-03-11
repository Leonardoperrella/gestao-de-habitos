import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginImage = styled.div`
  background: ${({ image }) => `url(${image})`} no-repeat;
  background-size: 200%;
  background-position: 50% 10%;
  width: 100%;
  height: 30vh;
`;

export const LoginWrap = styled.div``;
