import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../Redux/Reducers/reviewReducer";
import { RootState } from "../../Redux/Store/store";

interface IProps {
  reviewId: number;
}
export default function DeleteReview({ reviewId }: IProps) {
  const accessToken = useSelector(
    (state: RootState) => state.authReducer.accessToken
  );
  const dispatch = useDispatch();
  dispatch(deleteReview({ reviewId, accessToken }));
  return <span></span>;
}
