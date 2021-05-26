import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const getMartialRank = createAsyncThunk(
  "recommendReducer/getMartialRank",
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
export const getReviewRank = createAsyncThunk(
  "recommendReducer/getReviewRank",
  async () => {
    try {
      return await axios.get(`${process.env.REACT_APP_API_URL}/review/rank`, {
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
  "recommendReducer/getChannel",
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

interface IMartial {
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
  url: string;
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

interface IReview {
  id: number;
  period: number;
  comment: string;
  score: number;
  practicality: number;
  muscle: number;
  difficulty: number;
  intensity: number;
  injury: number;
  Martials_id: number;
  Users_id: number;
  martials: { name: string };
  users: { name: string };
  createdAt: string;
  updatedAt: string;
}

const initialState = {
  data: {
    martial: [] as IMartial[],
    channel: [] as IChannel[],
    review: [] as IReview[],
    message: "",
  },
};

const recommendReducer = createSlice({
  name: "recommendReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getMartialRank.fulfilled.type]: (state, action) => {
      state.data.martial = action.payload.data.data;
    },
    [getReviewRank.fulfilled.type]: (state, action) => {
      state.data.review = action.payload.data.data;
    },
    [getChannel.fulfilled.type]: (state, action) => {
      state.data.channel = action.payload.data.data;
    },
  },
});

export default recommendReducer.reducer;
