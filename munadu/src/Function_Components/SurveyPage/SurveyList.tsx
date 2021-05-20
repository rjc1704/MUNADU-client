import styled from "styled-components";
import Button from "../../StyledComponents/button";
import React, { useState } from "react";
import SurveyJson from "./surveyContents.json";
import PropTypes from "prop-types";
import martialImage from "../../Images/taekwondo.svg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5% 5% 0 5%;
`;
const Question = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  line-height: 150%;
  min-height: 20%;
`;
const NewBtn = styled(Button)`
  min-width: 20%;
  margin-right: 0;
  margin-bottom: 3%;
`;
const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 0px;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  min-height: ${(props) => props.theme.height.surveyOptions};
  height: auto;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #fffbfb;
  margin-top: 1em;
  font-size: 1rem;
`;
const Hr = styled.hr`
  margin: 0;
`;
const DivAnswer = styled.div`
  margin: 0;
`;
const ProgressBarBox = styled.div`
  width: 100%;
  height: 2%;
  background: #c4c4c4;
  padding: 0;
  margin-bottom: 10px;
`;

type ProgressBarType = {
  idx: number;
};
const ProgressBar = styled.div<ProgressBarType>`
  width: calc(
    ${(props) => props.idx} / calc(${SurveyJson.surveys.length} - 1) * 100%
  );
  height: 100%;
  background: ${(props) => props.theme.color.black};
`;
const AnswerText = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
`;
const Input = styled.input`
  margin: 0 15px 0 15px;
  font-size: 2rem;
  transform: scale(1.5);
`;
const MartialBox = styled.div`
  display: flex;
  border-bottom: 1px solid #c4c4c4;
  padding: 10px;
`;
// ? border-bottom 은 props로 필터링된 배열의 length가 1개이거나 2개 이상일 때는 마지막 index는 props를 넣어서 border-bottom 설정하지말자.
const Photo = styled.img`
  width: 8%;
  height: auto;
  margin-right: 10px;
`;
const MartialTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export interface SurveyProps {
  resetHeight: number;
}
export default function SurveyList() {
  const [index, setIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const handleNext = () => {
    if (index <= 4) {
      setIndex(index + 1);
    } else {
      // 설문 결과창 출력!
      // alert("설문 결과를 표시합니다.");
      setIsShow(true);
    }
  };
  const moveToMain = () => {
    alert("메인 페이지로 이동합니다.");
  };
  const MartialName = styled.div`
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fontFamily.subFont};
    font-weight: 700;
  `;
  const MartialDescription = styled.div`
    font-size: 1rem;
    font-weight: 300;
    font-family: ${(props) => props.theme.fontFamily.subFont};
  `;
  return (
    <Div>
      <ProgressBarBox>
        <ProgressBar idx={index} />
      </ProgressBarBox>
      {(index / (SurveyJson.surveys.length - 1)) * 100 + " %"}
      {!isShow ? (
        <Question>{SurveyJson.surveys[index].question}</Question>
      ) : (
        <Question>당신에게 어울리는 2개의 무술을 찾았습니다.</Question>
      )}
      {!isShow ? (
        <OptionBox>
          <AnswerText>
            <Input type="checkbox"></Input>
            {SurveyJson.surveys[index].answers[0]}
          </AnswerText>
          <Hr></Hr>
          <AnswerText>
            <Input type="checkbox"></Input>
            {SurveyJson.surveys[index].answers[1]}
          </AnswerText>
          <Hr></Hr>
          <AnswerText>
            <Input type="checkbox"></Input>
            {SurveyJson.surveys[index].answers[2]}
          </AnswerText>
        </OptionBox>
      ) : (
        <OptionBox>
          <MartialBox>
            <Photo src={martialImage} />
            <MartialTextWrapper>
              <MartialName>태권도</MartialName>
              <MartialDescription>대한민국의 전통 무예</MartialDescription>
            </MartialTextWrapper>
          </MartialBox>
          <MartialBox>
            <Photo src={martialImage} />
            <MartialTextWrapper>
              <MartialName>태권도</MartialName>
              <MartialDescription>대한민국의 전통 무예</MartialDescription>
            </MartialTextWrapper>
          </MartialBox>
          <MartialBox>
            <Photo src={martialImage} />
            <MartialTextWrapper>
              <MartialName>태권도</MartialName>
              <MartialDescription>대한민국의 전통 무예</MartialDescription>
            </MartialTextWrapper>
          </MartialBox>
          <MartialBox>
            <Photo src={martialImage} />
            <MartialTextWrapper>
              <MartialName>태권도</MartialName>
              <MartialDescription>대한민국의 전통 무예</MartialDescription>
            </MartialTextWrapper>
          </MartialBox>
          <MartialBox>
            <Photo src={martialImage} />
            <MartialTextWrapper>
              <MartialName>태권도</MartialName>
              <MartialDescription>대한민국의 전통 무예</MartialDescription>
            </MartialTextWrapper>
          </MartialBox>
          <MartialBox>
            <Photo src={martialImage} />
            <MartialTextWrapper>
              <MartialName>태권도</MartialName>
              <MartialDescription>대한민국의 전통 무예</MartialDescription>
            </MartialTextWrapper>
          </MartialBox>
        </OptionBox>
      )}
      {!isShow ? (
        <BtnWrapper>
          <NewBtn onClick={handleNext}>다음</NewBtn>
        </BtnWrapper>
      ) : (
        <BtnWrapper>
          <NewBtn onClick={moveToMain}>모든 무술 둘러보기</NewBtn>
        </BtnWrapper>
      )}
    </Div>
  );
}
