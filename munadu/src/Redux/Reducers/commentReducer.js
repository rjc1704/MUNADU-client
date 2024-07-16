import dummy from "../commentDummy.json";
// import {  } from "../Actions/actions";

const commentReducer = (state = dummy, action) => {
  switch (action.type) {
    // case SET_MYPAGE:
    //   return action.payload.obj;

    default:
      return state;
  }
};

export default commentReducer;
