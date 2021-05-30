import React, { useState } from "react";
import styled from "styled-components";
import UpdateReview from "./UpdateReview";
import DeleteReview from "./DeleteReview";

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
  reviewId: number;
  martialId: number;
  closeEditBtns: any;
}
export default function EditBtns({
  reviewId,
  martialId,
  closeEditBtns,
}: IProps) {
  console.log(`reviewId in EditBtns!!`, reviewId);
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const editReview = () => {
    console.log(`reviewId in updateReview!`, reviewId);
    setIsOpen(true);
  };
  const deleteReview = () => {
    console.log(`reviewId in deleteReview!`, reviewId);
    setIsDeleted(true);
  };
  return (
    <BtnsWrapper>
      <Text onClick={editReview}>조언 편집하기</Text>
      {isOpen ? (
        <UpdateReview
          reviewId={reviewId}
          martialId={martialId}
          closeEditBtns={closeEditBtns}
        />
      ) : null}
      <Hr></Hr>
      <Text onClick={deleteReview}>삭제하기</Text>
      {isDeleted ? <DeleteReview reviewId={reviewId} /> : null}
    </BtnsWrapper>
  );
}
