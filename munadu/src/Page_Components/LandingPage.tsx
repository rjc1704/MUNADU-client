import ReadCard from "../Function_Components/LandingPage/ReadCard";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Landing } from "../StyledComponents/Landing";
import { memo, useState, useEffect } from "react";
import { useHistory } from "react-router";
import Canvas from "../Function_Components/LandingPage/Canvas";
import Button from "../StyledComponents/button";
import HeaderBar from "../Function_Components/Common/HeaderBar";

export interface Icard {
  id: number;
  name: string;
  img: string;
}
interface Imartial {
  name: string;
  weapon: number;
  uniform: number;
  origin: number;
  sports: number;
  manner: number;
  attack: number;
  nation: string;
  caption: string;
  video: string;
  kcal: number;
  img: string;
  wiki: string;
}

function LandingPage() {
  const cards: any = useSelector((state: RootState) => {
    return state.martialReducer.result
      ? state.martialReducer.result.map((el: any) => {
          return {
            id: el.id,
            name: el.name,
            img: el.img,
          };
        })
      : null;
  });
  const [audio, setAudio] = useState<boolean>(false);
  const [select, setSelect] = useState(0);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [img, setImg] = useState<string>(cards[select].img);
  const history = useHistory();

  const [bgm] = useState(new Audio("/landingBgm.mp3"));
  useEffect(() => {
    bgm.addEventListener("ended", () => setAudio(false));
    return () => {
      bgm.removeEventListener("ended", () => setAudio(false));
    };
  }, []);

  const setBgm = () => {
    setAudio(!audio);
  };
  useEffect(() => {
    audio ? bgm.play() : bgm.pause();
  }, [audio]);

  const setCard = (key: number): void => {
    setIsLoad(false);
    setSelect(key - 1);
    const effect = new Audio("/button-45.mp3");
    effect.play();
  };
  useEffect(() => {
    setImg(cards[select].img);
  }, [select]);

  // const cards: any = useSelector((state: RootState) => {
  //   console.log(`state`, state);
  //   return state.martialReducer.result
  //     ? state.martialReducer.result.map((el: any) => {
  //         return {
  //           id: el.id,
  //           name: el.name,
  //           img: el.img,
  //         };
  //       })
  //     : null;
  // });

  return (
    <div>
      <HeaderBar></HeaderBar>
      <Landing.Board>
        <Landing.Guide>
          <Landing.Bgm isAudio={audio} onClick={setBgm}>
            {audio ? "OFF" : "BGM"}
          </Landing.Bgm>
          <Landing.Title>
            무나두
            <br />
            무술? 너도 할 수 있어!
          </Landing.Title>
          <Button
            onClick={() => {
              history.push("/surveypage");
            }}
          >
            설문 조사
          </Button>
          <Button
            onClick={() => {
              history.push("/mainpage");
            }}
          >
            시작 하기
          </Button>
        </Landing.Guide>
        {cards.map((el: any) => {
          if (el.id === select) {
            return <img className="landing_martial select" src={img}></img>;
          }
          return <img className="landing_martial" src="dummy.svg"></img>;
        })}
        <Landing.Name>{cards[select].name}</Landing.Name>
        <Landing.Base>
          <Landing.CardBoard>
            {cards.map((el: any, idx: number) => {
              if (select === idx) {
                return (
                  <ReadCard
                    key={idx}
                    card={el}
                    callback={setCard}
                    isClick={true}
                  ></ReadCard>
                );
              }
              return (
                <ReadCard
                  key={idx}
                  card={el}
                  callback={setCard}
                  isClick={false}
                ></ReadCard>
              );
            })}
          </Landing.CardBoard>
        </Landing.Base>
      </Landing.Board>
      <Canvas></Canvas>
    </div>
  );
}

export default memo(LandingPage);
