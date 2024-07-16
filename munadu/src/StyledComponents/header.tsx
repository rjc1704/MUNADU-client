import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4em;
  left: 0px;
  top: 0px;
  background: ${(props) => props.theme.color.black};
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 64%;
  height: 4em;
  background: ${(props) => props.theme.color.black};
`;
const HeaderLogo = styled.div`
  color: ${(props) => props.theme.color.white};
  font-family: ${(props) => props.theme.fontFamily.mainFont};
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
`;
const Header = {
  HeaderWrapper,
  HeaderBox,
  HeaderLogo,
};
export default Header;
