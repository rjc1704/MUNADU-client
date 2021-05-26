import styled from "styled-components";

export const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
  overflow: scroll;
  /* border: 15px solid red; */
`;
export const MainPageBox = styled.div`
  display: flex;
  width: 64%;
  flex-direction: column;
  padding-bottom: 300px;
`;
export const Box = styled.div`
  display: flex;
  width: 32%;
  /* border: 1px solid yellow; */
  flex-direction: column;
`;
export const ContentsWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
  justify-content: space-between;
`;

export const ContentCard = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 170px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const ContentsTitle = styled.div`
  margin-top: 2vh;
  margin-bottom: 1vh;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1c1c1c;
`;

export const DetailTitle = styled.div`
  margin-top: 2vh;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 29px;
  color: #000000;
`;

export const DetailCaption = styled.div`
  font-family: Noto Sans KR Light;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #000000;
`;
