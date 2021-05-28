import React, { useEffect, useState } from "react";
import CreateComment from "./CreateComment";
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
                {/* {isLogin && review.Users_id === userId ? (
                <LayerBtn>
                  <Photo3
                    src={editBtn}
                    onClick={() => openEditMenu(review.id, martialId)}
                  ></Photo3>
                </LayerBtn>
              ) : null} */}
              </NameAndDateAndBtn>
              <Comment>{comment.comment}</Comment>
            </CommentBox>
          );
        })}
      </CommentWrapper>
    </div>
  );
}
