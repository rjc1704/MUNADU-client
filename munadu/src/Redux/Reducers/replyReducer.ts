import dummy from "../replyDummy.json";
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getReplyList = createAsyncThunk(
  "reviewReducer/getReplyList",
  async (id: number) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL}/reply/review-list/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  }
);

interface CreateProps {
  comment: string;
  Users_id: number;
  Reviews_id: number;
  accessToken: string;
}
export const createReply = createAsyncThunk(
  "replyReducer/createReply",
  async ({ comment, Users_id, Reviews_id, accessToken }: CreateProps) => {
    const resp = await axios.post(
      `${process.env.REACT_APP_API_URL}/reply/create`,
      {
        comment,
        Users_id,
        Reviews_id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return resp;
  }
);
interface UpdateProps {
  id: number;
  comment: string;
  accessToken: string;
}
export const updateReply = createAsyncThunk(
  "replyReducer/updateReply",
  async ({ id, comment, accessToken }: UpdateProps) => {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/reply/update`,
      {
        id,
        comment,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return {
      id,
      comment,
    };
  }
);

interface IReply {
  id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  Users_id: number;
  Reviews_id: number;
  users: { name: string };
  accessToken?: string;
}
interface IState {
  replyList: IReply[];
}

interface Ipayload {
  payload: {
    data: { data: IReply[]; message: string };
  };
}

interface IcreatePayload {
  payload: {
    id: number;
    comment: string;
    Users_id: number;
    Reviews_id: number;
    updatedAt: string;
    createdAt: string;
    users: { name: string };
  };
}
interface IupdatePayload {
  payload: {
    comment: string;
    replyId: number;
  };
}

interface deleteProps {
  replyId: number;
  accessToken: string;
}

export const deleteReply = createAsyncThunk(
  "reviewReducer/deleteReply",
  async ({ replyId, accessToken }: deleteProps) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/reply/delete`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        replyId: replyId,
      },
    });
    return { replyId };
  }
);

const replyReducer = createSlice({
  name: "replyReducer",
  initialState: dummy as IState,
  reducers: {},
  extraReducers: {
    [getReplyList.fulfilled.type]: (state, action: Ipayload) => {
      state.replyList = action.payload.data.data;
    },
    [createReply.fulfilled.type]: (state, action: IcreatePayload) => {
      console.log(`action in createReply`, action);
      state.replyList.push({
        id: action.payload.id,
        comment: action.payload.comment,
        Reviews_id: action.payload.Reviews_id,
        Users_id: action.payload.Users_id,
        createdAt: action.payload.createdAt,
        updatedAt: action.payload.updatedAt,
        users: { name: action.payload.users.name },
      });
    },
    [updateReply.fulfilled.type]: (state, action: IupdatePayload) => {
      const index = state.replyList.findIndex(
        (reply) => reply.id === action.payload.replyId
      );
      state.replyList[index].comment = action.payload.comment;
    },
    [deleteReply.fulfilled.type]: (state, action) => {
      state.replyList = state.replyList.filter(
        (review) => review.id !== action.payload.reviewId
      );
    },
  },
});

export default replyReducer.reducer;
