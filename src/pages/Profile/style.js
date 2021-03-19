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

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center !important;
    align-items: center !important;
  }
`;

export const GroupsButton = styled(Button)`
  background-color: ${COLORS.highlight} !important;
  color: ${COLORS.textHighlight} !important;
  height: 40px;
`;

export const ProfilePerfilContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between !important;
    align-items: center !important;
    height: 300px;
  }
`;

export const ProfileInfoContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between !important;
    align-items: center !important;
    height: 350px;
  }
`;
