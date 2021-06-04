import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../StyledComponents/button";
import axios from "axios";
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
import { RootState } from "../Redux/Store/store";
import DetailInfo from "../Function_Components/Common/DetailInfo";
import { Detail } from "../StyledComponents/detail";
import martialJson from "../Function_Components/Common/martialData.json";
import { useDispatch, useSelector } from "react-redux";
import { getAverage } from "../Redux/Reducers/avgReducer";
import HeaderBar from "../Function_Components/Common/HeaderBar";
import Header from "../StyledComponents/header";
import RadarChart from "../Function_Components/Common/RadarChart";
import Summary from "../Function_Components/DetailPage/Summary";
import backToTop from "../Images/backToTop.svg";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 64%;
  min-height: 100vh;
  height: auto;
  overflow: visible;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    width: 90%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2% auto;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    /* flex-direction: column; */
  }
`;

const StarPhoto = styled.img`
  width: 2em;
  height: auto;
  margin-right: 2%;
`;

interface Itext {
  tabValue: number;
  idx: number;
}
export const Text = styled.div<Itext>`
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
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
    margin: 10px 0;
  }
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 50%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    justify-content: space-between;
    width: 100%;
    margin: 10px 5px;
  }
`;

const PhotoAndDesc = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Photo = styled.img`
  width: 10%;
  height: auto;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 2.5em;
  height: 100%;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    margin-left: 1em;
  }
`;

const StarAndRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7em;
`;
const Rating = styled.div`
  color: #ffffff;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  margin-left: 0.5em;
`;

const TextsBox = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Texts = styled.div`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 900;
  color: #fbfbfb;
  margin-right: 0.5em;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
  }
`;
const SmallTexts = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1rem;
  color: #606060;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1rem;
  }
`;

const TagBox = styled.div`
  display: flex;
  margin-top: 1em;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    display: none;
  }
`;
const Tag = styled.div`
  display: flex;
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 5px;
  margin-right: 0.5em;
`;

const Board = styled.div`
  background: ${(props) => props.theme.color.black};
  display: flex;
  width: 100%;
`;

interface IProps {
  martialId: number;
}
const Div = styled.div`
  width: 100%;
`;
const TopBtn = styled.a`
  position: fixed;
  right: 5%;
  bottom: 2%;

  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    bottom: 7%;
    right: 3%;
  }
`;

export default function DetailPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [tabMenu, setTabMenu] = useState(0);

  const showReviewMenu = () => {
    setTabMenu(0);
  };
  const showCommentMenu = () => {
    setTabMenu(1);
  };
  const showLocationMenu = () => {
    setTabMenu(2);
  };
  const dispatch = useDispatch();
  const location = useLocation<IProps>();
  const martialId = location.state.martialId;

  const userId = useSelector((state: RootState) => state.authReducer.id);

  const theMartial = martialJson.martialData.filter(
    (martial) => martial.id === martialId
  )[0];
  const scoreAvg = useSelector((state: RootState) => state.avgReducer.scoreAvg);
  const survey = useSelector((state: RootState) => state.surveyReducer);
  const isLogin = useSelector((state: RootState) => state.authReducer.isLogin);
  const reviewList = useSelector(
    (state: RootState) => state.reviewReducer.reviewList
  );

  // console.log(`survey in SurveyList`, survey);
  const tags: string[] = [];
  switch (theMartial.weapon) {
    case 0:
      tags.push("맨손");
      break;
    case 1:
      tags.push("무기");
      break;
    case 2:
      tags.push("맨손&무기");
      break;
    case 3:
      break;
  }
  switch (theMartial.uniform) {
    case 0:
      tags.push("도복");
      break;
    case 1:
      tags.push("자유복");
      break;
    case 2:
      tags.push("유니폼");
      break;
    case 3:
      break;
  }
  switch (theMartial.origin) {
    case 0:
      tags.push("동양");
      break;
    case 1:
      tags.push("서양");
      break;
    case 2:
      break;
  }
  switch (theMartial.sports) {
    case 0:
      tags.push("스포츠화");
      break;
    case 1:
      tags.push("규칙자유");
      break;
    case 2:
      break;
  }
  switch (theMartial.manner) {
    case 0:
      tags.push("예의강조");
      break;
    case 1:
      tags.push("자유로운매너");
      break;
    case 2:
      break;
  }
  switch (theMartial.attack) {
    case 0:
      tags.push("타격위주");
      break;
    case 1:
      tags.push("그라운드위주");
      break;
    case 2:
      tags.push("타격&그라운드");
      break;
    case 3:
      break;
  }
  useEffect(() => {
    dispatch(getAverage(martialId));
  }, []);

  const scrollToTop = () => {
    console.log(``, window.scrollY); // global.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.scrollTo(0, 0);
    // document.getElementById("root")?.scrollTo(0, 0);
  };
  // useEffect(() => {
  //   console.log(`이거 실행됨`);
  //   window.addEventListener("scroll", scrollToTop);
  //   return () => window.removeEventListener("scroll", scrollToTop);
  // }, []);
  // useEffect(() => {
  //   // Button is displayed after scrolling for 500 pixels
  //   const toggleVisibility = () => {
  //     if (window.pageYOffset > 50) {
  //       console.log("스크롤이벤트200이상!");
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };
  //   window.addEventListener("scroll", toggleVisibility);

  //   return () => window.removeEventListener("scroll", toggleVisibility);
  // }, []);
  return (
    <>
      <PageContainer onScroll={scrollToTop}>
        <Div>
          <HeaderBar />
        </Div>
        <Board>
          <DetailInfo svg={theMartial.img}>
            <DescBox>
              <StarAndRating>
                <StarPhoto src={star} />
                <Rating>{Math.round(scoreAvg * 10) / 10}</Rating>
              </StarAndRating>
              <TextsBox>
                <Texts>{theMartial.name}</Texts>
                <SmallTexts>{theMartial.nation}</SmallTexts>
              </TextsBox>
              <TagBox>
                {tags.map((tag) => {
                  return <Tag>{tag}</Tag>;
                })}
              </TagBox>
            </DescBox>
          </DetailInfo>
        </Board>
        <ContentContainer>
          <TextWrapper>무술 개요</TextWrapper>
          <Summary martialId={martialId} />
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
              {isLogin ? (
                <CreateReview
                  Martials_id={martialId}
                  Users_id={userId}
                  tabValue={tabMenu}
                />
              ) : null}
            </div>
          </TextWrapper>
          {console.log(`martialId above Tab: `, martialId)}
          {tabMenu === 0 ? (
            <ReadReview martialId={martialId} />
          ) : tabMenu === 1 ? (
            <ReadComment martialId={martialId} />
          ) : (
            <ReadLocation martialId={martialId} />
          )}
        </ContentContainer>

        <TopBtn onClick={scrollToTop}>
          <img src={backToTop} />
        </TopBtn>
      </PageContainer>
    </>
  );
}
