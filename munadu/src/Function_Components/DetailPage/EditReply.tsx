import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import styled from "styled-components";
import editBtn from "./editBtn.svg";
import EditReplyBtns from "./EditReplyBtns";
import { Photo3, LayerBtn } from "../../StyledComponents/readreview";
import { deleteReply } from "../../Redux/Reducers/replyReducer";
interface IProps {
  replyId: number;
  userId: number;
  replyUserId: number;
  deleteReplies: any;
  reviseReply: any;
}

const EditWrapper = styled.div`
  position: absolute;
  width: 7em;
`;

export default function EditReply({
  replyId,
  userId,
  replyUserId,
  deleteReplies,
  reviseReply,
}: IProps) {
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const kebabRef = useRef<HTMLDivElement>(null);
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
      {isLogin && replyUserId === userId ? (
        <LayerBtn ref={kebabRef}>
          <Photo3 src={editBtn} onClick={() => setIsOpenEdit(true)}></Photo3>
          {isOpenEdit ? (
            <EditWrapper>
              <EditReplyBtns
                replyId={replyId}
                deleteReplies={deleteReplies}
                reviseReply={reviseReply}
              />
            </EditWrapper>
          ) : null}
        </LayerBtn>
      ) : null}
    </>
  );
}
