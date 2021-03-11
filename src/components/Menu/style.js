import styled from "styled-components";
import { AppBar, Fab, IconButton, Toolbar } from "@material-ui/core";
import { COLORS } from "../../style";

export const MenuContainer = styled(AppBar)`
  top: auto !important;
  bottom: 0 !important;
  background-color: ${COLORS.foreground} !important;
`;

export const MenuHomeButton = styled(Fab)`
  position: relative !important;
  z-index: 1;
  top: -30px;
  left: 0;
  right: 0;
  margin: 0 0px !important;
  background-color: ${COLORS.highlight} !important;
`;

export const MenuIconsWrap = styled(Toolbar)`
  justify-content: space-between;
`;

export const MenuIcon = styled(IconButton)`
  margin: 0 !important;
  color: ${COLORS.text} !important;
`;

export const MenuHomeLogo = styled.img`
  width: 32px;
`;
