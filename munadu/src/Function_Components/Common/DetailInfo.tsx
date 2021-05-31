import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { Detail } from "../../StyledComponents/detail";

interface Idetail {
  img?: string;
  svg?: string;
  children: React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  >;
}

export default function DetailInfo({ img, svg, children }: Idetail) {
  const isSocial = useSelector((state: RootState) => {
    return state.authReducer.isSocial;
  });
  return (
    <Detail.board>
      <Detail.imgBox>
        {img ? <Detail.img src={img}></Detail.img> : null}
        {svg ? <Detail.img src={svg} /> : null}
      </Detail.imgBox>
      <Detail.childrenBoard>{children}</Detail.childrenBoard>
    </Detail.board>
  );
}
