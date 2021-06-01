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
import HeaderBar from "../Function_Components/Common/HeaderBar";
import ReadReview from "../Function_Components/DetailPage/ReadReview";

export default function MyPage() {
  const userData: Istate = useSelector((state: RootState) => {
    return state.userReducer;
  });
  const isSocial = useSelector((state: RootState) => {
    return state.authReducer.isSocial;
  });
  const [isChange, setIsChange] = useState<boolean>(true);
  const userId = useSelector((state: RootState) => state.authReducer.id);
  return (
    <MyPageStyle.page>
      <HeaderBar></HeaderBar>
      <MyPageStyle.board>
        <DetailInfo img={userData.img ? userData.img : ""}>
          <MyPageStyle.textBoard>
            <MyPageStyle.textContent>{userData.name}</MyPageStyle.textContent>
          </MyPageStyle.textBoard>
        </DetailInfo>
      </MyPageStyle.board>
      {isChange ? (
        <MyPageStyle.contentBoard>
          <MyPageStyle.setBoard>
            <MyPageStyle.baseInfo>
              <MyPageStyle.title>기본 정보</MyPageStyle.title>
              <Button
                color="black"
                onClick={() => {
                  setIsChange(false);
                }}
              >
                내 정보 수정
              </Button>
            </MyPageStyle.baseInfo>
            <MyPageStyle.userProfile>
              <div>
                <MyPageStyle.userInfo>이메일</MyPageStyle.userInfo>
                <p>{userData.email}</p>
              </div>
              <div>
                <MyPageStyle.userInfo>주소</MyPageStyle.userInfo>
                <p>
                  {userData.address === "null"
                    ? "정보 수정을 통해 주소를 입력해주세요"
                    : userData.address}
                </p>
              </div>
            </MyPageStyle.userProfile>
            <ReadReview userID={userId} />
          </MyPageStyle.setBoard>
        </MyPageStyle.contentBoard>
      ) : (
        <MyPageStyle.setBoard>
          <MyPageStyle.contentBoard>
            {isSocial ? (
              <SetProfile
                userData={userData}
                callback={setIsChange}
              ></SetProfile>
            ) : (
              <>
                <SetImage callback={setIsChange}></SetImage>
                <SetProfile
                  userData={userData}
                  callback={setIsChange}
                ></SetProfile>
                <SetPassword callback={setIsChange}></SetPassword>
              </>
            )}
          </MyPageStyle.contentBoard>
        </MyPageStyle.setBoard>
      )}
    </MyPageStyle.page>
  );
}
