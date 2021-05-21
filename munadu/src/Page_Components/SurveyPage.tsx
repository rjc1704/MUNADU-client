import React, { useRef, useEffect, useLayoutEffect, useState, FC } from "react";
import styled, { StyledComponent } from "styled-components";
// import Header from "../StyledComponents/header";
import Button from "../StyledComponents/button";
import ServeyList from "../Function_Components/SurveyPage/SurveyList";
import SurveyList from "../Function_Components/SurveyPage/SurveyList";
import { createLogger } from "redux-logger";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import HalfBackground from "../StyledComponents/HalfBackground";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.color.grey};
  width: 100%;
  height: 100vh;
  padding-bottom: 7%;
`;

const SurveyBox = styled.div`
  width: ${(props) => props.theme.width.surveyBox};
  min-height: 57%;

  background: ${(props) => props.theme.color.grey};
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  margin: auto 0;
  z-index: 1;
`;
// 기본 margin 0으로 두고, margin-top = (전체높이 - box높이) /2 - headerHeight
export default function SurveyPage() {
  // const [boxHeight, setBoxHeight] = useState()
  const getBoxHeight = (height: number) => {};
  return (
    <PageContainer>
      <HalfBackground />
      <SurveyBox>
        <SurveyList></SurveyList>
      </SurveyBox>
    </PageContainer>
  );
}
