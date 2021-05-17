import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../../StyledComponents/button";
// 별점 Input 받는 컴포넌트 제작 후 여기에 import 해서 사용해야함
import Modal from "../Common/Modal";
import axios from "axios";
import StarInput from "../Common/StarInput";

import martialImage from "../../Images/taekwondo.svg";
export default function CreateReview() {
  const [isModal, setIsModal] = useState(false);
  const closeModal = () => {
    setIsModal(false);
    console.log("모달창닫기 클릭!");
  };
  const openModal = () => {
    setIsModal(true);
  };
  const addReview = () => {
    alert("리뷰를 추가했습니다!");
  };
  useEffect(() => {
    console.log(`isModal`, isModal);
  }, [isModal]);

  const PhotoAndText = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: auto;
  `;

  const Photo = styled.img`
    width: 22%;
    height: auto;
  `;
  const TextAndInput = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 3.5%;
  `;

  const MartialTitle = styled.div`
    font-family: ${(props) => props.theme.fontFamily.mainFont};
    font-size: 1.5rem;
    font-weight: 900;
    margin-left: 2.5rem;
  `;
  const Nation = styled.div`
    font-family: ${(props) => props.theme.fontFamily.subFont};
    font-weight: 500;
    font-size: 1rem;
    margin-left: 10px;
    margin-bottom: 3px;
  `;
  const Text = styled.div`
    font-family: ${(props) => props.theme.fontFamily.subFont};
    font-size: 1.25rem;
    font-weight: 700;
    min-width: 10rem;
  `;

  const InputPeriod = styled.input`
    backgroud: ${(props) => props.theme.color.white};
    width: 9.25rem;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 5px;

    &::-webkit-input-placeholder {
      color: #606060;
      text-align: right;
      margin-right: 10px;
      font-family: ${(props) => props.theme.fontFamily.mainFont};
      font-weight: 400;
      font-size: 14px;
    }
  `;
  const InputAdvice = styled.textarea`
    backgroud: ${(props) => props.theme.color.white};
    width: 27.3rem;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 5px;
    height: 9.5em;
    overflow: auto;
    &::-webkit-input-placeholder {
      color: #606060;
      margin-right: 10px;
      font-family: ${(props) => props.theme.fontFamily.mainFont};
      font-weight: 400;
      font-size: 14px;
      padding: 10px;
      line-height: 150%;
    }
  `;

  return (
    <div>
      <Button onClick={openModal}>조언 작성하기</Button>
      {isModal ? (
        <Modal
          close={closeModal}
          headerText={"조언 작성하기"}
          okBtnText={"확인"}
          cancelBtnText={"뒤로"}
          callback={addReview}
          modalWidthPercent={38}
          modalHeightPercent={60}
        >
          <form>
            <PhotoAndText>
              <Photo src={martialImage}></Photo>
              <MartialTitle>태권도</MartialTitle>
              <Nation>대한민국</Nation>
            </PhotoAndText>
            <TextAndInput>
              <Text>무술 총 평점</Text>
              <StarInput />
            </TextAndInput>
            <TextAndInput>
              <Text>무술 수련 기간</Text>
              <InputPeriod type="text" placeholder="년"></InputPeriod>
            </TextAndInput>
            <TextAndInput>
              <Text>조언</Text>
              <InputAdvice
                placeholder="무술을 수련하면서 느꼈던 장점과 단점 등을 적어주세요.&#13;&#10;후배들에게 도움을 줄 수 있습니다."
              ></InputAdvice>
            </TextAndInput>
            <TextAndInput>
              <Text>실전성</Text>
              <StarInput />
            </TextAndInput>
            <TextAndInput>
              <Text>근육 발달</Text>
              <StarInput />
            </TextAndInput>
            <TextAndInput>
              <Text>난이도</Text>
              <StarInput />
            </TextAndInput>
            <TextAndInput>
              <Text>운동 강도</Text>
              <StarInput />
            </TextAndInput>
            <TextAndInput>
              <Text>부상 확률</Text>
              <StarInput />
            </TextAndInput>
          </form>
        </Modal>
      ) : null}
    </div>
  );
}
