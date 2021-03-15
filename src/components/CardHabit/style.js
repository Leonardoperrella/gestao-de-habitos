import styled from "styled-components";

export const HabitItem = styled.div`
  border: 1px solid #000;
  width: 90%;
  margin: 0 auto;

  background-color: #ff4654;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-family: "Roboto", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;

  h2 {
    margin-bottom: 7px;
  }

  p {
    margin: 5px;
    font-size: 0.875rem;
  }

  p:last-child {
    margin: 20px;
    font-size: 1.5rem;
  }
`;
