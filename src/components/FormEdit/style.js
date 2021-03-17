import styled from "styled-components";
import { COLORS, FONTS } from "../../style";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const FormEditContainer = styled.form``;

export const FormEditWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -30px;
`;

export const FormEditTitle = styled.h1`
  font-family: ${FONTS.normal} !important;
  font-size: 28px !important;
  letter-spacing: 0px !important;
  margin: 5px 0 !important;
`;

export const FormEditButton = styled.button`
  width: 100%;
  outline: none;
  border: 0;
  height: 70px;
  background-color: ${({ isRemovable }) =>
    isRemovable ? COLORS.dark : COLORS.highlight};
  color: ${COLORS.textHighlight};
  margin: 5px 0;
  font-weight: 700;
  text-transform: uppercase;
`;

export const FormEditTextWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const FormEditBackButtonWrap = styled.button`
  padding: 0px;
  outline: none;
  border: 0;
  background-color: transparent;
  margin: 0 !important;
  position: relative;
  left: -125px;
  top: 26px;
`;

export const FormEditBackButtonIcon = styled(ArrowBackIcon)`
  color: ${COLORS.highlight};
  max-width: 30px;
  height: 30px;
  font-size: 2rem !important;
`;
