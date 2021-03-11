import styled from "styled-components";
import { TextField, Link } from "@material-ui/core";
import { ImArrowRight2 } from "react-icons/im";

export const FormTitle = styled.h1`
  text-align: center;
`;

export const Input = styled(TextField)`
  width: 76vw;
  margin: 12px 0 !important;
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
`;

export const LinkSingIn = styled(Link)`
  color: #747a7e !important;
  font-size: 1rem;
  margin: 12px 28px !important;
`;
