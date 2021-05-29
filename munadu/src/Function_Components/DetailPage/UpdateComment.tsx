import { useState } from "react";
import Modal from "../Common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { CommentTextArea } from "../../StyledComponents/CreateComment";
import { updateComment } from "../../Redux/Reducers/commentReducer";

interface IProps {
  accessToken: string;
  commentId: number;
  comment: string;
  editSwitch: (toggle: boolean) => void;
  updateSwitch: (toogle: boolean) => void;
}
const UpdateComment = ({
  comment,
  accessToken,
  commentId,
  editSwitch,
  updateSwitch,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [curComment, setCurComment] = useState("");

  const handleComment = (e: any) => {
    setCurComment(e.target.value);
  };

  const closeModal = () => {
    setIsOpen(false);
    editSwitch(false);
    updateSwitch(false);
  };
  const dispatch = useDispatch();
  const commentList = useSelector(
    (state: RootState) => state.commentReducer.data.commentList
  );

  return (
    <>
      {isOpen ? (
        <Modal
          close={closeModal}
          headerText={"한줄평 수정"}
          okBtnText={"확인"}
          cancelBtnText={"뒤로"}
          callback={() => {
            dispatch(
              updateComment({
                accessToken,
                commentid: commentId,
                comment,
                curComment,
              })
            );
            setIsOpen(false);
            editSwitch(false);
            updateSwitch(false);
          }}
          modalWidthPercent={38}
          modalHeightPercent={50}
        >
          <CommentTextArea
            type="text"
            placeholder={comment}
            onChange={handleComment}
            value={curComment}
          ></CommentTextArea>
        </Modal>
      ) : null}
    </>
  );
};

export default UpdateComment;
