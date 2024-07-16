// import Modal from "../Common/Modal";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Common/Modal";
import StarRatings from "react-star-rating-component";
import {
  PhotoAndText,
  Photo,
  TextAndInput,
  MartialTitle,
  Nation,
  Text,
  InputPeriod,
  InputAdvice,
  StarWrapper,
  Div,
  Form,
  ErrorMsg,
  NewBtn2,
} from "../../StyledComponents/createreview";
import { RootState } from "../../Redux/Store/store";
import axios from "axios";
import martialJson from "../Common/martialData.json";
interface IProps {
  reviewId: number;
  martialId: number;
}
function UpdateReview({ reviewId, martialId }: IProps) {
  console.log("Update Review 들어왔어!");
  const [isModal, setIsModal] = useState(true);
  const [period, setPeriod] = useState(0);
  const [comment, setComment] = useState("");
  const [score, setScore] = useState(0);
  const [practicality, setPracticality] = useState(0);
  const [muscle, setMuscle] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [intensity, setIntensity] = useState(0);
  const [injury, setInjury] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  interface IMartial {
    id: number;
    name: string;
    weapon: number;
    uniform: number;
    origin: number;
    sports: number;
    attack: number;
    nation: string;
    caption: string;
    video: string;
    kcal: number;
    img: string;
    wiki: string;
  }
  const theMartial: IMartial = martialJson.martialData.filter(
    (martial) => martial.id === martialId
  )[0];
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
    setErrorMsg("");
  };
  const closeModal = () => {
    setInitialState();
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
  const updateReview = async () => {
    // 유효성 검사
    // 서버 통신
    if (
      !period ||
      !comment ||
      !score ||
      !practicality ||
      !muscle ||
      !difficulty ||
      !intensity ||
      !injury
    ) {
      setErrorMsg("모든 항목이 입력되어야 합니다.");
    } else {
      try {
        const review: reviewProps = await axios.put(
          `${process.env.REACT_APP_API_URL}/review/update`,
          {
            period: period,
            comment: comment,
            score: score,
            practicality: practicality,
            muscle: muscle,
            difficulty: difficulty,
            intensity: intensity,
            injury: injury,
            reviewId: reviewId,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        setInitialState();
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <Div>
      {isModal ? (
        <Modal
          close={closeModal}
          headerText={"조언 작성하기"}
          okBtnText={"확인"}
          cancelBtnText={"뒤로"}
          callback={updateReview}
          modalWidthPercent={38}
          modalHeightPercent={50}
        >
          <Form>
            <PhotoAndText>
              <Photo src={theMartial.img}></Photo>
              <MartialTitle>{theMartial.name}</MartialTitle>
              <Nation>{theMartial.nation}</Nation>
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
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </Form>
        </Modal>
      ) : null}
      ;
    </Div>
  );
}

export default UpdateReview;
