import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import styled from "styled-components";
import editBtn from "./editBtn.svg";
import EditBtns from "./EditBtns";
import { Photo3, LayerBtn } from "../../StyledComponents/readreview";

const EditWrapper = styled.div`
  position: absolute;
  width: 7em;
`;
interface IProps {
  userId: number;
  reviewId: number;
  martialId: number;
  reviewUserId: number;
}
export default function EditReview({
  userId,
  reviewId,
  martialId,
  reviewUserId,
}: IProps) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const kebabRef = useRef<HTMLDivElement>(null);
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  useEffect(() => {
    const handleClick = (e: any) => {
      if (kebabRef.current && !kebabRef.current.contains(e.target)) {
        setIsOpenEdit(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
  });
  return (
    <>
      {isLogin && reviewUserId === userId ? (
        <LayerBtn ref={kebabRef}>
          <Photo3
            src={editBtn}
            // onClick={() => openEditMenu(review.id, martialId)}
            onClick={() => setIsOpenEdit(true)}
          ></Photo3>
          {isOpenEdit ? (
            <EditWrapper>
              <EditBtns reviewId={reviewId} martialId={martialId} />
            </EditWrapper>
          ) : null}
        </LayerBtn>
      ) : null}
    </>
  );
}
