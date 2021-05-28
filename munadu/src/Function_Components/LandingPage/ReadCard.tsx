import { memo } from "react";
import { Icard } from "../../Page_Components/LandingPage";
import { Card, SelectCard } from "../../StyledComponents/Card";

interface Iprops {
  card: Icard;
  callback: Function;
  isClick: boolean;
}

function ReadCard({ card, callback, isClick }: Iprops) {
  //
  if (isClick) {
    return (
      <SelectCard>
        <Card
          background={card.img}
          onClick={(e) => {
            e.preventDefault();
            callback(card.id);
          }}
          isClick={isClick}
        />
      </SelectCard>
    );
  }
  return (
    <Card
      background={card.img}
      onClick={(e) => {
        e.preventDefault();
        callback(card.id);
      }}
      isClick={isClick}
    />
  );
}

export default memo(ReadCard);
