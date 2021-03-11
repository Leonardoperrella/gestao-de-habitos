import styled from "styled-components";
import { FONTS } from "../../style";

export const HomeContainer = styled.div`
  padding: 25px;
`;

export const HomeTitle = styled.h1`
  font-family: ${FONTS.normal};
  font-weight: 400;
  font-size: ${({ small }) => (small ? "18px" : "40px")};
`;

export const HomeHabitWrap = styled.div``;

export const HomeGroupWrap = styled.div``;
