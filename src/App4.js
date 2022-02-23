// import React, { useState } from "react";
import "./assets/css/reset.css";
import styled from "styled-components";

import TopItem from "./layout/top";
import Input from "./components/input";
import Btn from "./components/button";
import Checkbox from "./components/checkbox";
import { useState } from "react";

const Wrap = styled.div`
  padding: 20px;
`;
const UL = styled.ul`
  margin-top: 20px;
  width: 100%;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    p {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #333;
    }
    input[type="checkbox"] {
      margin-right: 10px;
    }
  }
`;

const App = () => {
  const [currentText, setCurrentText] = useState([
    { id: 0, title: "text", checked: false },
  ]);

  const onChangeSubmit = (e) => {
    e.preventDefault();
    const el = e.target.querySelector("input");
    const value = el.value; // 타겟의 텍스트 값을 저장
    console.log(value);
    if (value === "") {
      // 값이 비었으면 리턴
      alert("Meassge Add Me");
      return;
    }

    const todo = currentText[currentText.length - 1]; // 배열의 마지막 배열을 찾아 값을 저장.
    console.log(todo, ":::::::::::");
    setCurrentText([
      ...currentText, // 배열 전체를 받아와서
      { id: todo.id + 1, title: value, checked: false }, //
    ]);
    el.value = "";
  };

  const handleDeleteBtn = (id) => {
    const tempList = currentText.filter((todo) => todo.id !== id);
    console.log(tempList, "::::::::");
    setCurrentText(tempList);
  };

  return (
    <Wrap>
      <TopItem>
        <h1>{}</h1>
        <form onSubmit={onChangeSubmit}>
          <Input />
          <Btn>입력</Btn>
        </form>
      </TopItem>
      <UL>
        {currentText.map((item) => (
          <li key={item.id}>
            <p>
              <Checkbox type="checkbox" value={item.checked} />
              {item.title}
            </p>
            <Btn itemId={item.id} handleDeleteBtn={handleDeleteBtn}>
              삭제
            </Btn>
          </li>
        ))}
      </UL>
    </Wrap>
  );
};

export default App;
