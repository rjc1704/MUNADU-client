import React, { ReactNode, useState } from "react";
import styled from "styled-components";

import Banner from "../Function_Components/MainPage/Banner";
import MartialListForm from "../Function_Components/MainPage/MartialListForm";
import RecommendForm from "../Function_Components/MainPage/RecommendForm";

export default function MainPage() {
  const [isSelected, setIsSelected] = useState(true);

  const checkSelected = (e: boolean) => {
    setIsSelected(e);
  };

  const main = styled.div`
    overflow: auto;
  `;
  return (
    <main>
      <Banner isSelected={isSelected} checkSelected={checkSelected}></Banner>
      {isSelected ? <RecommendForm /> : <MartialListForm />}
    </main>
  );
}
