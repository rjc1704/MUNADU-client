import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {
  ContentCard,
  ContentsTitle,
  DetailTitle,
  DetailCaption,
  Box,
} from "../../StyledComponents/recommendForm";
import martialJson from "../Common/martialData.json";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/store";
import { filterMartial } from "../../Redux/Reducers/martialReducer";
import { useHistory } from "react-router";
import { selectTag } from "../../Redux/Reducers/tagReducer";

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  /* margin: 0;
  padding: 0; */
  background-color: ${(props) => props.theme.color.grey};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 64%;

  margin: 0;
`;

const FilterMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0.7em 0;
`;
const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 7em;

  justify-content: space-evenly;
`;
const DescRow = styled.div`
  display: flex;
`;
const BoldText = styled.div`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1rem;
  font-weight: bold;
`;
interface ITest {
  idx: string;
  status: boolean;
}
const NormalText = styled.div<ITest>`
  font-family: ${(props) => props.theme.fontFamily.subFont};
  font-size: 1rem;
  font-weight: normal;
  margin-left: 1.2em;

  cursor: pointer;
  padding: 3px;

  ${(props) => {
    if (props.status === true) {
      return css`
        background-color: ${(props) => props.theme.color.black};
        border-radius: 10px;
        color: #eeeeee;
      `;
    } else {
      return css`
        color: #606060;
        border-radius: 0;
        background-color: none;
      `;
    }
  }}/* &:hover {
    background-color: ${(props) => props.theme.color.black};
    border-radius: 10px;
    color: #eeeeee;
  } */
`;

const MartialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  justify-items: center;

  /* justify-content: end; */
`;

const Box2 = styled(Box)`
  width: 97%;
  margin-bottom: 10px;
`;

const MartialListForm = () => {
  // const [isHand, setIsHand] = useState(false);
  // const [isWeapon, setIsWeapon] = useState(false);
  // const [isHandAndWeapon, setIsHandAndWeapon] = useState(false);
  // const [isDobok, setIsDobok] = useState(false);
  // const [isFreebok, setIsFreebok] = useState(false);
  // const [isUniform, setIsUniform] = useState(false);
  // const [isAttack, setIsAttack] = useState(false);
  // const [isGround, setIsGround] = useState(false);
  // const [isMMA, setIsMMA] = useState(false);
  // const [isEastern, setIsEastern] = useState(false);
  // const [isWestern, setIsWestern] = useState(false);
  // const [isSports, setIsSports] = useState(false);
  // const [isNoSports, setIsNoSports] = useState(false);
  // const [isCourtesy, setIsCourtesy] = useState(false);
  // const [isFreedom, setIsFreedom] = useState(false);
  const tagReducer = useSelector((state: RootState) => state.tagReducer);
  const {
    isHand,
    isWeapon,
    isHandAndWeapon,
    isDobok,
    isFreebok,
    isUniform,
    isAttack,
    isGround,
    isMMA,
    isEastern,
    isWestern,
    isSports,
    isNoSports,
    isCourtesy,
    isFreedom,
  } = tagReducer;

  const dispatch = useDispatch();
  const handleHand = async () => {
    if (isHand === false) {
      if (isWeapon) {
        // await setIsWeapon(false); // ? 기존 태그 취소 처리
        await dispatch(selectTag({ ...tagReducer, isWeapon: false }));
      }
      if (isHandAndWeapon) {
        // await setIsHandAndWeapon(false);
        await dispatch(selectTag({ ...tagReducer, isHandAndWeapon: false }));
      }
      // await setIsHand(true);
      console.log("자 이제 바꿔보자!");
      await dispatch(
        selectTag({
          ...tagReducer,
          isWeapon: false,
          isHandAndWeapon: false,
          isHand: true,
        })
      );
    } else {
      // ? 새로운 태그 선택 처리
      // setIsHand(false);
      dispatch(selectTag({ ...tagReducer, isHand: false }));
    }
  };
  const handleWeapon = async () => {
    if (isWeapon === false) {
      if (isHand) {
        // await setIsHand(false);
        await dispatch(selectTag({ ...tagReducer, isHand: false }));
      }
      if (isHandAndWeapon) {
        // await setIsHandAndWeapon(false);
        await dispatch(selectTag({ ...tagReducer, isHandAndWeapon: false }));
      }
      // await setIsWeapon(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isHand: false,
          isHandAndWeapon: false,
          isWeapon: true,
        })
      );
    } else {
      // setIsWeapon(false);
      dispatch(selectTag({ ...tagReducer, isWeapon: false }));
    }
  };
  const handleHandAndWeapon = async () => {
    if (isHandAndWeapon === false) {
      if (isHand) {
        // await setIsHand(false);
        await dispatch(selectTag({ ...tagReducer, isHand: false }));
      }
      if (isWeapon) {
        // await setIsWeapon(false);
        await dispatch(selectTag({ ...tagReducer, isWeapon: false }));
      }
      // await setIsHandAndWeapon(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isHand: false,
          isWeapon: false,
          isHandAndWeapon: true,
        })
      );
    } else {
      // setIsHandAndWeapon(false);
      dispatch(selectTag({ ...tagReducer, isHandAndWeapon: false }));
    }
  };
  const handleDobok = async () => {
    if (isDobok === false) {
      if (isFreebok) {
        // await setIsFreebok(false);
        await dispatch(selectTag({ ...tagReducer, isFreebok: false }));
      }
      if (isUniform) {
        // await setIsUniform(false);
        await dispatch(selectTag({ ...tagReducer, isUniform: false }));
      }
      // await setIsDobok(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isFreebok: false,
          isUniform: false,
          isDobok: true,
        })
      );
    } else {
      // setIsDobok(false);
      await dispatch(selectTag({ ...tagReducer, isDobok: false }));
    }
  };
  const handleFreeBok = async () => {
    if (isFreebok === false) {
      if (isDobok) {
        // await setIsDobok(false);
        await dispatch(selectTag({ ...tagReducer, isDobok: false }));
      }
      if (isUniform) {
        // await setIsUniform(false);
        await dispatch(selectTag({ ...tagReducer, isUniform: false }));
      }
      // await setIsFreebok(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isDobok: false,
          isUniform: false,
          isFreebok: true,
        })
      );
    } else {
      // setIsFreebok(false);
      await dispatch(selectTag({ ...tagReducer, isFreebok: false }));
    }
  };
  const handleUniform = async () => {
    if (isUniform === false) {
      if (isDobok) {
        // await setIsDobok(false);
        await dispatch(selectTag({ ...tagReducer, isDobok: false }));
      }
      if (isFreebok) {
        // await setIsFreebok(false);
        await dispatch(selectTag({ ...tagReducer, isFreebok: false }));
      }
      // await setIsUniform(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isDobok: false,
          isFreebok: false,
          isUniform: true,
        })
      );
    } else {
      // setIsUniform(false);
      await dispatch(selectTag({ ...tagReducer, isUniform: false }));
    }
  };
  const handleAttack = async () => {
    if (isAttack === false) {
      if (isGround) {
        // await setIsGround(false);
        await dispatch(selectTag({ ...tagReducer, isGround: false }));
      }
      if (isMMA) {
        // await setIsMMA(false);
        await dispatch(selectTag({ ...tagReducer, isMMA: false }));
      }
      // await setIsAttack(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isGround: false,
          isMMA: false,
          isAttack: true,
        })
      );
    } else {
      // setIsAttack(false);
      await dispatch(selectTag({ ...tagReducer, isAttack: false }));
    }
  };
  const handleGround = async () => {
    if (isGround === false) {
      if (isAttack) {
        // await setIsAttack(false);
        await dispatch(selectTag({ ...tagReducer, isAttack: false }));
      }
      if (isMMA) {
        // await setIsMMA(false);
        await dispatch(selectTag({ ...tagReducer, isMMA: false }));
      }
      // await setIsGround(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isAttack: false,
          isMMA: false,
          isGround: true,
        })
      );
    } else {
      // setIsGround(false);
      await dispatch(selectTag({ ...tagReducer, isGround: false }));
    }
  };
  const handleMMA = async () => {
    if (isMMA === false) {
      if (isAttack) {
        // await setIsAttack(false);
        await dispatch(selectTag({ ...tagReducer, isAttack: false }));
      }
      if (isGround) {
        // await setIsGround(false);
        await dispatch(selectTag({ ...tagReducer, isGround: false }));
      }
      // await setIsMMA(true);
      await dispatch(
        selectTag({
          ...tagReducer,
          isAttack: false,
          isGround: false,
          isMMA: true,
        })
      );
    } else {
      // setIsMMA(false);
      await dispatch(selectTag({ ...tagReducer, isMMA: false }));
    }
  };
  const handleEastern = async () => {
    if (isEastern === false) {
      if (isWestern) {
        // await setIsWestern(false);
        await dispatch(selectTag({ ...tagReducer, isWestern: false }));
      }
      // await setIsEastern(true);
      await dispatch(
        selectTag({ ...tagReducer, isWestern: false, isEastern: true })
      );
    } else {
      // setIsEastern(false);
      await dispatch(selectTag({ ...tagReducer, isEastern: false }));
    }
  };
  const handleWestern = async () => {
    if (isWestern === false) {
      if (isEastern) {
        // await setIsEastern(false);
        await dispatch(selectTag({ ...tagReducer, isEastern: false }));
      }
      // await setIsWestern(true);
      await dispatch(
        selectTag({ ...tagReducer, isEastern: false, isWestern: true })
      );
    } else {
      // setIsWestern(false);
      await dispatch(selectTag({ ...tagReducer, isWestern: false }));
    }
  };
  const handleSports = async () => {
    if (isSports === false) {
      if (isNoSports) {
        // await setIsNoSports(false);
        await dispatch(selectTag({ ...tagReducer, isNoSports: false }));
      }
      // await setIsSports(true);
      await dispatch(
        selectTag({ ...tagReducer, isNoSports: false, isSports: true })
      );
    } else {
      // setIsSports(false);
      await dispatch(selectTag({ ...tagReducer, isSports: false }));
    }
  };
  const handleNoSports = async () => {
    if (isNoSports === false) {
      if (isSports) {
        // await setIsSports(false);
        await dispatch(selectTag({ ...tagReducer, isSports: false }));
      }
      // await setIsNoSports(true);
      await dispatch(
        selectTag({ ...tagReducer, isSports: false, isNoSports: true })
      );
    } else {
      // setIsNoSports(false);
      await dispatch(selectTag({ ...tagReducer, isNoSports: false }));
    }
  };
  const handleCourtesy = async () => {
    if (isCourtesy === false) {
      if (isFreedom) {
        // await setIsFreedom(false);
        await dispatch(selectTag({ ...tagReducer, isFreedom: false }));
      }
      // await setIsCourtesy(true);
      await dispatch(
        selectTag({ ...tagReducer, isFreedom: false, isCourtesy: true })
      );
    } else {
      // setIsCourtesy(false);
      await dispatch(selectTag({ ...tagReducer, isCourtesy: false }));
    }
  };
  const handleFreedom = async () => {
    if (isFreedom === false) {
      if (isCourtesy) {
        // await setIsCourtesy(false);
        await dispatch(selectTag({ ...tagReducer, isCourtesy: false }));
      }
      // await setIsFreedom(true);
      await dispatch(
        selectTag({ ...tagReducer, isCourtesy: false, isFreedom: true })
      );
    } else {
      // setIsFreedom(false);
      await dispatch(selectTag({ ...tagReducer, isFreedom: false }));
    }
  };
  const martialData = useSelector((state: RootState) => state.martialReducer);
  useEffect(() => {
    let filterResult: any = [];
    if (isHand) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.weapon === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, weapon: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });

      console.log(`filterResult in else!:`, filterResult);
      dispatch(
        filterMartial({ ...martialData, weapon: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isHand]);
  useEffect(() => {
    let filterResult: any = [];
    if (isWeapon) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.weapon === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, weapon: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, weapon: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isWeapon]);
  useEffect(() => {
    let filterResult: any = [];
    if (isHandAndWeapon) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.weapon === 2)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, weapon: 2, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, weapon: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isHandAndWeapon]);
  useEffect(() => {
    let filterResult: any = [];
    if (isDobok) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.uniform === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, uniform: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, uniform: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isDobok]);
  useEffect(() => {
    let filterResult: any = [];
    if (isFreebok) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.uniform === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, uniform: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, uniform: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isFreebok]);
  useEffect(() => {
    let filterResult: any = [];
    if (isUniform) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.uniform === 2)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, uniform: 2, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, uniform: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isUniform]);
  useEffect(() => {
    let filterResult: any = [];
    if (isAttack) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.attack === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, attack: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, attack: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isAttack]);
  useEffect(() => {
    let filterResult: any = [];
    if (isGround) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.attack === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, attack: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, attack: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isGround]);
  useEffect(() => {
    let filterResult: any = [];
    if (isMMA) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.attack === 2)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, attack: 2, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, attack: 3, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isMMA]);
  useEffect(() => {
    let filterResult: any = [];
    if (isEastern) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.origin === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, origin: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, origin: 2, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isEastern]);
  useEffect(() => {
    let filterResult: any = [];
    if (isWestern) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.origin === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, origin: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, origin: 2, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isWestern]);
  useEffect(() => {
    let filterResult: any = [];
    if (isSports) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.sports === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, sports: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, sports: 2, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isSports]);
  useEffect(() => {
    let filterResult: any = [];
    if (isNoSports) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.sports === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, sports: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.manner !== 2) {
          return martial.manner === martialData.manner;
        }
        return martial.manner !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, sports: 2, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isNoSports]);
  useEffect(() => {
    let filterResult: any = [];
    if (isCourtesy) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.manner === 0)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, manner: 0, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, manner: 2, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isCourtesy]);
  useEffect(() => {
    let filterResult: any = [];
    if (isFreedom) {
      filterResult = martialData.result
        ? martialData.result.filter((martial) => martial.manner === 1)
        : filterResult;
      dispatch(
        filterMartial({ ...martialData, manner: 1, result: filterResult })
      );
    } else {
      filterResult = martialJson.martialData.filter((martial) => {
        if (martialData.weapon !== 3) {
          return martial.weapon === martialData.weapon;
        }
        return martial.weapon !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.attack !== 3) {
          return martial.attack === martialData.attack;
        }
        return martial.attack !== 3;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.origin !== 2) {
          return martial.origin === martialData.origin;
        }
        return martial.origin !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.sports !== 2) {
          return martial.sports === martialData.sports;
        }
        return martial.sports !== 2;
      });
      filterResult = filterResult.filter((martial: any) => {
        if (martialData.uniform !== 3) {
          return martial.uniform === martialData.uniform;
        }
        return martial.uniform !== 3;
      });
      dispatch(
        filterMartial({ ...martialData, manner: 2, result: filterResult })
      );
    }
    console.log(`filterResult`, filterResult);
    console.log(`martialData`, martialData);
  }, [isFreedom]);
  const history = useHistory();
  const moveToDetailPage = (id: number) => {
    history.push({
      pathname: "/detailpage",
      state: { martialId: id },
    });
  };
  return (
    <PageWrapper>
      <ContentWrapper>
        <FilterMenu>
          <FilterGroup>
            <DescRow>
              <BoldText>무기유무</BoldText>
              <NormalText idx={"q11"} onClick={handleHand} status={isHand}>
                맨손
              </NormalText>
              <NormalText idx={"q12"} onClick={handleWeapon} status={isWeapon}>
                무기
              </NormalText>
              <NormalText
                idx={"q13"}
                onClick={handleHandAndWeapon}
                status={isHandAndWeapon}
              >
                혼합
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>복장선호</BoldText>
              <NormalText idx={"q21"} onClick={handleDobok} status={isDobok}>
                도복
              </NormalText>
              <NormalText
                idx={"q22"}
                onClick={handleFreeBok}
                status={isFreebok}
              >
                자유복
              </NormalText>
              <NormalText
                idx={"q23"}
                onClick={handleUniform}
                status={isUniform}
              >
                유니폼
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>공격방식</BoldText>
              <NormalText idx={"q61"} onClick={handleAttack} status={isAttack}>
                타격
              </NormalText>
              <NormalText idx={"q62"} onClick={handleGround} status={isGround}>
                그라운드
              </NormalText>
              <NormalText idx={"q63"} onClick={handleMMA} status={isMMA}>
                종합
              </NormalText>
            </DescRow>
          </FilterGroup>
          <FilterGroup>
            <DescRow>
              <BoldText>기원국가</BoldText>
              <NormalText
                idx={"q31"}
                onClick={handleEastern}
                status={isEastern}
              >
                동양
              </NormalText>
              <NormalText
                idx={"q32"}
                onClick={handleWestern}
                status={isWestern}
              >
                서양
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>스포츠화</BoldText>
              <NormalText idx={"q41"} onClick={handleSports} status={isSports}>
                스포츠화 됨
              </NormalText>
              <NormalText
                idx={"q42"}
                onClick={handleNoSports}
                status={isNoSports}
              >
                스포츠화 안됨
              </NormalText>
            </DescRow>
            <DescRow>
              <BoldText>예의강조</BoldText>
              <NormalText
                idx={"q51"}
                onClick={handleCourtesy}
                status={isCourtesy}
              >
                예의강조
              </NormalText>
              <NormalText
                idx={"q52"}
                onClick={handleFreedom}
                status={isFreedom}
              >
                자유로움
              </NormalText>
            </DescRow>
          </FilterGroup>
        </FilterMenu>
        <MartialWrapper>
          {martialData.result?.map((martial) => {
            return (
              <Box2>
                <ContentCard onClick={() => moveToDetailPage(martial.id)}>
                  <img src={martial.img} width="100%" height="100%" />
                </ContentCard>
                <DetailTitle>{martial.name}</DetailTitle>
                <DetailCaption>{martial.caption}</DetailCaption>
              </Box2>
            );
          })}
        </MartialWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default MartialListForm;
