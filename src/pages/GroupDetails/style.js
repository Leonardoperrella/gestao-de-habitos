import styled, { keyframes } from "styled-components";
import { IoIosAddCircle } from "react-icons/io";

import { FONTS, COLORS } from "../../style";

export const ButtonTopic = styled.button`
  font-size: 2rem;
  font-family: ${FONTS.highlight};
  color: #252525;
  letter-spacing: 2px;
  margin: 1rem 0 0.5rem 0;
  width: 300px;
  position: relative;
  background-color: ${COLORS.foreground};
  border-radius: 5px;
  border: 1px solid #252525;

  svg {
    height: 1rem;
    width: 1rem;
    position: absolute;
    right: 1rem;
    top: calc(50% - 0.5rem);
    transition: 0.3s;

    transform: ${({ showItem }) => (showItem ? "rotate(0)" : "rotate(180deg)")};
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

export const AddIcon = styled(IoIosAddCircle)`
  margin-top: 12px;
  width: 41px;
  height: 47px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const ContainerNotificaiton = styled.div`
  margin: 174px 0px;
  font-family: ${FONTS.normal};

  @media (min-width: 1024px) {
    margin-top: 110px;
    font-size: 2rem;
  }
`;
