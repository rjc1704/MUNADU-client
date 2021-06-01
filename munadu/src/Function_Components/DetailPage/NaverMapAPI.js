import { NaverMap, Marker } from "react-naver-maps";
import { useSelector, useDispatch } from "react-redux";
import { getCoordinate } from "../../Redux/Reducers/coordReducer";
import { setUser } from "../../Redux/Reducers/userReducer";
import axios from "axios";
import { useState, useEffect, useLayoutEffect } from "react";
import myPosition from "../../Images/myPosition.svg";
import martialJson from "../../Redux/martialDummy.json";
import { fileURLToPath } from "url";

function NaverMapAPI({ martialId }) {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const userId = useSelector((state) => state.authReducer.id);
  console.log(`userId: `, userId);
  console.log(`isLogin: `, isLogin);
  const navermaps = window.naver.maps;
  const userInfo = useSelector((state) => state.userReducer);

  const userAddress = userInfo.address;

  const coord = useSelector((state) => state.coordReducer);
  const { lat, lgt } = coord;
  console.log(`coord: `, coord);
  useEffect(() => {
    dispatch(setUser(userId));
    console.log(`userAddress in useEffect: `, userAddress);
    dispatch(getCoordinate(userAddress));
  }, []);

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map maps-getting-started-uncontrolled
      style={{
        width: "100%", // 네이버지도 가로 길이
        height: "500px", // 네이버지도 세로 길이
      }}
      defaultCenter={
        isLogin && userAddress !== ""
          ? { lat: lat, lng: lgt }
          : { lat: 37.4965695, lng: 127.0247765 }
      } // 지도 초기 위치
      defaultZoom={10} // 지도 초기 확대 배율
    >
      <Marker
        key={100}
        icon={{
          url: myPosition,
          size: { width: 24, height: 32 },
          scaledSize: { width: 24, height: 32 },
        }}
        position={
          isLogin && userAddress !== ""
            ? new navermaps.LatLng(lat, lgt)
            : new navermaps.LatLng(37.4965695, 127.0247765)
        }
        animation={2}
        onClick={() => {
          alert("여기는 N서울타워입니다.");
        }}
      />
      {martialJson.result[martialId - 1].coord.map((position, idx) => {
        return (
          <Marker
            key={idx}
            position={new navermaps.LatLng(position[0], position[1])}
            animation={2}
            onClick={() => {
              alert("여기는 N서울타워입니다.");
            }}
          />
        );
      })}
      {console.log(
        `martialJson.result[1].coord: `,
        martialJson.result[1].coord
      )}
    </NaverMap>
  );
}

export default NaverMapAPI;
