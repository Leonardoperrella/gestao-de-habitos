import styled from "styled-components";
import { FONTS } from "../../style";

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
  div {
    max-width: 300px;
    width: 100%;
    padding: 1rem 0 2rem 0;
  }
`;
