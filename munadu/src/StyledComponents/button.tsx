import React from "react";
import styled from "styled-components";

const Button = styled.button<{ color?: string }>`
  margin: 10px;
  cursor: pointer;
  background-color: ${(props) =>
    props.color === "white"
      ? props.theme.color.white
      : props.theme.color.black};
  color: ${(props) =>
    props.color === "white"
      ? props.theme.color.black
      : props.theme.color.white};
  padding: 7px;
  border-radius: 5px;
  font-weight: 500;
  outline: none;
  border: none;
`;

export default Button;
