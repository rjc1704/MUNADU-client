import React, { useState } from "react";
import styled from "styled-components";
import UpdateReply from "./UpdateReply";
import DeleteReply from "./DeleteReply";

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-height: 4em;
  z-index: 3;
`;
const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;
const Hr = styled.hr`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
`;

interface IProps {
  replyId: number;
  deleteReplies: any;
}
export default function EditReplyBtns({ replyId, deleteReplies }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const editReply = () => {
    setIsOpen(true);
  };
  const deleteReply = () => {
    setIsDeleted(true);
  };
  return (
    <BtnsWrapper>
      <Text onClick={editReply}>댓글 편집하기</Text>
      {isOpen ? <UpdateReply replyId={replyId} /> : null}
      <Hr></Hr>
      <Text onClick={deleteReply}>삭제하기</Text>
      {isDeleted ? (
        <DeleteReply replyId={replyId} deleteReplies={deleteReplies} />
      ) : null}
    </BtnsWrapper>
  );
}
