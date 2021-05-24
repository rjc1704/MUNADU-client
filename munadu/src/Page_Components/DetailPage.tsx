import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../StyledComponents/button";
import { Photo } from "../StyledComponents/survey";
import martialImg from "../Images/taekwondo.svg";
import Star from "../Images/star.svg";
import CreateReview from "../Function_Components/DetailPage/CreateReview";
import { PageContainer } from "../Page_Components/SurveyPage";
import profileImg from "../Function_Components/DetailPage/temp.svg";
import editBtn from "../Function_Components/DetailPage/editBtn.svg";
import star from "../Function_Components/DetailPage/star.svg";
import bar from "../Function_Components/DetailPage/bar.svg";
import ReadReview from "../Function_Components/DetailPage/ReadReview";
import ReadComment from "../Function_Components/DetailPage/ReadComment";
import ReadLocation from "../Function_Components/DetailPage/ReadLocation";
import { useLocation } from "react-router";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 64%;
  min-height: 100vh;
`;

const MartialSummary = styled.div`
  width: 100%;
  min-height: 54%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2% auto;
`;

interface Itext {
  tabValue: number;
  idx: number;
}
const Text = styled.div<Itext>`
  margin-right: 5%;
  cursor: pointer;
  text-decoration: ${(props) => {
    if (props.tabValue === props.idx) {
      return "underline";
    } else return "none";
  }};
  color: ${(props) => {
    if (props.tabValue !== props.idx) return "#606060";
  }};
`;
const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 50%;
`;

interface IProps {
  martialId: number;
}


export default function DetailPage() {
  const [tabMenu, setTabMenu] = useState(0);
  const [isUnderline, setIsUnderline] = useState(0);
  const showReviewMenu = () => {
    setTabMenu(0);
  };
  const showCommentMenu = () => {
    setTabMenu(1);
  };
  const showLocationMenu = () => {
    setTabMenu(2);
  };
  const location = useLocation<IProps>();
  // ? history에서 받아온 props인 martialId 받아오는 방법
  const martialId = location.state.martialId;
  console.log(`martialId`, martialId);
  return (
    <PageContainer>
      <ContentContainer>
        <TextWrapper>무술 개요</TextWrapper>
        <MartialSummary></MartialSummary>
        <TextWrapper>
          <TextBox>
            <Text onClick={showReviewMenu} idx={0} tabValue={tabMenu}>
              사형의 조언
            </Text>
            <Text onClick={showCommentMenu} idx={1} tabValue={tabMenu}>
              무술 한줄평
            </Text>
            <Text onClick={showLocationMenu} idx={2} tabValue={tabMenu}>
              도장 위치
            </Text>
          </TextBox>
          <div>
            <CreateReview />
          </div>
        </TextWrapper>
        {tabMenu === 0 ? (
          <ReadReview martialId={martialId} />
        ) : tabMenu === 1 ? (
          <ReadComment />
        ) : (
          <ReadLocation />
        )}
      </ContentContainer>
    </PageContainer>
  );
}
