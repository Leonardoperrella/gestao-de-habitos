import styled, { keyframes } from "styled-components";
import { AppBar, Fab, IconButton, Toolbar } from "@material-ui/core";
import { COLORS } from "../../style";

export const MenuContainer = styled(AppBar)`
  top: auto !important;
  bottom: 0 !important;
  background-color: ${COLORS.foreground} !important;
  @media (min-width: 1024px) {
    top: 0 !important;
    bottom: auto !important;
    width: 60px !important;
    align-items: center;
    box-shadow: none !important;
    border-radius: 20px;

    position: absolute;
    top: 4rem !important;
    right: 2rem !important;
    overflow: hidden;

    transition: 0.8s !important;
    max-height: 105px !important;

    &:hover {
      max-height: 500px !important;
    }
  }
`;

export const MenuHomeButton = styled(Fab)`
  position: relative !important;
  z-index: 1;
  top: -30px;
  left: 0;
  margin: 0 0px !important;
  background-color: ${COLORS.highlight} !important;
  @media (min-width: 1024px) {
    top: 0px !important;
    bottom: auto !important;

    position: absolute !important;
    top: 5px !important;
    left: calc(50% - 29px) !important;

    /* transition: transform 0.5s ease-in-out; */
    /* transform: rotate(-360deg); */

    &:hover {
      transition: transform 0.5s ease-in-out;
      transform: rotate(360deg);
    }
  }
`;

export const MenuIconsWrap = styled(Toolbar)`
  justify-content: space-between;

  button:first-child {
    display: none !important;
  }

  @media (min-width: 1024px) {
    top: 0px !important;
    bottom: auto !important;
    flex-direction: column;
    width: 100%;

    padding-top: 55px;

    button:first-child {
      display: block !important;
    }
  }
`;

export const MenuIcon = styled(IconButton)`
  margin: 0 !important;
  color: ${COLORS.text} !important;
`;

export const MenuHomeLogo = styled.img`
  width: 32px;
`;
