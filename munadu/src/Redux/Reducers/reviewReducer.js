import dummy from "../reviewDummy.json";
// import {  } from "../Actions/actions";

const reviewReducer = (state = dummy, action) => {
  switch (action.type) {
    // case SET_MYPAGE:
    //   return action.payload.obj;

    default:
      return state;
  }
};

export default reviewReducer;
