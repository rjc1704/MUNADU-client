import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

import profileImg from "./temp.svg";
import editBtn from "./editBtn.svg";
import star from "./star.svg";
import bar from "./bar.svg";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { getReviewList } from "../../Redux/Reducers/reviewReducer";
import EditBtns from "./EditBtns";
import {
  ReviewWrapper,
  TotalCount,
  ReviewBox,
  NameAndDateAndBtn,
  NameAndDate,
  RatingsAndDesc,
  Ratings,
  Desc,
  Photo2,
  Name,
  Name4,
  Date,
  StarPhoto,
  StarWrapper,
  NameAndBar,
  BarWrapper,
  BarPhoto,
  BarPhoto2,
  BarPhoto3,
  BarPhoto4,
  BarPhoto5,
  Name2,
  Name3,
  Photo3,
  LayerBtn,
} from "../../StyledComponents/readreview";

interface IProps {
  martialId: number;
}

export default function ReadReview({ martialId }: IProps) {
  console.log(`martialId In ReadReview!:`, martialId);
  const dispatch = useDispatch();
  const reviewList = useSelector(
    (state: RootState) => state.reviewReducer.reviewList
  );
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  const userId = useSelector((state: RootState) => state.authReducer.id);
  useEffect(() => {
    dispatch(getReviewList(martialId));
  }, []);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (kebabRef.current && !kebabRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
  });

  const [isOpen, setIsOpen] = useState(false);
  const openEditMenu = () => {
    setIsOpen(true);
  };
  const kebabRef = useRef<HTMLDivElement>(null);
  return (
    <ReviewWrapper>
      <TotalCount>총 {reviewList.length}개의 조언</TotalCount>

      {reviewList.map((review, idx) => {
        return (
          <ReviewBox key={idx}>
            <NameAndDateAndBtn>
              <NameAndDate>
                <Photo2 src={profileImg}></Photo2>

                <Name>{review.users.name}</Name>
                <Date>{review.updatedAt.slice(0, 10)}</Date>
              </NameAndDate>
              {isLogin && review.Users_id === userId ? (
                <LayerBtn ref={kebabRef}>
                  <Photo3 src={editBtn} onClick={openEditMenu}></Photo3>
                  {isOpen ? (
                    <EditBtns reviewId={review.id} martialId={martialId} />
                  ) : null}
                </LayerBtn>
              ) : null}
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
