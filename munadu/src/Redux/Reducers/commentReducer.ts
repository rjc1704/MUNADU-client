import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentList = createAsyncThunk(
  "commentReducer/getCommentList",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/comment/martial-list/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

interface ICreateProps {
  comment: string;
  userid: number;
  martialid: number;
  accessToken: string;
}
export const createComment = createAsyncThunk(
  "commentReducer/createComment",
  async ({ comment, userid, martialid, accessToken }: ICreateProps) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/comment/create`,
      {
        comment,
        userid,
        martialid,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return res.data.data;
  }
);

interface IComment {
  id: number;
  comment: string;
  Users_id: number;
  Martials_id: number;
  createdAt: string;
  updatedAt: string;
  users: { name: string };
}

const initialState = {
  data: {
    commentList: [] as IComment[],
  },
};
const commentReducer = createSlice({
  name: "commentReducer",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getCommentList.fulfilled.type]: (state, action) => {
      state.data.commentList = action.payload.data.data;
    },
    [createComment.fulfilled.type]: (state, action) => {
      state.data.commentList.push(action.payload);
    },
  },
});

export default commentReducer.reducer;
