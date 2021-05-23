import styled from "styled-components";

const page = styled.div``;

const board = styled.div`
  background: ${(props) => props.theme.color.black};
  display: flex;
`;

const textBoard = styled.div`
  display: flex;
  margin: 33px 0px 0px 36px;
  font-weight: 800;
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  color: ${(props) => props.theme.color.white};
`;

const textContent = styled.div`
  margin-left: 5px;
`;

const contentBoard = styled.div`
  display: flex;
`;

export const MyPageStyle = {
  board,
  textBoard,
  textContent,
  page,
  contentBoard,
};
