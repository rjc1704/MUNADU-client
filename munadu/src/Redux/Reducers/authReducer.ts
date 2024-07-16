import dummy from "../authDummy.json";
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface Istate {
  isLogin: boolean;
  accessToken: string;
  id: number;
  err: string;
}
interface IpayLoad {
  payload: {
    data: {
      data: { accessToken: string; id: number };
      message: string;
    };
  };
}
interface Ilogin {
  email: string;
  password: string;
}

export const setAuth = createAsyncThunk(
  "authReducer/setAuth",
  async ({ email, password }: Ilogin) => {
    return await axios.post(
      `http://localhost:5000/user/signin`,
      { email: email, password: password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

const authReducer = createSlice({
  name: "authReducer",
  initialState: dummy as Istate,
  reducers: {
    setNoAuth(state) {
      state.isLogin = false;
      state.accessToken = "";
    },
  },
  extraReducers: {
    [setAuth.pending.type]: (state) => {
      state.isLogin = false;
      state.err = "";
    },
    [setAuth.fulfilled.type]: (state, action: IpayLoad) => {
      state.isLogin = true;
      state.id = action.payload.data.data.id;
      state.accessToken = action.payload.data.data.accessToken;
    },
    [setAuth.rejected.type]: (state) => {
      state.isLogin = false;
      state.accessToken = "";
      state.err =
        "잘못된 이메일과 비밀번호를 입력하셨습니다. 다시 입력해주세요";
    },
  },
});

export const { setNoAuth } = authReducer.actions;

export default authReducer.reducer;
