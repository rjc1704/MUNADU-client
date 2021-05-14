import dummy from "../userDummy.json";
// import {  } from "../Actions/actions";

const userReducer = (state = dummy, action) => {
  switch (action.type) {
    // case SET_MYPAGE:
    //   return action.payload.obj;

    default:
      return state;
  }
};

export default userReducer;
