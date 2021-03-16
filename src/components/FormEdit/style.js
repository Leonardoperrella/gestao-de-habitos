import styled from "styled-components";
import { COLORS, FONTS } from "../../style";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const FormEditContainer = styled.form``;

export const FormWrap = styled.div``;

export const FormEditTitle = styled.h1`
  font-family: ${FONTS.normal} !important;
  font-size: 28px !important;
  letter-spacing: 0px !important;
  margin: 5px 0 !important;
  flex-grow: 1;
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

export const FormEditWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const FormBackButtonWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  outline: none;
  border: 0;
  padding: 5px 10px;
  background-color: transparent;
  margin: 10px -25px;
  position: relative;
  left: 20px;
`;

export const FormBackButtonText = styled.h1`
  font-size: 12px !important;
  font-family: ${FONTS.normal} !important;
  color: ${COLORS.gray} !important;
  margin: 0 !important;
`;

export const FormBackButtonIcon = styled(ArrowBackIcon)`
  color: ${COLORS.highlight};
  max-width: 30px;
  height: 30px;
  font-size: 2rem !important;
`;
