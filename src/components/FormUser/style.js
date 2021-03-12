import styled from "styled-components";
import { Link } from "@material-ui/core";
import { ImArrowRight2 } from "react-icons/im";
import { FONTS } from "../../style";

export const FormTitle = styled.h1`
  text-align: center;
  font-family: ${FONTS.highlight};
  font-size: 60px;
  letter-spacing: 3px;
`;

export const SquareRed = styled.div`
  width: 11px;
  height: 11px;
  background-color: #d24d57;
  transform: translate(10px, 18px);
`;
export const SquareGrey = styled.div`
  width: 11px;
  height: 11px;
  background-color: #b7b9bc;
  transform: translate(-15px, -16px);
  margin-left: auto;
`;

export const Form = styled.form`
  text-align: -webkit-center;
`;

export const ButtonSubmit = styled.button`
  float: right;
  width: 65px;
  height: 65px;
  background: #d24d57;
  box-shadow: 1px 5px 5px #943b41;
  border: none;
  border-radius: 10%;
  margin: 15px 35px;
`;

export const ButtonIcon = styled(ImArrowRight2)`
  color: white;
  font-size: 35px;
`;

export const ContainerLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 31px 34px;
`;

export const LinkRegister = styled(Link)`
  color: black !important;
  font-size: 2rem;
  font-family: ${FONTS.normal};
  text-decoration: none;
`;

export const LinkSingIn = styled(Link)`
  color: #747a7e !important;
  font-size: 1rem;
  margin: 12px 28px !important;
`;
