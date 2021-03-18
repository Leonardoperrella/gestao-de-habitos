import styled from "styled-components";
import { InputBase, Toolbar } from "@material-ui/core";
import { COLORS, FONTS } from "../../style";

export const SearchTitle = styled.h1`
  font-family: ${FONTS.normal};
  font-size: 2rem;
`;

export const SearchBar = styled(Toolbar)`
  background-color: ${COLORS.highlight};
  width: 70vw;
  border-radius: 5px;
  padding: 5px;
`;

export const SearchInput = styled(InputBase)`
  background-color: ${COLORS.foreground};
  border-radius: 5px;
  padding: 5px 5px 5px 10px;
  margin-left: 10px;
  font-weight: 700;
`;
