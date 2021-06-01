import styled from "styled-components";

const page = styled.div`
  overflow: auto;
  height: 100vh;
  background-color: #e5e5e5;
  display: block;
`;

const board = styled.div`
  background: ${(props) => props.theme.color.black};
  display: flex;
  padding-bottom: 11px;
  height: auto;
`;

const textBoard = styled.div`
  display: flex;
  margin: 33px 0px 0px 36px;
  font-weight: 800;
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  color: ${(props) => props.theme.color.white};
`;

const textContent = styled.div`
  margin: 80px 0px 0px 0px;
  font-size: 24px;
`;

const userProfile = styled.div`
  width: 100%;
  margin: 11px 0px;
  padding: 17px 48px;
  font-size: 20px;
  background-color: ${(props) => props.theme.color.white};
  div {
    display: flex;
    margin: 0px;
    p {
      margin: 10px 0px;
    }
  }
`;

const userInfo = styled.p`
  font-weight: bold;
  width: 90px;
`;

const contentBoard = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0px;
`;

const baseInfo = styled.div`
  button {
    float: right;
    margin-top: -55px;
  }
`;

const setBoard = styled.div`
  width: 64%;
  margin: 0px auto;
`;

const imgInput = styled.input`
  display: none;
`;
const imgLabel = styled.label`
  cursor: pointer;
`;

const content = styled.div`
  width: 48%;
  min-width: 400px;
  border: 2px solid #c4c4c4;
  padding: 10px;
  margin: 40px auto 0px 0px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
const errMessage = styled.p`
  color: red;
`;

const title = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  margin-left: 5px;
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
`;

const subTitle = styled.p`
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  border-bottom: 1px solid #eeeeee;
  margin: 10px 0px 15px 0px;
  padding-bottom: 5px;
`;

const buttonPosition = styled.div`
  display: flex;
  justify-content: center;
`;

const addressBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  margin: 7px 0px;
`;

const imgBox = styled.div`
  margin-left: 20px;
`;

const guideText = styled.p`
  text-align: center;
`;

export const MyPageStyle = {
  board,
  textBoard,
  textContent,
  page,
  contentBoard,
  setBoard,
  imgInput,
  imgLabel,
  content,
  errMessage,
  title,
  buttonPosition,
  subTitle,
  userProfile,
  userInfo,
  baseInfo,
  guideText,
  imgBox,
  addressBox,
};
