import styled from "styled-components";

export const Card = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  background-color: #282c34;
  background-size: 100% 100%;
  height: 100px;
  width: 70px;
`;

export const SetBoard = styled.div``;

export const SignBoard = styled.div`
  background: #eeeeee;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  padding: 41px;
  margin: 5% auto;
  height: 584px;
`;
export const SingBackground = styled.div`
  display: flex;
  width: 100vw;
  height: 100vw;
`;

export const Title = styled.h1``;

export const Alert = styled.div`
  margin-bottom: 10px;
  color: red;
`;
