import styled from "styled-components";
import { FONTS, COLORS } from "../../style";
import { Link } from "@material-ui/core";

export const HomeContainer = styled.div`
  margin-top: 4rem;
`;

export const HomeTitle = styled.h1`
  font-family: ${FONTS.normal};
  font-weight: 400;
  font-size: ${({ small }) => (small ? "18px" : "40px")};
`;

export const HomeHabitWrap = styled.div``;

export const HomeGroupWrap = styled.div``;

export const Group = styled.div`
  padding: 0rem 0 10rem 0;
  text-align: center;
  div {
    max-width: 300px;
    width: 100%;
    padding: 1rem 0 2rem 0;
  }
`;

export const LinkAllGroups = styled(Link)`
  color: ${COLORS.dark} !important;
  opacity: 0.5;
  text-decoration: underline !important;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
