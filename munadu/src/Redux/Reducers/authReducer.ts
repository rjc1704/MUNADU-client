import dummy from "../authDummy.json";
import { SET_AUTH, SET_NO_AUTH } from "../Actions/auth";
interface payloadType {
  accessToken?: string;
}
interface actionType {
  type: string;
  payload: payloadType;
}
const authReducer = (state = dummy, action: actionType) => {
  switch (action.type) {
    case SET_AUTH:
      return Object.assign({}, state, {
        isLogin: true,
        accessToken: action.payload.accessToken,
      });

    case SET_NO_AUTH:
      return Object.assign({}, state, {
        isLogin: false,
        accessToken: "",
      });

    default:
      return state;
  }
};

export default authReducer;
