import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { COLORS, FONTS } from "../../style";

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
