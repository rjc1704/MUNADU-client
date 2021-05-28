import React, { useEffect } from "react";
import styled from "styled-components";
import profileImg from "./temp.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import {
  createReply,
  getReplyList,
  updateReply,
  deleteReply,
} from "../../Redux/Reducers/replyReducer";
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
  reviewId: number;
}

export default function ReadReply({ reviewId }: IProps) {
  const dispatch = useDispatch();
  const replyList = useSelector(
    (state: RootState) => state.replyReducer.replyList
  );
  useEffect(() => {
    dispatch(getReplyList(reviewId));
  }, []);
  console.log(`replyList`, replyList);
  return (
    <>
      {replyList.map((reply) => {
        return (
          <ReplyWrapper>
            <Photo4 src={profileImg}></Photo4>
            <ReplyDescBox>
              <NickName>{reply.users.name}</NickName>
              <ReplyText>{reply.comment}</ReplyText>
              <ReplyDateAndAgain>
                <div>{reply.createdAt.slice(0, 10)}</div>
              </ReplyDateAndAgain>
            </ReplyDescBox>
          </ReplyWrapper>
        );
      })}
    </>
  );
}
