import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { COLORS, FONTS } from "../../style";
import { Button } from "@material-ui/core";

export const ProfileIcon = styled(AccountCircleIcon)`
  font-size: 5rem !important;
`;

export const ProfileTitle = styled.h1`
  font-family: ${FONTS.highlight};
  letter-spacing: 3px;
`;

export const ProfileSubTitle = styled.h2`
  font-family: ${FONTS.normal} !important;
  color: ${COLORS.highlight};
`;

export const ProfileText = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const GroupsTitleWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 50px 50px 0 50px;
  }
`;

export const GroupsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start !important;
    align-items: flex-start !important;
    padding: 20px 50px 50px 50px;
  }
`;

export const GroupsTitle = styled.h1`
  font-family: ${FONTS.normal};
  margin: 20px;
`;

export const GroupsButton = styled(Button)`
  background-color: ${COLORS.highlight} !important;
  color: ${COLORS.textHighlight} !important;
  height: 40px;
`;
