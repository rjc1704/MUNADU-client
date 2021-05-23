import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import dummy from "../userDummy.json";
import axios from "axios";

export const setUser = createAsyncThunk(
  "userReducer/setUser",
  async (id: number) => {
    console.log(`id 들어오고 있다`, id);
    try {
      return await axios.get(
        `${process.env.REACT_APP_API_URL}/user/info/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(`e`, e);
    }
  }
);

export interface Istate {
  id: number;
  email: string;
  name: string;
  address?: string | null;
  img?: string;
}

interface IpayLoad {
  payload: {
    data: {
      data: {
        id: number;
        name: string;
        email: string;
        img: string;
        address: string | null;
      };
      message: string;
    };
  };
}

const userReducer = createSlice({
  name: "userReducer",
  initialState: dummy as Istate,
  reducers: {},
  extraReducers: {
    [setUser.fulfilled.type]: (state, action: IpayLoad) => {
      state.id = action.payload.data.data.id;
      state.email = action.payload.data.data.email;
      state.name = action.payload.data.data.name;
      state.address = action.payload.data.data.address;
      state.img = action.payload.data.data.img;
    },
  },
});

export default userReducer.reducer;
