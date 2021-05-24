import dummy from "../reviewDummy.json";
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getReviewList = createAsyncThunk(
  "reviewReducer/getReviewList",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/review/martial-list/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);
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
  createdAt: string;
  updatedAt: string;
  users: { name: string };
}
interface IState {
  reviewList: IReview[];
}

interface Ipayload {
  payload: {
    data: { data: IReview[]; message: string };
  };
}

const reviewReducer = createSlice({
  name: "reviewReducer",
  initialState: dummy as IState,
  reducers: {},
  extraReducers: {
    [getReviewList.fulfilled.type]: (state, action: Ipayload) => {
      state.reviewList = action.payload.data.data;
    },
  },
});

export default reviewReducer.reducer;
