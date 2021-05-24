import styled from "styled-components";

const img = styled.img`
  width: 100%;
  height: 100%;
`;
const board = styled.div`
  display: flex;
  margin: 0px auto 10px auto;
  width: 64%;
`;
const childrenBoard = styled.div``;
const imgBox = styled.div`
  width: 143px;
  height: 143px;
  border: 6px solid white;
`;

export const Detail = { img, board, childrenBoard, imgBox };
