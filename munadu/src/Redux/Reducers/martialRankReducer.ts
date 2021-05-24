import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getRank = createAsyncThunk(
  "martialRankReducer/getRank",
  async () => {
    try {
      return await axios.get(`${process.env.REACT_APP_API_URL}/martial/rank`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
);

export const getChannel = createAsyncThunk(
  "martialRankReduxer/getChannel",
  async () => {
    try {
      return await axios.get(`${process.env.REACT_APP_API_URL}/channel`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
);

export interface Istate {
  id: number;
  name: string;
  weapon: number;
  uniform: number;
  origin: number;
  sports: number;
  manner: number;
  attack: number;
  nation: string;
  caption: string;
  video: string;
  kcal: number;
  img: string;
}

interface IChannel {
  id: number;
  name: string;
  caption: string;
  url: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

interface IpayLoad {
  payload: {
    data: {
      data: Istate[];
      channel: IChannel[];
      message: string;
    };
  };
}

const initialState = {
  data: {
    data: [] as Istate[],
    channel: [] as any,
  },
};

const martialRankReducer = createSlice({
  name: "martialRankReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getRank.fulfilled.type]: (state, action: IpayLoad) => {
      state.data.data = action.payload.data.data;
    },
    [getChannel.fulfilled.type]: (state, action: IpayLoad) => {
      state.data.channel = action.payload.data.data;
    },
  },
});

export default martialRankReducer.reducer;
