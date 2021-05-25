import React, { useState } from "react";
import styled from "styled-components";
import UpdateReview from "./UpdateReview";

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40%;
  align-items: center;
  justify-content: space-evenly;
  width: 12%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  min-height: 4em;
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
}
export default function EditBtns({ reviewId, martialId }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const editReview = () => {
    console.log("들어왔다!");
    // return <UpdateReview id={reviewId} />;
    console.log(`review`, reviewId);
    setIsOpen(true);
  };
  return (
    <BtnsWrapper>
      <Text onClick={editReview}>조언 편집하기</Text>
      {isOpen ? (
        <UpdateReview reviewId={reviewId} martialId={martialId} />
      ) : null}
      <Hr></Hr>
      <Text>삭제하기</Text>
    </BtnsWrapper>
  );
}
