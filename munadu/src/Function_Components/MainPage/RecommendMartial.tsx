import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMartialRank } from "../../Redux/Reducers/recommendReducer";
import { RootState } from "../../Redux/Store/store";
import {
  Box,
  ContentCard,
  ContentsTitle,
  ContentsWrapper,
  DetailTitle,
  DetailCaption,
} from "../../StyledComponents/recommendForm";

const RecommendMartial = () => {
  const martialRank = useSelector(
    (state: RootState) => state.recommendReducer.data
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMartialRank());
  }, []);
  console.log(martialRank);
  return (
    <>
      <ContentsTitle>추천 무술</ContentsTitle>
      <ContentsWrapper>
        {martialRank.martial.map((martial, idx) => {
          return (
            <Box key={idx}>
              <ContentCard>
                <img src={martial.img} width="100%" height="100%" />
              </ContentCard>
              <DetailTitle>{martial.name}</DetailTitle>
              <DetailCaption>{martial.caption}</DetailCaption>
            </Box>
          );
        })}
      </ContentsWrapper>
    </>
  );
};

export default RecommendMartial;
