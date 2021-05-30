import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import ReadReply from "./ReadReply";
import profileImg from "./temp.svg";
import editBtn from "./editBtn.svg";
import star from "./star.svg";
import bar from "./bar.svg";
import date from "date-and-time";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { getReviewList } from "../../Redux/Reducers/reviewReducer";
import {
  createReply,
  getReplyList,
  deleteReply,
  updateReply,
} from "../../Redux/Reducers/replyReducer";
import EditBtns from "./EditBtns";
import EditReview from "./EditReview";
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

export const CommentTextArea = styled.input`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  outline: none;
  resize: none;
  width: 90%;
  margin: 1% 0;
  padding: 1%;
  ::placeholder {
    color: #c4c4c4;
  }
`;

export const CommentBtn = styled.button<{
  width?: string;
  margin?: string;
  height?: string;
}>`
  /* align-self: flex-end; */

  cursor: pointer;
  background-color: ${(props) => {
    if (props.disabled) return `#C4C4C4`;
    else return props.theme.color.black;
  }};
  color: ${(props) => props.theme.color.white};
  padding: 7px;
  margin: 1% 2%;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.black};
  min-width: 5.5rem;
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
`;

export const ReplyBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const ReplyWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #eeeeee;
  padding-top: 1em;
`;

export const ReplyDescBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.3em 0.7em 1.3em;
`;

export const NickName = styled.div`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 700;
`;
export const ReplyTitle = styled(NickName)`
  font-size: 1.2rem;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const ReplyText = styled.p`
  width: 100%;
`;
export const ReplyDateAndAgain = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: #979797;
`;

export const Photo4 = styled.img`
  width: 3em;
`;

interface IProps {
  martialId: number;
}

export default function ReadReview({ martialId }: IProps) {
  const [comment, setComment] = useState("");
  const [reviewID, setReviewID] = useState(0);
  const dispatch = useDispatch();
  const replyInput = useRef<HTMLInputElement>(null);
  const reviewList = useSelector(
    (state: RootState) => state.reviewReducer.reviewList
  );
  const sortedReviewList = reviewList.slice().sort((a: any, b: any) => {
    const theADate = a.createdAt.slice(0, 10);
    const theATime = a.createdAt.slice(11, 19);
    const aDate = date.parse(`${theADate} ${theATime}`, "YYYY-MM-DD HH:mm:ss");
    const theBDate = b.createdAt.slice(0, 10);
    const theBTime = b.createdAt.slice(11, 19);
    const bDate = date.parse(`${theBDate} ${theBTime}`, "YYYY-MM-DD HH:mm:ss");
    return bDate.getTime() - aDate.getTime();
  });
  const deleteReplies = (replyId: number, accessToken: string) => {
    dispatch(deleteReply({ replyId, accessToken }));
  };
  const replyList = useSelector(
    (state: RootState) => state.replyReducer.replyList
  );
  const handleComment = async (e: any) => {
    await setComment(e.target.value);
  };
  const saveReivewId = (reviewId: number) => {
    setReviewID(reviewId);
  };
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  const userId = useSelector((state: RootState) => state.authReducer.id);
  const accessToken = useSelector(
    (state: RootState) => state.authReducer.accessToken
  );

  useEffect(() => {
    dispatch(getReviewList(martialId));
    dispatch(getReplyList());
  }, []);

  useEffect(() => {
    dispatch(getReplyList());
  }, [replyList.length]);

  const [selReviewId, setSelReviewId] = useState(0);
  const [selMartialId, setSelMartialId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openEditMenu = (reviewId: number, martialId: number) => {
    setSelReviewId(reviewId);
    setSelMartialId(martialId);
    setIsOpen(true);
  };
  const kebabRef = useRef<HTMLDivElement>(null);

  const resetComment = () => {
    setComment("");
  };

  return (
    <ReviewWrapper>
      <TotalCount>총 {sortedReviewList.length}개의 조언</TotalCount>
      {sortedReviewList.map((review, idx) => {
        return (
          <ReviewBox key={idx}>
            <NameAndDateAndBtn>
              <NameAndDate>
                <Photo2
                  src={`${process.env.REACT_APP_API_URL}${review.users.img}`}
                ></Photo2>

                <Name>{review.users.name}</Name>
                <Date>{review.updatedAt.slice(0, 10)}</Date>
              </NameAndDate>
              <EditReview
                userId={userId}
                reviewId={review.id}
                martialId={martialId}
                reviewUserId={review.Users_id}
              />
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

            <ReplyBox>
              <CommentTextArea
                placeholder={
                  isLogin
                    ? "사형의 조언에 댓글을 남겨보세요"
                    : "로그인 후 댓글을 남길 수 있습니다"
                }
                onChange={handleComment}
                onKeyUp={() => saveReivewId(review.id)}
                ref={replyInput}
                value={review.id === reviewID ? comment : ""}
                disabled={isLogin ? false : true}
              />
              <CommentBtn
                width="5%"
                disabled={isLogin ? false : true}
                onClick={async (e: any) => {
                  e.preventDefault();
                  await dispatch(
                    createReply({
                      comment,
                      userId,
                      reviewId: review.id,
                      accessToken,
                    })
                  );
                  resetComment();
                }}
              >
                등록
              </CommentBtn>
            </ReplyBox>

            {replyList.filter((reply) => reply.Reviews_id === review.id)
              .length > 0 ? (
              <div>
                <ReplyTitle>댓글</ReplyTitle>
                <ReadReply
                  reviewId={review.id}
                  deleteReplies={deleteReplies}
                ></ReadReply>
              </div>
            ) : null}
          </ReviewBox>
        );
      })}
    </ReviewWrapper>
  );
}
