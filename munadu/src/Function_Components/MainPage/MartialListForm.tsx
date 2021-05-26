import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {
  ContentCard,
  ContentsTitle,
  DetailTitle,
  DetailCaption,
  Box,
} from "../../StyledComponents/recommendForm";
import martialJson from "../Common/martialData.json";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${(props) => props.theme.color.grey};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;

  margin: 0;
`;

const FilterMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 17%;
`;
const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: space-evenly;
`;
const DescRow = styled.div`
  display: flex;
`;
const BoldText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1rem;
  font-weight: bold;
`;
interface ITest {
  idx: string;
  status: boolean;
}
const NormalText = styled.div<ITest>`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1rem;
  font-weight: normal;
  margin-left: 1.2em;

  cursor: pointer;
  padding: 3px;

  ${(props) => {
    if (props.status === true) {
      return css`
        background-color: ${(props) => props.theme.color.black};
        border-radius: 10px;
        color: #eeeeee;
      `;
    } else {
      return css`
        color: #606060;
        border-radius: 0;
        background-color: none;
      `;
    }
  }}/* &:hover {
    background-color: ${(props) => props.theme.color.black};
    border-radius: 10px;
    color: #eeeeee;
  } */
`;

const MartialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  justify-items: center;

  /* justify-content: end; */
`;

const Box2 = styled(Box)`
  width: 97%;
  margin-bottom: 10px;
`;

const MartialListForm = () => {
  const [isHand, setIsHand] = useState(false);
  const [isWeapon, setIsWeapon] = useState(false);
  const [isHandAndWeapon, setIsHandAndWeapon] = useState(false);
  const [isDobok, setIsDobok] = useState(false);
  const [isFreebok, setIsFreebok] = useState(false);
  const [isUniform, setIsUniform] = useState(false);
  const [isAttack, setIsAttack] = useState(false);
  const [isGround, setIsGround] = useState(false);
  const [isMMA, setIsMMA] = useState(false);
  const [isEastern, setIsEastern] = useState(false);
  const [isWestern, setIsWestern] = useState(false);
  const [isSports, setIsSports] = useState(false);
  const [isNoSports, setIsNoSports] = useState(false);
  const [isCourtesy, setIsCourtesy] = useState(false);
  const [isFreedom, setIsFreedom] = useState(false);
  const handleHand = () => {
    setIsHand(!isHand);
  };
  const handleWeapon = () => {
    setIsWeapon(!isWeapon);
  };
  const handleHandAndWeapon = () => {
    setIsHandAndWeapon(!isHandAndWeapon);
  };
  const handleDobok = () => {
    setIsDobok(!isDobok);
  };
  const handleFreeBok = () => {
    setIsFreebok(!isFreebok);
  };
  const handleUniform = () => {
    setIsUniform(!isUniform);
  };
  const handleAttack = () => {
    setIsAttack(!isAttack);
  };
  const handleGround = () => {
    setIsGround(!isGround);
  };
  const handleMMA = () => {
    setIsMMA(!isMMA);
  };
  const handleEastern = () => {
    setIsEastern(!isEastern);
  };
  const handleWestern = () => {
    setIsWestern(!isWestern);
  };
  const handleSports = () => {
    setIsSports(!isSports);
  };
  const handleNoSports = () => {
    setIsNoSports(!isNoSports);
  };
  const handleCourtesy = () => {
    setIsCourtesy(!isCourtesy);
  };
  const handleFreedom = () => {
    setIsFreedom(!isFreedom);
  };

  return (
    <PageWrapper>
      <ContentWrapper>
        <FilterMenu>
          <FilterGroup>
            <DescRow>
              <BoldText>무기유무</BoldText>
              <NormalText idx={"q11"} onClick={handleHand} status={isHand}>
                맨손
              </NormalText>
              <NormalText idx={"q12"} onClick={handleWeapon} status={isWeapon}>
                무기
              </NormalText>
              <NormalText
                idx={"q13"}
                onClick={handleHandAndWeapon}
                status={isHandAndWeapon}
              >
                혼합
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>복장선호</BoldText>
              <NormalText idx={"q21"} onClick={handleDobok} status={isDobok}>
                도복
              </NormalText>
              <NormalText
                idx={"q22"}
                onClick={handleFreeBok}
                status={isFreebok}
              >
                자유복
              </NormalText>
              <NormalText
                idx={"q23"}
                onClick={handleUniform}
                status={isUniform}
              >
                유니폼
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>공격방식</BoldText>
              <NormalText idx={"q61"} onClick={handleAttack} status={isAttack}>
                타격
              </NormalText>
              <NormalText idx={"q62"} onClick={handleGround} status={isGround}>
                그라운드
              </NormalText>
              <NormalText idx={"q63"} onClick={handleMMA} status={isMMA}>
                종합
              </NormalText>
            </DescRow>
          </FilterGroup>
          <FilterGroup>
            <DescRow>
              <BoldText>기원국가</BoldText>
              <NormalText
                idx={"q31"}
                onClick={handleEastern}
                status={isEastern}
              >
                동양
              </NormalText>
              <NormalText
                idx={"q32"}
                onClick={handleWestern}
                status={isWestern}
              >
                서양
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>스포츠화</BoldText>
              <NormalText idx={"q41"} onClick={handleSports} status={isSports}>
                스포츠화 됨
              </NormalText>
              <NormalText
                idx={"q42"}
                onClick={handleNoSports}
                status={isNoSports}
              >
                스포츠화 안됨
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>예의강조</BoldText>
              <NormalText
                idx={"q51"}
                onClick={handleCourtesy}
                status={isCourtesy}
              >
                예의강조
              </NormalText>
              <NormalText
                idx={"q52"}
                onClick={handleFreedom}
                status={isFreedom}
              >
                자유로움
              </NormalText>
            </DescRow>
          </FilterGroup>
        </FilterMenu>
        <MartialWrapper>
          <Box2>
            <ContentCard>
              <img
                src={martialJson.martialData[0].img}
                width="100%"
                height="100%"
              />
            </ContentCard>
            <DetailTitle>{martialJson.martialData[0].name}</DetailTitle>
            <DetailCaption>{martialJson.martialData[0].caption}</DetailCaption>
          </Box2>
          <Box2>
            <ContentCard>
              <img
                src={martialJson.martialData[0].img}
                width="100%"
                height="100%"
              />
            </ContentCard>
            <DetailTitle>{martialJson.martialData[0].name}</DetailTitle>
            <DetailCaption>{martialJson.martialData[0].caption}</DetailCaption>
          </Box2>
          <Box2>
            <ContentCard>
              <img
                src={martialJson.martialData[0].img}
                width="100%"
                height="100%"
              />
            </ContentCard>
            <DetailTitle>{martialJson.martialData[0].name}</DetailTitle>
            <DetailCaption>{martialJson.martialData[0].caption}</DetailCaption>
          </Box2>
          <Box2>
            <ContentCard>
              <img
                src={martialJson.martialData[0].img}
                width="100%"
                height="100%"
              />
            </ContentCard>
            <DetailTitle>{martialJson.martialData[0].name}</DetailTitle>
            <DetailCaption>{martialJson.martialData[0].caption}</DetailCaption>
          </Box2>
        </MartialWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MartialListForm;
