import { useState } from "react";
import { setImg } from "../../Redux/Reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import Button from "../../StyledComponents/button";
import { Detail } from "../../StyledComponents/detail";
import { MyPageStyle } from "../../StyledComponents/myPage";

export default function SetImage(changeAddress: any) {
  const token: string = useSelector((state: RootState) => {
    return state.authReducer.accessToken;
  });
  const dispatch = useDispatch();
  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState<any>();

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      let reader = new FileReader();
      let formData = new FormData();
      reader.onloadend = () => {
        const base = reader.result;
        if (base) {
          setImgBase64(base.toString());
        }
      };

      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
        formData.append("image", e.target.files[0]);
        setImgFile(formData);
      } else {
        setImgBase64("");
      }
    }
  };

  const uploadImg = (): void => {
    dispatch(setImg({ form: imgFile, token: token }));
  };
  return (
    <MyPageStyle.contentBoard>
      <Detail.imgBox>
        <Detail.img src={imgBase64}></Detail.img>
      </Detail.imgBox>
      <div>
        <MyPageStyle.imgLabel htmlFor="file">업로두</MyPageStyle.imgLabel>
        <MyPageStyle.imgInput
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          onChange={changeImage}
          id="file"
        ></MyPageStyle.imgInput>
        <Button onClick={uploadImg}>이미지 변경</Button>
      </div>
    </MyPageStyle.contentBoard>
  );
}
