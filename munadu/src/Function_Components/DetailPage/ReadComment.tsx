import { useEffect } from "react";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { getCommentList } from "../../Redux/Reducers/commentReducer";

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

import profileImg from "./temp.svg";

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
            <CommentBox key={idx}>
              <NameAndDateAndBtn>
                <NameAndDate>
                  <Photo2 src={profileImg}></Photo2>
                  <Name>{comment.users.name}</Name>
                  <CommentDate>{comment.updatedAt.slice(0, 10)}</CommentDate>
                </NameAndDate>
                <EditComment
                  commentUserId={comment.Users_id}
                  commentId={comment.id}
                  commentMartialId={comment.Martials_id}
                />
              </NameAndDateAndBtn>
              <Comment>{comment.comment}</Comment>
            </CommentBox>
          );
        })}
      </CommentWrapper>
    </div>
  );
}
