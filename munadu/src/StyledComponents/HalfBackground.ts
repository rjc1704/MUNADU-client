import styled, { StyledComponent } from "styled-components";

type HalfProps = {
  headerHeight?: number;
};
const HalfBackground = styled.div<HalfProps>`
  position: absolute;
  top: ${(props) => props.headerHeight || 4}em;
  background: ${(props) => props.theme.color.black};
  width: 100%;
  height: 42.5vh;
`;

export default HalfBackground;
