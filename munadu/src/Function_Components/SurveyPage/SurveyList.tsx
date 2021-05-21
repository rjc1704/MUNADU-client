import styled from "styled-components";
import Button from "../../StyledComponents/button";
import React, { useState, useRef, useEffect } from "react";
import SurveyJson from "./surveyContents.json";
import martialJson from "../Common/martialData.json";
import suggestedJson from "../Common/suggestedData.json";
import martialImage from "../../Images/taekwondo.svg";
import { useHistory } from "react-router";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 5% 5% 0 5%;
  max-height: 92vh;
`;
const OptionAndBtn = styled.div`
  width: 100%;
  max-height: 65vh;
  overflow: auto;
`;
const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  max-height: 10%;
  overflow: auto;
  background: #fffbfb;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
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
  background: ${(props) =>
    props.disabled ? "#C4C4C4" : props.theme.color.black};
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
  min-height: 50%;
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
  height: 5px;
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
  margin: 1em 0;
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
  cursor: pointer;
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

export default function SurveyList() {
  const [index, setIndex] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [answer0, setAnswer0] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [isInactive, setIsInactive] = useState(true);
  const [surveyResult, setSurveyResult] = useState<any>([]);
  const history = useHistory();
  const answer1Ref = useRef<HTMLInputElement>(null);
  const answer2Ref = useRef<HTMLInputElement>(null);
  const answer3Ref = useRef<HTMLInputElement>(null);

  const moveToDetailPage = () => {
    history.push("/detailpage");
  };
  const handleNext = () => {
    if (
      !answer1Ref.current?.checked &&
      !answer2Ref.current?.checked &&
      !answer3Ref.current?.checked
    ) {
      return;
    }

    if (answer0 && answer1 && answer2 && answer3 && answer4 && answer5) {
      let filterResult: any = [];
      switch (answer0) {
        case "0":
          filterResult = martialJson.martialData.filter(
            (martial) => martial.weapon === 0
          );
          console.log(`martialJson.martialData`, martialJson.martialData);
          break;
        case "1":
          filterResult = martialJson.martialData.filter(
            (martial) => martial.weapon === 1
          );
          break;
        case "2":
          filterResult = martialJson.martialData;
          break;
      }

      switch (answer1) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.uniform === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.uniform === 1
          );
          break;
        case "2":
          filterResult = filterResult.filter(
            (martial: any) => martial.uniform === 2
          );
          break;
      }
      switch (answer2) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.origin === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.origin === 1
          );
          break;
        case "2":
          break;
      }
      switch (answer3) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.sports === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.sports === 1
          );
          break;
        case "2":
          break;
      }
      switch (answer4) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.manner === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.manner === 1
          );
          break;
        case "2":
          break;
      }
      switch (answer5) {
        case "0":
          filterResult = filterResult.filter(
            (martial: any) => martial.attack === 0
          );
          break;
        case "1":
          filterResult = filterResult.filter(
            (martial: any) => martial.attack === 1
          );
          break;
        case "2":
          break;
      }
      console.log(`filterResult`, filterResult);
      setSurveyResult(filterResult);
    }

    if (index <= 4) {
      setIndex(index + 1);
      if (answer1Ref.current?.checked) answer1Ref.current.checked = false;
      if (answer2Ref.current?.checked) answer2Ref.current.checked = false;
      if (answer3Ref.current?.checked) answer3Ref.current.checked = false;
      setIsInactive(true);
    } else {
      // 설문 결과창 출력!
      setIsShow(true);
    }
  };
  const moveToMain = () => {
    history.push("/mainpage");
  };
  const check = (e: any) => {
    if (e.target.checked) {
      setIsInactive(false);
      console.log(`${index}번 문제에서 ${e.target.value}를 선택했습니다.`);
      if (index === 0) setAnswer0(e.target.value);
      if (index === 1) setAnswer1(e.target.value);
      if (index === 2) setAnswer2(e.target.value);
      if (index === 3) setAnswer3(e.target.value);
      if (index === 4) setAnswer4(e.target.value);
      if (index === 5) setAnswer5(e.target.value);
    } else {
      console.log("오류입니다.");
    }
  };
  useEffect(() => {
    console.log(`isInactive`, isInactive);
  }, [isInactive]);
  useEffect(() => {
    console.log(`surveyResult`, surveyResult);
  }, [surveyResult]);

  return (
    <Div>
      <ProgressBarBox>
        <ProgressBar idx={index} />
      </ProgressBarBox>
      {(index / (SurveyJson.surveys.length - 1)) * 100 + " %"}
      {!isShow ? (
        <Question>{SurveyJson.surveys[index].question}</Question>
      ) : (
        <Question>
          {surveyResult.length > 0
            ? `당신에게 어울리는 ${surveyResult.length}개의 무술을 찾았습니다.`
            : `아쉽지만 당신에 딱맞는 무술은 찾지 못했습니다. 이런 무술들은 어떠세요?`}
        </Question>
      )}
      <OptionAndBtn>
        {!isShow ? (
          <OptionBox>
            <AnswerText>
              <Input
                type="radio"
                value="0"
                name="chkInfo"
                onClick={check}
                ref={answer1Ref}
              ></Input>
              {SurveyJson.surveys[index].answers[0]}
            </AnswerText>
            <Hr></Hr>
            <AnswerText>
              <Input
                type="radio"
                value="1"
                name="chkInfo"
                onClick={check}
                ref={answer2Ref}
              ></Input>
              {SurveyJson.surveys[index].answers[1]}
            </AnswerText>
            <Hr></Hr>
            <AnswerText>
              <Input
                type="radio"
                value="2"
                name="chkInfo"
                onClick={check}
                ref={answer3Ref}
              ></Input>
              {SurveyJson.surveys[index].answers[2]}
            </AnswerText>
          </OptionBox>
        ) : surveyResult.length > 0 ? (
          <ResultBox>
            {surveyResult.map((martial: any, idx: number) => {
              return (
                <MartialBox key={idx} onClick={moveToDetailPage}>
                  <Photo src={martialImage} />
                  <MartialTextWrapper>
                    <MartialName>{martial.name}</MartialName>
                    <MartialDescription>{martial.caption}</MartialDescription>
                  </MartialTextWrapper>
                </MartialBox>
              );
            })}
          </ResultBox>
        ) : (
          <ResultBox>
            {suggestedJson.martialData.map((martial: any, idx: number) => {
              return (
                <MartialBox key={idx} onClick={moveToDetailPage}>
                  <Photo src={martialImage} />
                  <MartialTextWrapper>
                    <MartialName>{martial.name}</MartialName>
                    <MartialDescription>{martial.caption}</MartialDescription>
                  </MartialTextWrapper>
                </MartialBox>
              );
            })}
          </ResultBox>
        )}
        {!isShow ? (
          <BtnWrapper>
            <NewBtn onClick={handleNext} disabled={isInactive}>
              다음
            </NewBtn>
          </BtnWrapper>
        ) : (
          <BtnWrapper>
            <NewBtn onClick={moveToMain}>모든 무술 둘러보기</NewBtn>
          </BtnWrapper>
        )}
      </OptionAndBtn>
    </Div>
  );
}
