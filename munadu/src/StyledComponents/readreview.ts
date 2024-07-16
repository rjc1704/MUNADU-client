import styled from "styled-components";
export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.color.white};

  height: auto;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding-left: 2%;
  padding-bottom: 7%;
`;

export const TotalCount = styled.div`
  display: flex;
  padding: 10px 0px;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #606060;
  border-bottom: 1px solid #eeeeee; ;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 27em;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 15px;
`;

export const NameAndDateAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const NameAndDate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1% 0;
`;

export const RatingsAndDesc = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  padding: 0 5%;
`;

export const Photo2 = styled.img`
  width: 15%;
  height: auto;
  margin-right: 10%;
`;

export const Name = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 500;
  color: #1c1c1c;
  min-width: 7em;
`;
export const Name4 = styled(Name)`
  line-height: 140%;
`;
export const Date = styled.div`
  min-width: 7em;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.25rem;
  color: #606060;
  margin-left: 5%;
`;
interface IStar {
  idx: number;
  score: number;
}
export const StarPhoto = styled.img<IStar>`
  width: 20%;
  height: auto;
  margin-right: 2%;
  filter: ${(props) => {
    if (props.idx > props.score) return "grayscale(100%)";
  }};
`;
export const StarWrapper = styled.div`
  display: flex;
`;
export const NameAndBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 15%;
`;

export const BarWrapper = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
`;
interface Ibar {
  idx: number;
  practicality: number;
}
export const BarPhoto = styled.img<Ibar>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.practicality) return "opacity(25%)";
  }};
`;
interface Ibar2 {
  idx: number;
  muscle: number;
}
export const BarPhoto2 = styled.img<Ibar2>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.muscle) return "opacity(25%)";
  }};
`;
interface Ibar3 {
  idx: number;
  difficulty: number;
}
export const BarPhoto3 = styled.img<Ibar3>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.difficulty) return "opacity(25%)";
  }};
`;
interface Ibar4 {
  idx: number;
  intensity: number;
}
export const BarPhoto4 = styled.img<Ibar4>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.intensity) return "opacity(25%)";
  }};
`;
interface Ibar5 {
  idx: number;
  injury: number;
}
export const BarPhoto5 = styled.img<Ibar5>`
  width: 20%;
  height: auto;
  margin-right: 2px;
  margin-top: 10%;
  filter: ${(props) => {
    if (props.idx > props.injury) return "opacity(25%)";
  }};
`;

export const Name2 = styled(Name)`
  font-weight: 700;
  margin-bottom: 3%;
`;

export const Name3 = styled(Name2)`
  margin-top: 3%;
`;
export const Photo3 = styled.img`
  width: 7%;
  height: auto;
  cursor: pointer;
  /* margin-right: 3%; */
`;
export const LayerBtn = styled.div`
  display: flex;
  align-items: center;
  width: 7%;
  height: 5%;
  margin-right: 0;
  position: inherit;
`;
