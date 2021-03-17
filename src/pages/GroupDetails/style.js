import styled, { keyframes } from "styled-components";

export const ButtonTopic = styled.button`
  font-size: 2rem;
  font-family: Tungsten;
  color: #252525;
  letter-spacing: 2px;
  margin: 1rem 0 0.5rem 0;
  width: 300px;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #252525;

  svg {
    height: 1rem;
    width: 1rem;
    position: absolute;
    right: 1rem;
    top: calc(50% - 0.5rem);
    transition: 0.3s;

    transform: ${({ showItem }) =>
      showItem ? "rotate(0)" : "rotate(180deg)"};
  }
`;

const animationShow = keyframes`
  from{
    opacity:0;
    transform: translatey(-30px);
  }
  to{
    opacity:initial;
    transform: initial;
  }
`;

export const ContainerShow = styled.div`
  div {
    animation: ${animationShow} 0.3s forwards;
  }
`;
