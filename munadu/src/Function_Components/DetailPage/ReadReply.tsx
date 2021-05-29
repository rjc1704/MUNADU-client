import React, { useEffect } from "react";
import styled from "styled-components";
import profileImg from "./temp.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import EditReply from "./EditReply";
import {
  createReply,
  getReplyList,
  updateReply,
  deleteReply,
} from "../../Redux/Reducers/replyReducer";
export const ReplyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #eeeeee;
  padding-top: 1em;
`;

export const ReplyDescBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 85%;
  padding: 0 1.3em 0.7em 1.3em;
  height: 7em;
  overflow-y: auto;
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

export const PhotoAndDesc = styled.div`
  display: flex;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

interface IProps {
  reviewId: number;
  deleteReplies: any;
}

export default function ReadReply({ reviewId, deleteReplies }: IProps) {
  const dispatch = useDispatch();
  const replyList = useSelector(
    (state: RootState) => state.replyReducer.replyList
  );
  const userId = useSelector((state: RootState) => state.authReducer.id);
  useEffect(() => {
    dispatch(getReplyList());
  }, [replyList.length]);

  return (
    <>
      {replyList.map((reply, idx) => {
        if (reply.Reviews_id === reviewId) {
          return (
            <ReplyWrapper key={idx}>
              <PhotoAndDesc>
                <PhotoWrapper>
                  <Photo4 src={profileImg}></Photo4>
                </PhotoWrapper>
                <ReplyDescBox>
                  <NickName>{reply.users.name}</NickName>
                  <ReplyText>{reply.comment}</ReplyText>
                  <ReplyDateAndAgain>
                    <div>{reply.createdAt.slice(0, 10)}</div>
                  </ReplyDateAndAgain>
                </ReplyDescBox>
              </PhotoAndDesc>
              <EditReply
                replyId={reply.id}
                userId={userId}
                replyUserId={reply.Users_id}
                deleteReplies={deleteReplies}
              />
            </ReplyWrapper>
          );
        }
      })}
    </>
  );
}
