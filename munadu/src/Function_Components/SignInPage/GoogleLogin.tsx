import { GoogleLoginButton } from "ts-react-google-login-component";
import { signInSocial } from "../../Redux/Reducers/authReducer";
import { useDispatch } from "react-redux";

export default function GoogleLogin() {
  const clientID = {
    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: "profile email",
  };
  const dispatch = useDispatch();

  const resGoogle = (googleUser: gapi.auth2.GoogleUser): void => {
    const id_token = googleUser.getAuthResponse(true).id_token;
    dispatch(signInSocial({ token: id_token, type: 0 }));
  };

  return (
    <div>
      로그인
      <GoogleLoginButton
        clientConfig={clientID}
        responseHandler={resGoogle}
        failureHandler={(e) => {
          console.log(e);
        }}
      ></GoogleLoginButton>
    </div>
  );
}
