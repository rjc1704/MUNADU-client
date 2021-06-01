import dummy from "../coordDummy.json";
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  current,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getCoordinate = createAsyncThunk(
  "coordReducer/getCoordinate",
  async (query: string) => {
    console.log(`query: `, query);
    const coord = await axios.post(
      `${process.env.REACT_APP_API_URL}/martial/coordinate`,
      {
        query,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(`coord in Reducer:`, coord);
    return { lat: coord.data.data.lat, lgt: coord.data.data.lgt };
  }
);

interface IState {
  lat: string;
  lgt: string;
}

interface Ipayload {
  payload: {
    lat: string;
    lgt: string;
  };
}

const coordReducer = createSlice({
  name: "coordReducer",
  initialState: dummy as IState,
  reducers: {},
  extraReducers: {
    [getCoordinate.fulfilled.type]: (state, action: Ipayload) => {
      state.lat = action.payload.lat;
      state.lgt = action.payload.lgt;
    },
  },
});

export default coordReducer.reducer;
