import styled from "styled-components";
import { FONTS, COLORS } from "../../style";
import { Button } from "@material-ui/core";

export const HabitsTitleWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 100px;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 50px;
  }
`;

export const HabitsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    padding: 50px;
  }
`;

export const HabitsTitle = styled.h1`
  font-family: ${FONTS.normal};
  margin: 20px;
`;

export const HabitSubTitle = styled.h5`
  font-family: ${FONTS.normal};
  color: ${COLORS.gray} !important;
  margin: 20px;
  transform: translateY(-83px) !important;
`;

export const HabitsButton = styled(Button)`
  background-color: ${COLORS.highlight} !important;
  color: ${COLORS.textHighlight} !important;
  height: 40px;

  @media (min-width: 1024px) {
    margin-top: 23px !important;
  }
`;
