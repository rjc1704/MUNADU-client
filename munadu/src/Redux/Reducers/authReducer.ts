import dummy from "../authDummy.json";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

interface Istate {
  isLogin: boolean;
  accessToken: string;
}
interface IpayLoad {
  accessToken: string;
}

const authReducer = createSlice({
  name: "authReducer",
  initialState: dummy as Istate,
  reducers: {
    setAuth(state, action: PayloadAction<IpayLoad>) {
      state.isLogin = true;
      state.accessToken = action.payload.accessToken;
    },
    setNoAuth(state) {
      state.isLogin = false;
      state.accessToken = "";
    },
  },
});

export const { setAuth, setNoAuth } = authReducer.actions;

export default authReducer.reducer;
