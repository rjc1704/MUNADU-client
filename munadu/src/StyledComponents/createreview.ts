import styled from "styled-components";
import Button from "../StyledComponents/button";

export const PhotoAndText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: auto;
`;

export const Photo = styled.img`
  width: 22%;
  height: auto;
`;
export const TextAndInput = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1%;
`;

export const MartialTitle = styled.div`
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 2.5rem;
`;
export const Nation = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1rem;
  margin-left: 10px;
  margin-bottom: 3px;
`;
export const Text = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1.25rem;
  font-weight: 700;
  min-width: 10rem;
`;

export const InputPeriod = styled.input`
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
export const InputAdvice = styled.textarea`
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
export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 150%;
  padding-top: 0;
`;
export const Div = styled.div`
  width: 100%;
  height: 100%;
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;
`;
export const ErrorMsg = styled.div`
  display: flex;
  justify-content: center;
  color: red;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontFamily.subFont};
  margin-top: 10px;
`;
export const NewBtn2 = styled(Button)`
  font-size: 1rem;
`;
