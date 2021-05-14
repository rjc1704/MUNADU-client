import dummy from "../replyDummy.json";
// import {  } from "../Actions/actions";

const replyReducer = (state = dummy, action) => {
  switch (action.type) {
    // case SET_MYPAGE:
    //   return action.payload.obj;

    default:
      return state;
  }
};

export default replyReducer;
