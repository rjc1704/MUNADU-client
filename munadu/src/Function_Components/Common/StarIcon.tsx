import React from "react";
import { ReactComponent as StarSvg } from "../../Images/star.svg";
import styled from "styled-components";
interface Props {
  fillColor: string;
}

export default function StarIcon({ fillColor }: Props) {
  const StarDiv = styled.div`
    cursor: pointer;
  `;
  return (
    <StarDiv>
      <StarSvg style={{ marginRight: "3px" }} fill={fillColor} />
    </StarDiv>
  );
}
