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
  background-color: #e8f0fe;
  border: 2px solid #b7bfcc;
  padding-top: 0.3rem;
  outline: none;
  margin: 12px 0;
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

export const SpanError = styled.span`
  transition: 0.2s;
  position: absolute;
  opacity: ${({ error }) => (error ? "1" : "0")};
  top: ${({ error }) => (error ? "40px" : "50%")};
  left: 12rem;
  transform: translateY(-50%);
  color: #d24d57 !important;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;
