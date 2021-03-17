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
    margin: 2.4rem auto 1rem auto;
    font-family: Tungsten;
  }

  @media (min-width: 1024px) {
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: auto;
    background-color: white;
    padding: 20px;
  }
`;
