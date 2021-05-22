import styled from "styled-components";
import Header from "../../StyledComponents/header";
import Button from "../../StyledComponents/button";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setNoAuth } from "../../Redux/Reducers/authReducer";

const HeaderBoard = styled.div`
  position: relative;
  z-index: 10;
`;
interface Icheck {
  login: boolean;
  signup: boolean;
}

export default function HeaderBar() {
  const isUser: boolean = useSelector((state: RootState) => {
    return state.authReducer.isLogin;
  });
  const [isCheck, setIsCheck] = useState<Icheck>({
    login: true,
    signup: false,
  });
  const history = useHistory();
  const dispatch = useDispatch();
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
                color={isCheck.login ? "white" : ""}
                onClick={() => {
                  setIsCheck({ signup: false, login: true });
                  history.push("/signinpage");
                }}
              >
                로그인
              </Button>
              <Button
                color={isCheck.signup ? "white" : ""}
                onClick={() => {
                  setIsCheck({ signup: true, login: false });
                  history.push("/signuppage");
                }}
              >
                회원가입
              </Button>
            </div>
          ) : (
            <div>
              <Button
                color=""
                onClick={() => {
                  dispatch(setNoAuth());
                  history.push("/");
                }}
              >
                로그 아웃
              </Button>
              <Button
                color="white"
                onClick={() => {
                  history.push("/mypage");
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
