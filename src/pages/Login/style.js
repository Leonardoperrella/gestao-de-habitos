import styled from "styled-components";
import { GlobalnWrapStyled } from "../../components/GlobalWrap/style";

export const FooterLogin = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1.4rem;
  width: 100%;

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #747a7e;

    &:hover {
      color: #252525;
    }
  }
`;

export const ContainerLogin = styled(GlobalnWrapStyled)`
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    right: -300px !important;

    border-radius: 0;
    transform: initial;
    padding: 0px;
    width: 550px;
    background-color: rgba(255,255,255,.9);
    height: 100%;
  }
`;
