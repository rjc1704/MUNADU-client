import dummy from "../martialDummy.json";
// import {  } from "../Actions/actions";

const martialReducer = (state = dummy, action) => {
  switch (action.type) {
    // case SET_MYPAGE:
    //   return action.payload.obj;

    default:
      return state;
  }
};

export default martialReducer;
