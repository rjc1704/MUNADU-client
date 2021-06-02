import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";
// import { RenderAfterNavermapsLoaded } from "navermaps";
import React from "react";
import NaverMapAPI from "./NaverMapAPI";
import styled from "styled-components";

const MapWrapper = styled.div`
  width: 100%;
  height: 70em;
`;
const SubWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;
const Text = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 0.7em;
  @media only screen and (max-width: ${(props) => props.theme.width.media}) {
    font-size: 1.2rem;
  }
`;

export default function ReadLocation({ martialId }) {
  return (
    <MapWrapper>
      <SubWrapper>
        <RenderAfterNavermapsLoaded
          ncpClientId={"kvau6jzt32"} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <Text>내 위치와 체육관들의 위치를 표시합니다.</Text>
          <NaverMapAPI martialId={martialId} />
        </RenderAfterNavermapsLoaded>
      </SubWrapper>
    </MapWrapper>
  );
}
