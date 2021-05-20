import styled from "styled-components";
import Header from "../../StyledComponents/header";
import Button from "../../StyledComponents/button";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { useState } from "react";
import { useHistory } from "react-router";
const HeaderBoard = styled.div`
  position: relative;
  z-index: 10;
`;

export default function HeaderBar() {
  const isUser: boolean = useSelector((state: RootState) => {
    return state.authReducer.isLogin;
  });

  const [isCheck, setIsCheck] = useState(true);
  const history = useHistory();
  return (
    <HeaderBoard>
      <Header.HeaderWrapper>
        <Header.HeaderBox>
          <Header.HeaderLogo onClick={() => history.push("/")}>
            무나두
          </Header.HeaderLogo>
          {!isUser ? (
            <div>
              <Button
                color={isCheck ? "" : "white"}
                onClick={() => {
                  setIsCheck(false);
                  history.push("/signinpage");
                }}
              >
                로그인
              </Button>
              <Button
                color={isCheck ? "white" : ""}
                onClick={() => {
                  setIsCheck(true);
                  history.push("/signuppage");
                }}
              >
                회원가입
              </Button>
            </div>
          ) : (
            <div>
              <Button
                color={isCheck ? "" : "white"}
                onClick={() => {
                  setIsCheck(false);
                }}
              >
                로그 아웃
              </Button>
              <Button
                color={isCheck ? "white" : ""}
                onClick={() => {
                  setIsCheck(true);
                }}
              >
                내 정보
              </Button>
            </div>
          )}
        </Header.HeaderBox>
      </Header.HeaderWrapper>
    </HeaderBoard>
  );
}
