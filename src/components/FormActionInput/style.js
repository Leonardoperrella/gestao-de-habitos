import styled from "styled-components";

export const Label = styled.label``;

export const ContainerInput = styled.div`
  position: relative;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  width: 300px;
  height: 3.5rem;
  font-size: 1rem;
  padding-left: 0.5rem;
  background-color: #F9F9F9;
  border: 2px solid #E8F0FE;
  padding-top: 0.3rem;
`;

export const Span = styled.span`
  transition: 0.2s;
  position: absolute;
  top: ${({ activeInput }) => (activeInput ? "12px" : "50%")};
  left: 0.8rem;
  transform: translateY(-50%);
  color: ${({ activeInput }) => (activeInput ? "#616161" : "#252525")};

  font-size: ${({ activeInput }) => (activeInput ? ".8rem" : "1rem")};
  font-family: "Roboto", sans-serif;
`;
