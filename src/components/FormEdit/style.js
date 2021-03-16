import styled from "styled-components";
import { COLORS, FONTS } from "../../style";

export const FormEditContainer = styled.form``;

export const FormWrap = styled.div``;

export const FormEditTitle = styled.h1`
  font-family: ${FONTS.normal} !important;
  font-size: 28px !important;
  letter-spacing: 0px !important;
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
