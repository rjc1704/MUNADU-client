import React, { memo, useMemo } from "react";
import StarIcon from "./StarIcon";

interface Props {
  index: number;
  rating: number;
  hoverRating: number;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onSaveRating: (index: number) => void;
}

function Star(props: Props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;
  const fillColor = useMemo(() => {
    if (hoverRating >= index) {
      return "#EFA43C"; // 주황색
    } else if (!hoverRating && rating >= index) {
      return "#EFA43C"; // 주황색
    }
    return "#C4C4C4"; // 회색
  }, [rating, hoverRating, index]);
  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fillColor={fillColor} />
    </div>
  );
}
export default memo(Star);
