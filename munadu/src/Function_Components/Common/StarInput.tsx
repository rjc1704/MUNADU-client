import React, { useState, useEffect, memo } from "react";
import Star from "./Star";
import styled from "styled-components";
interface StarInputProps {
  handleRating: (index: number) => void;
  name?: string;
  rating: number;
}
function StarInput({ handleRating, rating }: StarInputProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => setHoverRating(index);
  const onMouseLeave = () => setHoverRating(0);
  // const onSaveRating = (index: number) => setRating(index);
  const StarBox = styled.div`
    display: flex;
  `;
  useEffect(() => {
    console.log(`hoverRating`, hoverRating);
    console.log(`rating`, rating);
  });
  return (
    <StarBox>
      {[1, 2, 3, 4, 5].map((idx) => {
        return (
          <Star
            index={idx}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={handleRating}
          />
        );
      })}
    </StarBox>
  );
}

export default memo(StarInput);
