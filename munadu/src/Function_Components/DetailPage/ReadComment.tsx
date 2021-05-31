import { useEffect } from "react";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { getCommentList } from "../../Redux/Reducers/commentReducer";
import styled from "styled-components";

import {
  NameAndDateAndBtn,
  NameAndDate,
  Photo2,
  Name,
} from "../../StyledComponents/readreview";
import {
  Comment,
  CommentBox,
  CommentDate,
  CommentHeader,
  CommentWrapper,
} from "../../StyledComponents/ReadComment";
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
  max-width: 100%;
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
  border-radius: 50%;
`;

export const PhotoAndDesc = styled.div`
  display: flex;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

// import profileImg from "./temp.svg";

interface IProps {
  martialId: number;
}
export default function ReadComment({ martialId }: IProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCommentList(martialId));
  }, []);
  const commentList = useSelector(
    (state: RootState) => state.commentReducer.data.commentList
  );

  return (
    <div>
      <CommentWrapper>
        <CommentHeader>총 {commentList.length}개의 한줄평</CommentHeader>
        <CreateComment martialId={martialId} />
        {commentList.map((comment, idx) => {
          return (
            <ReplyWrapper key={idx}>
              <PhotoAndDesc>
                <PhotoWrapper>
                  <Photo4
                    src={`${process.env.REACT_APP_API_URL}${comment.users.img}`}
                  ></Photo4>
                </PhotoWrapper>
                <ReplyDescBox>
                  <Name>{comment.users.name}</Name>
                  <ReplyText>{comment.comment}</ReplyText>
                  <CommentDate>{comment.updatedAt.slice(0, 10)}</CommentDate>
                </ReplyDescBox>
              </PhotoAndDesc>
              <EditComment
                commentUserId={comment.Users_id}
                commentId={comment.id}
                commentMartialId={comment.Martials_id}
                comment={comment.comment}
              />
            </ReplyWrapper>
          );
        })}
      </CommentWrapper>
    </div>
  );
}
