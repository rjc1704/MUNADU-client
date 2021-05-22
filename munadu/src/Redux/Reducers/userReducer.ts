import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAsyncThunk(
  "userReducer/setUser",
  async (id: number) => {
    return await axios.get(`${process.env.REACT_APP_API_URL}/user/info/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
  }
);

interface Istate {
  id: number;
  email: string;
  name: string;
  address?: string;
  img?: string;
}

interface IpayLoad {
  payload: {
    data: {
      id: number;
      name: string;
      email: string;
      img: string;
      address: string;
    };
    message: string;
  };
}

const userReducer = createSlice({
  name: "userReducer",
  initialState: {} as Istate,
  reducers: {},
  extraReducers: {
    [setUser.fulfilled.type]: (state, action: IpayLoad) => {
      console.log(`state`, current(state));
      state = action.payload.data;
    },
  },
});

export default userReducer.reducer;
