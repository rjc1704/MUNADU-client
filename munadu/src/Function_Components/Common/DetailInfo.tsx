import { Detail } from "../../StyledComponents/detail";

interface Idetail {
  img?: string;
  svg?: React.SFC<React.SVGProps<SVGSVGElement>>;
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
          <Detail.img
            src={process.env.REACT_APP_API_URL + "/uploads/1621424615218.png"}
          ></Detail.img>
        ) : null}
        {svg ? <div>{svg}</div> : null}
      </Detail.imgBox>
      <Detail.childrenBoard>{children}</Detail.childrenBoard>
    </Detail.board>
  );
}
