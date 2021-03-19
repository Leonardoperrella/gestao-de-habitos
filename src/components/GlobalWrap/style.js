import styled from "styled-components";

export const GlobalnWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 150px;
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: #252525;
    text-align: center;
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    max-width: 50%;
    max-height: 60%;
    min-width: 400px;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    background: rgba(255, 255, 255, 0.9);
    padding: 50px 30px;
  }
`;
