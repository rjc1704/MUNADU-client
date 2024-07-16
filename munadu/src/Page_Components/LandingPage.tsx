import ReadCard from "../Function_Components/LandingPage/ReadCard";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Landing } from "../StyledComponents/Landing";
import styled from "styled-components";
import { memo, useState } from "react";
import { useHistory } from "react-router";
import Canvas from "../Function_Components/LandingPage/Canvas";
import axios from "axios";

export interface Icard {
  id: number;
  name: string;
  img: string;
}

const Button2: any = styled.button<{ background?: string }>`
  background: ${(props) => (props.background ? props.background : "#1c1c1c")};
  border-radius: 5px;
  color: #ffffff;
`;

function LandingPage() {
  const [select, setSelect] = useState(0);
  const history = useHistory();
  //
  const test = async () => {
    const data: any = await axios.get("http://localhost:5000/user/info/1", {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  };

  const setCard = (key: number): void => {
    setSelect(key);
    test();
  };

  const cards: Icard[] = useSelector((state: RootState) => {
    console.log(`state`, state);
    return state.martialReducer.data.map((el: any) => {
      return {
        id: el.id,
        name: el.name,
        img: el.img,
      };
    });
  });
  console.log(`cards`, cards);
  return (
    <div>
      <Landing.Board>
        <div>
          <Landing.Title>
            무나두
            <br />
            무술? 너도 할 수 있어!
          </Landing.Title>
          <Button2
            onClick={() => {
              history.push("/surveypage");
            }}
          >
            설문 조사
          </Button2>
          <Button2
            onClick={() => {
              history.push("/mainpage");
            }}
          >
            시작 하기
          </Button2>
        </div>
        <Landing.Img src={cards[select].img} />
        <Landing.Name>{cards[select].name}</Landing.Name>
        <Landing.CardBoard>
          {cards.map((el, idx: number) => {
            return <ReadCard key={idx} card={el} callback={setCard}></ReadCard>;
          })}
        </Landing.CardBoard>
      </Landing.Board>
      <Canvas></Canvas>
    </div>
  );
}

export default memo(LandingPage);
