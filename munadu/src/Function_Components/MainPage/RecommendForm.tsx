import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MainPage from "../../Page_Components/MainPage";
import {
  getMartialRank,
  getChannel,
} from "../../Redux/Reducers/recommendReducer";
import { RootState } from "../../Redux/Store/store";
import RecommendMartial from "./RecommendMartial";
import RecommendReview from "./RecommendReview";
import {
  MainPageWrapper,
  MainPageBox,
} from "../../StyledComponents/recommendForm";

const RecommendForm = () => {
  return (
    <MainPageWrapper>
      <MainPageBox>
        <RecommendMartial />
        <RecommendReview />
      </MainPageBox>
    </MainPageWrapper>
  );
};

export default RecommendForm;
