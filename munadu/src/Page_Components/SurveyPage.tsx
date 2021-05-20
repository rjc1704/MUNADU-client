import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import styled, { StyledComponent } from "styled-components";
import Header from "../StyledComponents/header";
import Button from "../StyledComponents/button";
import ServeyList from "../Function_Components/SurveyPage/SurveyList";
import SurveyList from "../Function_Components/SurveyPage/SurveyList";
import { createLogger } from "redux-logger";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.color.grey};
  width: 100%;
  height: 100vh;
`;
type HalfProps = {
  headerHeight: number;
};
const HalfBackground = styled.div<HalfProps>`
  position: absolute;
  top: ${(props) => props.headerHeight}px;
  background: ${(props) => props.theme.color.black};
  width: 100%;
  height: 42.5vh;
`;
// ${(props) => props.theme.height.surveyBox};
const SurveyBox = styled.div`
  width: ${(props) => props.theme.width.surveyBox};
  min-height: 50%;
  height: auto;
  background: ${(props) => props.theme.color.grey};
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.07);
  margin: 0 0 0 0;
  z-index: 1;
`;
// 기본 margin 0으로 두고, margin-top = (전체높이 - box높이) /2 - headerHeight
export default function SurveyPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(64);
  useLayoutEffect(() => {
    if (headerRef.current !== null) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  });
  // console.log(
  //   `document.documentElement.clientHeight`,
  //   document.documentElement.clientHeight
  // );
  // const [boxHeight, setBoxHeight] = useState(229);
  // interface resetProps {
  //   resetHeight: (height:number) => void;
  // }
  // const resetHeight : resetProps= (height:number) => {
  //   setBoxHeight((document.documentElement.clientHeight - height) / 2);

  // };

  // const PageRef = useRef<HTMLDivElement>(null);
  // const SurveyBoxRef = useRef<HTMLDivElement>(null);
  return (
    <PageContainer>
      <Header.HeaderWrapper ref={headerRef}>
        <Header.HeaderBox>
          <Header.HeaderLogo>무나두</Header.HeaderLogo>
          <div>
            <Button>로그인</Button>
            <Button color={"white"}>회원가입</Button>
          </div>
        </Header.HeaderBox>
      </Header.HeaderWrapper>
      <HalfBackground headerHeight={headerHeight} />
      <SurveyBox>
        <SurveyList></SurveyList>
      </SurveyBox>
    </PageContainer>
  );
}
