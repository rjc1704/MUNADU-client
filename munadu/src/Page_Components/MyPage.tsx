import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store/store";
import { Istate } from "../Redux/Reducers/userReducer";
import { MyPageStyle } from "../StyledComponents/myPage";
import DetailInfo from "../Function_Components/Common/DetailInfo";
import { Input } from "../StyledComponents/input";
import { useState } from "react";
import SetAddress from "../Function_Components/MyPage/SetAddress";
import SetImage from "../Function_Components/MyPage/SetImg";
import Button from "../StyledComponents/button";

export default function MyPage() {
  const userData: Istate = useSelector((state: RootState) => {
    return state.userReducer;
  });

  const [isChange, setIsChange] = useState<boolean>(true);
  const [name, setName] = useState<string>(userData.name);
  const [address, setAddress] = useState<string | null | undefined>(
    userData.address
  );

  const changeName = (e: any): void => {
    setName(e.target.value);
  };

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
          <MyPageStyle.content>
            <p>프로필 이미지 변경</p>
            <SetImage></SetImage>
          </MyPageStyle.content>
          <MyPageStyle.content>
            <p>닉네임</p>
            <Input value={name} onChange={changeName}></Input>
            <p>주소</p>
            <div>
              {typeof address === "string" && address !== "null"
                ? address
                : "주소 찾기 버튼을 눌러 주소를 변경해주세요"}
            </div>
            <SetAddress changeAddress={setAddress}></SetAddress>
          </MyPageStyle.content>
        </MyPageStyle.setBoard>
      )}
    </MyPageStyle.page>
  );
}
