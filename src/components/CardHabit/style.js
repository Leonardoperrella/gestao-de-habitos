import styled from "styled-components";
import { AiFillEdit } from "react-icons/ai";

export const HabitItem = styled.div`
  border: 1px solid #000;
  width: 300px;
  margin: 10px auto;

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
    max-width: 159px;
    text-align: center;
    padding: 10px;
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

export const IconEdit = styled(AiFillEdit)`
  color: #fff;
  height: 27px;
  width: 115px;
  position: absolute;
  margin-top: 23px;
  margin-left: 229px;
`;
