import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Istate } from "../Redux/Reducers/userReducer";
import { MyPageStyle } from "../StyledComponents/myPage";
import DetailInfo from "../Function_Components/Common/DetailInfo";
import { useState } from "react";
import SetImage from "../Function_Components/MyPage/SetImg";
import Button from "../StyledComponents/button";
import SetProfile from "../Function_Components/MyPage/SetProfile";
import SetPassword from "../Function_Components/MyPage/SetPassword";

export default function MyPage() {
  const userData: Istate = useSelector((state: RootState) => {
    return state.userReducer;
  });
  const [isChange, setIsChange] = useState<boolean>(true);

  return (
    <MyPageStyle.page>
      {isChange ? (
        <>
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
                {isChange ? (
                  <Button
                    color="white"
                    onClick={() => {
                      setIsChange(false);
                    }}
                  >
                    내 정보 수정
                  </Button>
                ) : (
                  <Button
                    color="white"
                    onClick={() => {
                      setIsChange(true);
                    }}
                  >
                    내 정보 보기
                  </Button>
                )}
              </MyPageStyle.textBoard>
            </DetailInfo>
          </MyPageStyle.board>{" "}
          <MyPageStyle.contentBoard>
            <MyPageStyle.setBoard>ㅇㅇ</MyPageStyle.setBoard>
          </MyPageStyle.contentBoard>
        </>
      ) : (
        <MyPageStyle.setBoard>
          <SetImage callback={setIsChange}></SetImage>
          <SetProfile userData={userData} callback={setIsChange}></SetProfile>
          <SetPassword callback={setIsChange}></SetPassword>
        </MyPageStyle.setBoard>
      )}
    </MyPageStyle.page>
  );
}
