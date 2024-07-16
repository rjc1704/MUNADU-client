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
  console.log(`img`, img);
  return (
    <Detail.board>
      <Detail.imgBox>
        {img ? (
          <Detail.img src={process.env.REACT_APP_API_URL + img}></Detail.img>
        ) : null}
        {svg ? <Detail.img src={svg} /> : null}
      </Detail.imgBox>
      <Detail.childrenBoard>{children}</Detail.childrenBoard>
    </Detail.board>
  );
}
