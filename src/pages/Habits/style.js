import styled from "styled-components";
import { FONTS, COLORS } from "../../style";
import { Button } from "@material-ui/core";

export const HabitsWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HabitsTitle = styled.h1`
  font-family: ${FONTS.normal};
  margin: 20px;
`;

export const HabitsButton = styled(Button)`
  background-color: ${COLORS.highlight} !important;
  color: ${COLORS.textHighlight} !important;
  height: 40px;
`;
