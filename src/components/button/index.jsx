<<<<<<< HEAD
import React from "react";
import { Children } from "react/cjs/react.production.min";
// import { Value } from "sass";
import styled from "styled-components";
=======
import React from 'react'
import styled from 'styled-components'
>>>>>>> 509cd0d7eecc32511ab0ba5078f314f10484d054

const Btn = styled.button`
  width: 70px;
  padding: 10px;
  background: #eee;
  border: 0;
  border-radius: 3px;
  margin-left: 10px;
  box-sizing: border-box;
`

<<<<<<< HEAD
// const Button = ({ children, handleDeleteBtn, itemId }) => {
const Button = ({props, children, handleDeleteBtn,  }) => {
  // console.log('>> handleDeleteBtn', handleDeleteBtn);
  // console.log('>> children', children);
  // console.log(props);
  // return null;
  return <Btn onClick={(e) => handleDeleteBtn && handleDeleteBtn(props.itemId)}>{children}</Btn>;
  // return <Btn onClick={(e) => props.handleDeleteBtn && props.handleDeleteBtn(props.itemId)}>{props.namevalue}</Btn>;
};
=======
const Button = ({ children, handleDeleteBtn, itemId }) => {
  return (
    <Btn onClick={(e) => handleDeleteBtn && handleDeleteBtn(itemId)}>
      {children}
    </Btn>
  )
}
>>>>>>> 509cd0d7eecc32511ab0ba5078f314f10484d054

export default Button
