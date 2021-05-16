import React from "react";
import Header from "../StyledComponents/header";
import Button from "../StyledComponents/button";
import styled from "styled-components";

export default function LandingPage() {
  const PageContainer = styled.div`
    background: ${(props) => props.theme.color.grey};
    width: 100%;
    height: 100vh;
  `;
  return (
    <PageContainer>
      <Header.HeaderWrapper>
        <Header.HeaderBox>
          <Header.HeaderLogo>무나두</Header.HeaderLogo>
          <div>
            <Button>로그인</Button>
            <Button color={"white"}>회원가입</Button>
          </div>
        </Header.HeaderBox>
      </Header.HeaderWrapper>
      <div>랜딩페이지 입니다.</div>
    </PageContainer>
  );
}
