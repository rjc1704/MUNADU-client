import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../StyledComponents/button";
import { Photo } from "../../StyledComponents/survey";
import martialImg from "../Images/taekwondo.svg";
import Star from "../Images/star.svg";
import profileImg from "./temp.svg";
import editBtn from "./editBtn.svg";
import star from "./star.svg";
import bar from "./bar.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { getReviewList } from "../../Redux/Reducers/reviewReducer";

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.color.white};

  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 2%;
`;

const TotalCount = styled.div`
  display: flex;
  padding: 10px 0px;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #606060;
  border-bottom: 1px solid #eeeeee; ;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 27em;
  border-bottom: 1px solid #eeeeee;
`;

const NameAndDateAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NameAndDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1% 0;
`;

const RatingsAndDesc = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  padding: 0 5%;
`;

const Photo2 = styled.img`
  width: 15%;
  height: auto;
  margin-right: 10%;
`;
const Photo3 = styled.img`
  width: 2%;
  height: 20%;
  margin-right: 3%;
`;
const Name = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #1c1c1c;
  min-width: 7em;
`;
const Name4 = styled(Name)`
  line-height: 140%;
`;
const Date = styled.div`
  min-width: 7em;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  color: #606060;
  margin-left: 5%;
`;
interface IStar {
  idx: number;
  score: number;
}
const StarPhoto = styled.img<IStar>`
  width: 20%;
  height: auto;
  margin-right: 2%;
  filter: ${(props) => {
    if (props.idx > props.score) return "grayscale(100%)";
  }};
`;
const StarWrapper = styled.div`
  display: flex;
`;
const NameAndBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 15%;
`;

const BarWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
`;
interface Ibar {
  idx: number;
  practicality: number;
}
const BarPhoto = styled.img<Ibar>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.practicality) return "opacity(25%)";
  }};
`;
interface Ibar2 {
  idx: number;
  muscle: number;
}
const BarPhoto2 = styled.img<Ibar2>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.muscle) return "opacity(25%)";
  }};
`;
interface Ibar3 {
  idx: number;
  difficulty: number;
}
const BarPhoto3 = styled.img<Ibar3>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.difficulty) return "opacity(25%)";
  }};
`;
interface Ibar4 {
  idx: number;
  intensity: number;
}
const BarPhoto4 = styled.img<Ibar4>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.intensity) return "opacity(25%)";
  }};
`;
interface Ibar5 {
  idx: number;
  injury: number;
}
const BarPhoto5 = styled.img<Ibar5>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.injury) return "opacity(25%)";
  }};
`;

const Name2 = styled(Name)`
  font-weight: 700;
  margin-bottom: 3%;
`;

const Name3 = styled(Name2)`
  margin-top: 3%;
`;
interface IProps {
  martialId: number;
}

export default function ReadReview({ martialId }: IProps) {
  console.log(`martialId In ReadReview!:`, martialId);
  const dispatch = useDispatch();
  const reviewList = useSelector(
    (state: RootState) => state.reviewReducer.reviewList
  );
  useEffect(() => {
    dispatch(getReviewList(martialId));
  }, []);
  useEffect(() => {});
  console.log(`reviewList`, reviewList);
  const [userName, setUserName] = useState("");
  return (
    <ReviewWrapper>
      <TotalCount>총 {reviewList.length}개의 조언</TotalCount>

      {reviewList.map((review) => {
        return (
          <ReviewBox>
            <NameAndDateAndBtn>
              <NameAndDate>
                <Photo2 src={profileImg}></Photo2>

                <Name>{review.users.name}</Name>
                <Date>{review.updatedAt.slice(0, 10)}</Date>
              </NameAndDate>
              <Photo3 src={editBtn}></Photo3>
            </NameAndDateAndBtn>
            <RatingsAndDesc>
              <Ratings>
                <StarWrapper>
                  <StarPhoto
                    src={star}
                    idx={1}
                    score={review.score}
                  ></StarPhoto>
                  <StarPhoto
                    src={star}
                    idx={2}
                    score={review.score}
                  ></StarPhoto>
                  <StarPhoto
                    src={star}
                    idx={3}
                    score={review.score}
                  ></StarPhoto>
                  <StarPhoto
                    src={star}
                    idx={4}
                    score={review.score}
                  ></StarPhoto>
                  <StarPhoto
                    src={star}
                    idx={5}
                    score={review.score}
                  ></StarPhoto>
                </StarWrapper>
                <NameAndBar>
                  <Name>실전성</Name>
                  <BarWrapper>
                    <BarPhoto
                      src={bar}
                      idx={1}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={2}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={3}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={4}
                      practicality={review.practicality}
                    ></BarPhoto>
                    <BarPhoto
                      src={bar}
                      idx={5}
                      practicality={review.practicality}
                    ></BarPhoto>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>근육 발달</Name>
                  <BarWrapper>
                    <BarPhoto2
                      src={bar}
                      idx={1}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={2}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={3}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={4}
                      muscle={review.muscle}
                    ></BarPhoto2>
                    <BarPhoto2
                      src={bar}
                      idx={5}
                      muscle={review.muscle}
                    ></BarPhoto2>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>난이도</Name>
                  <BarWrapper>
                    <BarPhoto3
                      src={bar}
                      idx={1}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={2}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={3}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={4}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                    <BarPhoto3
                      src={bar}
                      idx={5}
                      difficulty={review.difficulty}
                    ></BarPhoto3>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>운동 강도</Name>
                  <BarWrapper>
                    <BarPhoto4
                      src={bar}
                      idx={1}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={2}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={3}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={4}
                      intensity={review.intensity}
                    ></BarPhoto4>
                    <BarPhoto4
                      src={bar}
                      idx={5}
                      intensity={review.intensity}
                    ></BarPhoto4>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>부상 확률</Name>
                  <BarWrapper>
                    <BarPhoto5
                      src={bar}
                      idx={1}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={2}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={3}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={4}
                      injury={review.injury}
                    ></BarPhoto5>
                    <BarPhoto5
                      src={bar}
                      idx={5}
                      injury={review.injury}
                    ></BarPhoto5>
                  </BarWrapper>
                </NameAndBar>
              </Ratings>
              <Desc>
                <Name2>수련 기간</Name2>
                <Name>{review.period}년</Name>
                <Name3>조언</Name3>
                <Name4>{review.comment}</Name4>
              </Desc>
            </RatingsAndDesc>
          </ReviewBox>
        );
      })}
    </ReviewWrapper>
  );
}
