import styled from "styled-components";
import { Card } from "@material-ui/core";
import { COLORS, FONTS } from "../../style";

export const CardSearchContainer = styled(Card)`
  background-color: ${COLORS.highlight} !important;
  width: 270px;
  margin: 20px;

  h1 {
    font-family: ${FONTS.normal};
    margin: 0;
    font-size: 30px;
    color: ${COLORS.text};
  }
  p:nth-of-type(1) {
    color: ${COLORS.textHighlight};
    font-weight: 700;
    margin-bottom: 0;
  }
`;
