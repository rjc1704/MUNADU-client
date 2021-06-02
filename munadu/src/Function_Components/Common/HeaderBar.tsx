import styled from "styled-components";
import Header from "../../StyledComponents/header";
import Button from "../../StyledComponents/button";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setNoAuth, Istate } from "../../Redux/Reducers/authReducer";
import { setUser } from "../../Redux/Reducers/userReducer";
import { useState } from "react";

const HeaderBoard = styled.div`
  position: relative;
  z-index: 10;
`;

export default function HeaderBar({ isCheck = true }: { isCheck?: boolean }) {
  const isUser: Istate = useSelector((state: RootState) => {
    return state.authReducer;
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <HeaderBoard>
      <Header.HeaderWrapper>
        <Header.HeaderBox>
          <Header.HeaderLogo onClick={() => history.push("/")}>
            <img src={"/munadoLogo.svg"} />
          </Header.HeaderLogo>
          {!isUser.isLogin ? (
            <>
              <Header.btnBoard>
                <Button
                  color={isCheck ? "white" : ""}
                  onClick={() => {
                    history.push("/signinpage");
                  }}
                >
                  로그인
                </Button>
                <Button
                  color={isCheck ? "" : "white"}
                  onClick={() => {
                    history.push("/signuppage");
                  }}
                >
                  회원가입
                </Button>
              </Header.btnBoard>
              <Header.hbgBtn
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <img src={isOpen ? "/exit.svg" : "/hamburger.svg"}></img>
              </Header.hbgBtn>
              <Header.hbgMenu isOpen={isOpen}>
                <Header.hbgMenuBtnBoard>
                  <Button
                    color={isCheck ? "white" : ""}
                    onClick={() => {
                      history.push("/signinpage");
                    }}
                  >
                    로그인
                  </Button>
                  <Button
                    color={isCheck ? "" : "white"}
                    onClick={() => {
                      history.push("/signuppage");
                    }}
                  >
                    회원가입
                  </Button>
                </Header.hbgMenuBtnBoard>
                <Header.hbgMenuBtn
                  onClick={() => {
                    history.push({
                      pathname: "/mainpage",
                      state: { select: true },
                    });
                  }}
                >
                  추천 무술
                </Header.hbgMenuBtn>
                <Header.hbgMenuBtn
                  onClick={() => {
                    history.push({
                      pathname: "/mainpage",
                      state: { select: false },
                    });
                  }}
                >
                  무술 전체 보기
                </Header.hbgMenuBtn>
              </Header.hbgMenu>
            </>
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
