import React from "react";

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

const Text = styled.div`
  margin-right: 5%;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 50%;
`;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.color.white};
  min-height: 30em;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 2%;
`;

const TotalCount = styled.div`
  display: flex;
  padding: 10px 0px;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #606060;
  border-bottom: 1px solid #eeeeee; ;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 60em;
`;

const NameAndDateAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NameAndDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1% 0;
`;

const RatingsAndDesc = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  padding: 0 5%;
`;

const Photo2 = styled.img`
  width: 15%;
  height: auto;
  margin-right: 10%;
`;
const Photo3 = styled.img`
  width: 2%;
  height: 20%;
  margin-right: 3%;
`;
const Name = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #1c1c1c;
  min-width: 7em;
`;
const Name4 = styled(Name)`
  line-height: 140%;
`;
const Date = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  color: #606060;
  margin-left: 5%;
`;
const StarPhoto = styled.img`
  width: 20%;
  height: auto;
  margin-right: 2%;
`;
const StarWrapper = styled.div`
  display: flex;
`;
const NameAndBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 15%;
`;

const BarWrapper = styled.div`
  display: flex;
`;
const BarPhoto = styled.img`
  width: 20%;
  height: auto;
  margin-right: 0.5%;
  margin-top: 10%;
`;

const Name2 = styled(Name)`
  font-weight: 700;
  margin-bottom: 3%;
`;

const Name3 = styled(Name2)`
  margin-top: 3%;
`;


export default function DetailPage() {
  return (
    <PageContainer>
      <ContentContainer>
        <TextWrapper>무술 개요</TextWrapper>
        <MartialSummary></MartialSummary>
        <TextWrapper>
          <TextBox>
            <Text>사형의 조언</Text>
            <Text>무술 한줄평</Text>
            <Text>도장 위치</Text>
          </TextBox>
          <div>
            <CreateReview />
          </div>
        </TextWrapper>
        <ReviewWrapper>
          <TotalCount>총 30개의 조언</TotalCount>
          <ReviewBox>
            <NameAndDateAndBtn>
              <NameAndDate>
                <Photo2 src={profileImg}></Photo2>
                <Name>별내동마크헌트</Name>
                <Date>2021.05.12</Date>
              </NameAndDate>
              <Photo3 src={editBtn}></Photo3>
            </NameAndDateAndBtn>
            <RatingsAndDesc>
              <Ratings>
                <StarWrapper>
                  <StarPhoto src={star}></StarPhoto>
                  <StarPhoto src={star}></StarPhoto>
                  <StarPhoto src={star}></StarPhoto>
                  <StarPhoto src={star}></StarPhoto>
                  <StarPhoto src={star}></StarPhoto>
                </StarWrapper>
                <NameAndBar>
                  <Name>실전성</Name>
                  <BarWrapper>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>근육 발달</Name>
                  <BarWrapper>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>난이도</Name>
                  <BarWrapper>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>운동 강도</Name>
                  <BarWrapper>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                  </BarWrapper>
                </NameAndBar>
                <NameAndBar>
                  <Name>부상 확률</Name>
                  <BarWrapper>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                    <BarPhoto src={bar}></BarPhoto>
                  </BarWrapper>
                </NameAndBar>
              </Ratings>
              <Desc>
                <Name2>수련 기간</Name2>
                <Name>수련 기간</Name>
                <Name3>조언</Name3>
                <Name4>
                  굳세게 행복스럽고 같이, 웅대한 뿐이다. 충분히 들어 방황하여도,
                  뛰노는 피고 많이 두기 힘있다. 때까지 피고, 커다란 아름답고
                  끓는 주는 봄날의 칼이다. 방황하였으며, 것이다.보라, 소금이라
                  주며, 실현에 것이다. 찾아다녀도, 사랑의 꾸며 생명을 얼마나
                  시들어 찾아 앞이 고행을 있으랴? 생의 불어 소리다.이것은 그들은
                  풀이 힘있다. 그들의 사랑의 커다란 거선의 위하여서 위하여서.
                  심장의 이것은 사랑의 이상, 가슴이 하는 인간의 있다. 피어나는
                  하여도 투명하되 과실이 하였으며, 싸인 그리하였는가?
                </Name4>
              </Desc>
            </RatingsAndDesc>
          </ReviewBox>
        </ReviewWrapper>
      </ContentContainer>
    </PageContainer>
  );
}
