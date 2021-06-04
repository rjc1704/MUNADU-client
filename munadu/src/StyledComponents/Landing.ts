import styled from "styled-components";

const Board = styled.div`
  position: relative;
  z-index: 4;
  margin-top: -300px;
`;
//
const CardBoard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  z-index: 1;
  width: 66%;
  margin: 0px auto;
`;

const Title = styled.p`
  font-size: 50px;
  color: ${(props) => props.theme.color.white};
  z-index: 1;
  margin-top: 120px;
`;

const Name = styled.p`
  position: relative;
  color: white;
  z-index: 1;
  margin-top: 65vh;
  margin-left: 25vw;
  font-size: 50px;
  z-index: 4;
`;

const Base = styled.div`
  display: flex;
`;

const Guide = styled.div`
  position: absolute;
  right: 20%;
  top: -280px;
  z-index: 5;
`;
const Bgm = styled.div<{ isAudio: boolean }>`
  color: ${(props) => (props.isAudio ? "green" : props.theme.color.white)};
  border: 1px solid
    ${(props) => (props.isAudio ? "green" : props.theme.color.white)};

  width: 50px;
  text-align: center;
  border-radius: 10px;
  padding: 4px;
  margin: 0px 0px 50px 0px;
  float: right;
  cursor: pointer;
`;

export const Landing = {
  Board,
  CardBoard,
  Title,
  Name,
  Base,
  Guide,
  Bgm,
};
