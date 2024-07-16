import { MyPageStyle } from "../../StyledComponents/myPage";
import { Input } from "../../StyledComponents/input";
import Button from "../../StyledComponents/button";
import { useState } from "react";
import SetAddress from "../MyPage/SetAddress";
import { Istate } from "../../Redux/Reducers/userReducer";
import Modal from "../Common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../Redux/Reducers/userReducer";
import { RootState } from "../../Redux/Store/store";

interface Idata {
  userData: Istate;
  callback: any;
}

export default function SetProfile({ userData, callback }: Idata) {
  const token: string = useSelector((state: RootState) => {
    return state.authReducer.accessToken;
  });
  const [name, setName] = useState<string>(userData.name);
  const [address, setAddress] = useState<string | null | undefined>(
    userData.address
  );
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isChange, setIsChange] = useState<boolean>(true);
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModal(false);
  };
  const uploadProfile = () => {
    dispatch(setProfile({ name, address, token }));
    setIsModal(true);
  };
  const changeAddress = (data: string): void => {
    setIsChange(false);
    setAddress(data);
  };
  const changeName = (e: any): void => {
    setIsChange(false);
    setName(e.target.value);
  };
  return (
    <>
      <MyPageStyle.content>
        <MyPageStyle.title>닉네임 변경</MyPageStyle.title>
        <Input width={400} value={name} onChange={changeName}></Input>
        <MyPageStyle.title>주소 변경</MyPageStyle.title>
        <div>
          {typeof address === "string" && address !== "null"
            ? address
            : "주소 찾기 버튼을 눌러 주소를 변경해주세요"}
        </div>
        <SetAddress changeAddress={changeAddress}></SetAddress>
      </MyPageStyle.content>

      <MyPageStyle.buttonPosition>
        <Button
          onClick={uploadProfile}
          color={isChange ? "white" : "black"}
          disabled={isChange}
        >
          정보 변경
        </Button>
        <Button
          onClick={() => {
            callback(true);
          }}
        >
          취소
        </Button>
      </MyPageStyle.buttonPosition>

      {isModal ? (
        <Modal
          close={closeModal}
          headerText="프로필 수정 완료"
          okBtnText="확인"
          callback={closeModal}
        >
          <p>프로필 정보가 수정되었습니다.</p>
        </Modal>
      ) : null}
    </>
  );
}
