import React from "react";
import { Children } from "react/cjs/react.production.min";
// import { Value } from "sass";
import styled from "styled-components";

const Btn = styled.button`
  width: 70px;
  padding: 10px;
  background: #eee;
  border: 0;
  border-radius: 3px;
  margin-left: 10px;
  box-sizing: border-box;
`;

// const Button = ({ children, handleDeleteBtn, itemId }) => {
const Button = ({props, children, handleDeleteBtn,  }) => {
  // console.log('>> handleDeleteBtn', handleDeleteBtn);
  // console.log('>> children', children);
  // console.log(props);
  // return null;
  return <Btn onClick={(e) => handleDeleteBtn && handleDeleteBtn(props.itemId)}>{children}</Btn>;
  // return <Btn onClick={(e) => props.handleDeleteBtn && props.handleDeleteBtn(props.itemId)}>{props.namevalue}</Btn>;
};

export default Button;