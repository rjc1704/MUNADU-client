import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getReviewRank } from "../../Redux/Reducers/recommendReducer";
import { RootState } from "../../Redux/Store/store";
import {
  Box,
  ContentCard,
  ContentsTitle,
  ContentsWrapper,
  DetailTitle,
  DetailCaption,
} from "../../StyledComponents/recommendForm";
import RadarChart from "../Common/RadarChart";

const ContentHeader = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
`;
const ContentDetail = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
`;
const ContentHeaderName = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #000000;
  margin-left: 3%;
`;
const CommentBox = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.size || "50%"};
`;

const ChartBox = styled.div`
  width: 50%;
  padding: 3%;
`;

const CommentHeader = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommentTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  color: #1c1c1c;
`;
const CommentDate = styled.div`
  margin-left: 2%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #606060;
`;
const CommentDetail = styled.div`
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #1c1c1c;
`;

const RecommendReview = () => {
  const reviewRank = useSelector(
    (state: RootState) => state.recommendReducer.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviewRank());
  }, []);

  return (
    <>
      <ContentsTitle>사형의 조언</ContentsTitle>
      <ContentsWrapper>
        {reviewRank.review.map((review, idx) => {
          return (
            <Box key={idx}>
              <ContentCard>
                <ContentHeader>
                  <ContentHeaderName>{review.martials.name}</ContentHeaderName>
                </ContentHeader>
                <ContentDetail>
                  <ChartBox>
                    <RadarChart
                      label={[
                        "실전성",
                        "근육 발달",
                        "난이도",
                        "운동 강도",
                        "부상 확률",
                      ]}
                      data={[
                        review.practicality,
                        review.muscle,
                        review.difficulty,
                        review.intensity,
                        review.injury,
                      ]}
                      width={10}
                      height={10}
                      displayScales={false}
                    ></RadarChart>
                  </ChartBox>
                  <CommentBox size="50%">
                    <CommentHeader>
                      <CommentTitle>{review.users.name}</CommentTitle>
                      <CommentDate>{review.createdAt.slice(0, 10)}</CommentDate>
                    </CommentHeader>
                    <CommentDetail>{review.comment}</CommentDetail>
                  </CommentBox>
                </ContentDetail>
              </ContentCard>
            </Box>
          );
        })}
      </ContentsWrapper>
    </>
  );
};

export default RecommendReview;
