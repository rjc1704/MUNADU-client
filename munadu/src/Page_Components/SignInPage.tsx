import { useRef, useState } from "react";
import InputForm from "../Function_Components/SignInPage/InputForm";
import styled from "styled-components";
import Button from "../StyledComponents/button";
import Inspect from "../Function_Components/SignInPage/Inspect";
import { useHistory } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  SingBackground,
  SignBoard,
  Title,
  Alert,
} from "../StyledComponents/sign";
import { setAuth } from "../Redux/Reducers/authReducer";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const emailRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const setEmailData = (e: any) => {
    setEmail(e.target.value);
  };
  const setPasswordData = (e: any) => {
    setPassword(e.target.value);
  };
  const logIn = async () => {
    if (email === "" || password === "") {
      setAlert("이메일과 비밀번호를 정상적으로 입력해주세요");
    } else {
      if (Inspect(email, "email") && Inspect(password, "password")) {
        dispatch(setAuth({ accessToken: "" }));
        // const loginData = await axios.post(
        //   `http://localhost:5000/user/singin`,
        //   { email: email, password: password },
        //   {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     withCredentials: true,
        //   }
        // );
        // if (loginData.data.data.accessToken) {
        //   setAuth(loginData.data.data.accessToken);
        //   setAlert("");
        //   history.push("/");
        // } else {
        //   setAlert("이메일과 비밀번호를 정상적으로 입력해주세요");
        // }
      } else {
        setAlert("이메일과 비밀번호를 정상적으로 입력해주세요");
      }
    }
  };
  return (
    <SingBackground>
      <SignBoard>
        <Title>로그인</Title>
        <InputForm
          name="이메일"
          type="text"
          ref={emailRef}
          callback={setEmailData}
        ></InputForm>
        <InputForm
          name="비밀번호"
          type="password"
          callback={setPasswordData}
        ></InputForm>
        <Alert>{alert}</Alert>
        <Button
          color="black"
          width="100%"
          margin="10px 0px"
          height="38px"
          onClick={logIn}
        >
          로그인
        </Button>
        <Button
          color="white"
          margin="10px 0px"
          width="100%"
          height="38px"
          onClick={() => {
            history.push("/signuppage");
          }}
        >
          계정이 없으신가요? <b>회원가입</b>
        </Button>
      </SignBoard>
    </SingBackground>
  );
}
