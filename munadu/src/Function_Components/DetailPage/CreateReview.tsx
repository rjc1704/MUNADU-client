import React, { useState, useEffect, ChangeEvent, FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-rating-component";
import styled from "styled-components";
import Button from "../../StyledComponents/button";
import Modal from "../Common/Modal";
import axios from "axios";
import { RootState } from "../../Redux/Store/store";
import martialImage from "../../Images/taekwondo.svg";
axios.defaults.withCredentials = true;
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
const StarWrapper = styled.div`
  font-size: 150%;
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
`;
// ! 테스트를 위해 임시로 기본값 1로 설정해뒀으니 추후 삭제해야함!
function CreateReview({ Martials_id = 1, Users_id = 1 }) {
  const [isModal, setIsModal] = useState(false);
  const [period, setPeriod] = useState(0);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [practicality, setPracticality] = useState(0);
  const [muscle, setMuscle] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [injury, setInjury] = useState(0);

  const handlePracticality = (newPracticality: number) => {
    setPracticality(newPracticality);
  };
  const handleScore = (newScore: number) => {
    setScore(newScore);
  };
  const handleMuscle = (newMuscle: number) => {
    setMuscle(newMuscle);
  };
  const handleIntensity = (newIntensity: number) => {
    setIntensity(newIntensity);
  };
  const handleInjury = (newInjury: number) => {
    setInjury(newInjury);
  };
  const handleDifficulty = (newDifficulty: number) => {
    setDifficulty(newDifficulty);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  const openModal = () => {
    setIsModal(true);
  };
  const setInitialState = () => {
    setPeriod(0);
    setComment("");
    setScore(0);
    setPracticality(0);
    setMuscle(0);
    setDifficulty(0);
    setIntensity(0);
    setInjury(0);
    setIsModal(false);
  };
  const accessToken = useSelector(
    (state: RootState) => state.authReducer.accessToken
  );
  const handlePeriod = (e: any) => {
    console.log(`period inputt`, e.target.value);
    setPeriod(e.target.value);
  };
  const handleComment = (e: any) => {
    console.log(`e.target.value`, e.target.value);
    setComment(e.target.value);
  };
  interface reviewProps {
    period: number;
    comment: string;
    score: number;
    practicality: number;
    muscle: number;
    difficulty: number;
    intensity: number;
    injury: number;
    Martials_id?: number;
    Users_id?: number;
  }
  const addReview = async () => {
    // 유효성 검사
    // 서버 통신
    try {
      const review: reviewProps = await axios.post(
        `${process.env.REACT_APP_API_URL}/review/create`,
        {
          period: period,
          comment: comment,
          score: score,
          practicality: practicality,
          muscle: muscle,
          difficulty: difficulty,
          intensity: intensity,
          injury: injury,
          Martials_id: Martials_id,
          Users_id: Users_id,
        },
        {
          headers: {
            // Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(`review`, review);
    } catch (err) {
      alert(err);
    }
    setInitialState();
  };
  useEffect(() => {
    console.log(`isModal`, isModal);
  }, [isModal]);

  return (
    <Div>
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
          <Form>
            <PhotoAndText>
              <Photo src={martialImage}></Photo>
              <MartialTitle>태권도</MartialTitle>
              <Nation>대한민국</Nation>
            </PhotoAndText>
            <TextAndInput>
              <Text>무술 총 평점</Text>
              <StarWrapper>
                <StarRatings
                  name="score"
                  starCount={5}
                  value={score}
                  onStarClick={handleScore}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>무술 수련 기간</Text>
              <InputPeriod
                type="number"
                min="0"
                max="99"
                placeholder="년"
                onChange={handlePeriod}
              ></InputPeriod>
            </TextAndInput>
            <TextAndInput>
              <Text>조언</Text>
              <InputAdvice
                onChange={handleComment}
                placeholder="무술을 수련하면서 느꼈던 장점과 단점 등을 적어주세요.&#13;&#10;후배들에게 도움을 줄 수 있습니다."
              ></InputAdvice>
            </TextAndInput>
            <TextAndInput>
              <Text>실전성</Text>
              <StarWrapper>
                <StarRatings
                  name="practicality"
                  starCount={5}
                  value={practicality}
                  onStarClick={handlePracticality}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>근육 발달</Text>
              <StarWrapper>
                <StarRatings
                  name="muscle"
                  starCount={5}
                  value={muscle}
                  onStarClick={handleMuscle}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>난이도</Text>
              <StarWrapper>
                <StarRatings
                  name="difficulty"
                  starCount={5}
                  value={difficulty}
                  onStarClick={handleDifficulty}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>운동 강도</Text>
              <StarWrapper>
                <StarRatings
                  name="intensity"
                  starCount={5}
                  value={intensity}
                  onStarClick={handleIntensity}
                />
              </StarWrapper>
            </TextAndInput>
            <TextAndInput>
              <Text>부상 확률</Text>
              <StarWrapper>
                <StarRatings
                  name="injury"
                  starCount={5}
                  value={injury}
                  onStarClick={handleInjury}
                />
              </StarWrapper>
            </TextAndInput>
          </Form>
        </Modal>
      ) : null}
    </Div>
  );
}

export default memo(CreateReview);
