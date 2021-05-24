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
interface Iimg {
  form: any;
  token: string;
}

export const setImg = createAsyncThunk(
  "userReducer/setImg",
  async ({ form, token }: Iimg) => {
    try {
      return await axios.put(
        `${process.env.REACT_APP_API_URL}/user/editimg`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(`err`, e);
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
    [setImg.fulfilled.type]: (state, action: any) => {
      state.img = action.payload.data.data.path;
    },
  },
});

export default userReducer.reducer;
