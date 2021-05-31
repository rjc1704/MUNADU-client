import styled, { css } from "styled-components";
import { Box } from "./recommendForm";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: ${(props) => props.theme.color.grey};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;

  margin: 0;
`;

export const FilterMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0.7em 0;
`;
export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 7em;

  justify-content: space-evenly;
`;
export const DescRow = styled.div`
  display: flex;
`;
export const BoldText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1rem;
  font-weight: bold;
`;
interface ITest {
  idx: string;
  status: boolean;
}
export const NormalText = styled.div<ITest>`
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

export const MartialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  justify-items: center;

  /* justify-content: end; */
`;

export const Box2 = styled(Box)`
  width: 97%;
  margin-bottom: 20px;
`;
