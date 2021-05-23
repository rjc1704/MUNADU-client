import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Istate } from "../Redux/Reducers/userReducer";
import { MyPageStyle } from "../StyledComponents/myPage";
import DetailInfo from "../Function_Components/Common/DetailInfo";
import { useEffect } from "react";

export default function MyPage() {
  const userData: Istate = useSelector((state: RootState) => {
    return state.userReducer;
  });

  useEffect(() => {}, []);

  return (
    <MyPageStyle.page>
      <MyPageStyle.board>
        <DetailInfo img={userData.img ? userData.img : ""}>
          <MyPageStyle.textBoard>
            <div>
              <p>주소 :</p>
              <p>닉네임 :</p>
              <p>이메일 :</p>
            </div>
            <MyPageStyle.textContent>
              <p>
                {userData.address !== "null"
                  ? userData.address
                  : "프로필 수정을 통해 주소를 입력해주세요"}
              </p>
              <p>{userData.name}</p>
              <p>{userData.email}</p>
            </MyPageStyle.textContent>
          </MyPageStyle.textBoard>
        </DetailInfo>
      </MyPageStyle.board>
      <MyPageStyle.contentBoard></MyPageStyle.contentBoard>
    </MyPageStyle.page>
  );
}
