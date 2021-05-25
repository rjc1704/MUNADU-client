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
  return (
    <Detail.board>
      <Detail.imgBox>
        {img ? (
          <Detail.img
            src={process.env.REACT_APP_API_URL + "/uploads/1621424615218.png"}
          ></Detail.img>
        ) : null}
        {svg ? <Detail.img src={svg} /> : null}
      </Detail.imgBox>
      <Detail.childrenBoard>{children}</Detail.childrenBoard>
    </Detail.board>
  );
}
