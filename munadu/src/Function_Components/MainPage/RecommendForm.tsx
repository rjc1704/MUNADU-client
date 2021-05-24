import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MainPage from "../../Page_Components/MainPage";
import { getRank, getChannel } from "../../Redux/Reducers/martialRankReducer";
import { RootState } from "../../Redux/Store/store";

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #eeeeee;
`;
const MainPageBox = styled.div`
  display: flex;
  width: 64%;
  flex-direction: column;
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  height: 20vh;
  border: 1px;
  flex-direction: column;
`;
const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 90%;
  background-color: white;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const ContentsTitle = styled.div`
  margin: 2vh 0;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #1c1c1c;
`;

const DetailTitle = styled.div`
  margin-top: 2vh;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #000000;
`;

const DetailCaption = styled.div`
  font-family: Noto Sans KR Light;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #000000;
`;

const RecommendForm = () => {
  const rank = useSelector((state: RootState) => state.martialRankReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRank());
    dispatch(getChannel());
  }, []);

  return (
    <MainPageWrapper>
      <MainPageBox>
        <ContentsTitle>추천 무술</ContentsTitle>
        <ContentsWrapper>
          {rank.data.map((martial, idx) => {
            return (
              <Box key={idx}>
                <ContentCard>
                  <img src={martial.img} width="100%" height="90%" />
                </ContentCard>
                <DetailTitle>{martial.name}</DetailTitle>
                <DetailCaption>{martial.caption}</DetailCaption>
              </Box>
            );
          })}
        </ContentsWrapper>
      </MainPageBox>
    </MainPageWrapper>
  );
};

export default RecommendForm;
