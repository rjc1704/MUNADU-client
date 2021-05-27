import styled from "styled-components";
import Header from "../../StyledComponents/header";
import Button from "../../StyledComponents/button";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setNoAuth, Istate } from "../../Redux/Reducers/authReducer";
import { setUser } from "../../Redux/Reducers/userReducer";

const HeaderBoard = styled.div`
  position: relative;
  z-index: 10;
`;
interface Icheck {
  login: boolean;
  signup: boolean;
}

export default function HeaderBar() {
  const isUser: Istate = useSelector((state: RootState) => {
    return state.authReducer;
  });
  console.log(`isUser`, isUser);
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
          {!isUser.isLogin ? (
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
                로그아웃
              </Button>
              <Button
                color="white"
                onClick={() => {
                  console.log(`isUser.id`, isUser.id);
                  dispatch(setUser(isUser.id));
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
