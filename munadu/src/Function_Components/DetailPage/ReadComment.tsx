import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import {
  createComment,
  getCommentList,
} from "../../Redux/Reducers/commentReducer";
import styled from "styled-components";
import {
  NameAndDateAndBtn,
  NameAndDate,
  Photo2,
  Name,
} from "../../StyledComponents/readreview";
import Button from "../../StyledComponents/button";
import profileImg from "./temp.svg";
import editBtn from "./editBtn.svg";
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.color.white};
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-bottom: 7%;
`;

const CommentHeader = styled.div`
  display: flex;
  padding: 10px 0px;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #606060;
  padding-left: 2%;
  border-bottom: 1px solid #eeeeee; ;
`;

const CommentCreateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 244px;
  border-bottom: 1px solid #eeeeee; ;
`;

const CommentBox = styled.div`
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 12em;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 15px;
`;

const Comment = styled.div`
  padding-left: 7%;
  font-family: Noto Sans KR Medium;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  min-height: 5em;
  line-height: 30px;
  color: #1c1c1c;
`;
const CommentDate = styled.div`
  min-width: 7em;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  color: #606060;
`;

const CommentTextArea = styled.textarea`
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  outline: none;
  resize: none;
  width: 80%;
  margin: 1% 0;
  align-content: center;
  padding: 1%;
  ::placeholder {
    color: #c4c4c4;
  }
`;

const CommentTitle = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 29px;
  color: #1c1c1c;
  align-self: flex-start;
  margin-left: 10%;
`;
const CommentBtn = styled.button<{
  color?: string;
  width?: string;
  margin?: string;
  height?: string;
}>`
  align-self: flex-end;
  margin-right: 10%;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "white"
      ? props.theme.color.white
      : props.theme.color.black};
  color: ${(props) =>
    props.color === "white"
      ? props.theme.color.black
      : props.theme.color.white};
  padding: 7px;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.black};
  min-width: 5.5rem;
  width: ${(props) => (props.width ? props.width : "")};
  height: ${(props) => (props.height ? props.height : "")};
`;

const CommentCaution = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 29px;
  color: #666666;
`;

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

  const getAuthInfo = useSelector((state: RootState) => state.authReducer);
  const [comment, setComment] = useState("");
  const { isLogin, accessToken, id } = getAuthInfo;

  const handleComment = (e: any) => {
    setComment(e.target.value);
  };
  console.log("랜더링 간다잇!");
  return (
    <div>
      <CommentWrapper>
        <CommentHeader>총 {commentList.length}개의 한줄평</CommentHeader>
        {isLogin ? (
          <CommentCreateBox>
            <CommentTitle>한줄평 남기기</CommentTitle>
            <CommentTextArea
              rows={4}
              placeholder={"무술과 관련된 한줄평을 남겨주세요."}
              onChange={handleComment}
            ></CommentTextArea>

            <CommentBtn
              color="black"
              width="5%"
              onClick={() => {
                dispatch(
                  createComment({
                    comment,
                    userid: id,
                    martialid: martialId,
                    accessToken,
                  })
                );
              }}
            >
              등록
            </CommentBtn>
          </CommentCreateBox>
        ) : (
          <CommentCreateBox>
            <CommentCaution>
              한줄평을 남기시려면 로그인 해주시기 바랍니다.
            </CommentCaution>
          </CommentCreateBox>
        )}

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
