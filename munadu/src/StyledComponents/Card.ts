import styled, { keyframes } from "styled-components";

const highlight = keyframes`
100% {
  background-position: 0 0, 0 0;
  }
`;

export const Card = styled.div<{ background: string; isClick: boolean }>`
  background-image: url(${(props) => props.background});
  background-color: #282c34;
  background-size: 100% 100%;
  height: 100px;
  width: 70px;
  margin: ${(props) => (props.isClick ? "0px" : "5px")};
`;

export const SelectCard = styled.div`
  border: 5px solid transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(180deg, black, red 100%, cornflowerblue);
  width: 80px;
  background-repeat: no-repeat;
  background-size: 100% 100%, 100% 200%;
  background-position: 0 0, 0 100%;
  background-origin: padding-box, border-box;
  animation: ${highlight} 1s infinite alternate;
`;
