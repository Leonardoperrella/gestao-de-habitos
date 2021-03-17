import styled from "styled-components";

export const BackGroundImageStyled = styled.div`
  background: ${({ image }) => `url(${image})`} no-repeat;
  background-size: 200%;
  background-position: 50% 10%;
  width: 100%;
  height: 30vh;
`;
