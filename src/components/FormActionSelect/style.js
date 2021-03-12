import styled from "styled-components";

export const ContainerSelect = styled.div`
  width: 300px;
`;

export const Select = styled.select`
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 3.5rem;

  font-size: 1rem;
  padding-left: 0.5rem;
  background-color: #f9f9f9;
  border: 2px solid #e8f0fe;
  padding-top: 0.3rem;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;

  background-image: url("./icons/seta-drop.svg");
  background-repeat: no-repeat;
  background-position: 270px center;
`;
