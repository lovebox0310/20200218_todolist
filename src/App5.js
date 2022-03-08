<<<<<<< HEAD
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
    const todoList = todo && todo.id >= 0 ? todo.id + 1 : 0;
    console.log(todo, ":::::::::::");
    setCurrentText([
      ...currentText, // 배열 전체를 받아와서
      { id: todoList, title: value, checked: false }, //
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
            {/* <Btn itemId={item.id} handleDeleteBtn={handleDeleteBtn}> */}
            <Btn value={item.id} onClick={handleDeleteBtn}>
              삭제
            </Btn>
          </li>
        ))}
      </UL>
    </Wrap>
  );
};

export default App;
=======
import React, { useRef, useState } from 'react'

const Title = ({ todoList }) => {
  const doing = todoList.filter((t) => t.state === 'doing').length
  const done = todoList.filter((t) => t.state === 'done').length
  return (
    <>
      <h1>React Todo list</h1>
      <h3>할 일: {doing}</h3>
      <h3>해야 할 일: {done}</h3>
    </>
  )
}

const Form = ({ onAdd, inputRef }) => {
  const onKeyDownEnter = (e) => {
    if (e.key !== 'Enter') {
      return
    }
    onAdd()
  }
  return (
    <>
      <input type="text" ref={inputRef} onKeyDown={onKeyDownEnter} />
      <input type="button" onClick={onAdd} value="+" />
    </>
  )
}

const List = ({ todoList, onChangeState, onDelete }) => {
  const getTodoListUi = () => {
    if (todoList && todoList.length < 1) {
      return <></>
    }

    return todoList.map((t) => (
      <li key={t.id}>
        <input
          type="checkbox"
          data-id={t.id}
          defaultChecked={t.state === 'done'}
          onChange={onChangeState}
        />
        {t.todo}
        <input type="button" data-id={t.id} value="X" onClick={onDelete} />
      </li>
    ))
  }
  const todoListUi = getTodoListUi(todoList)
  return (
    <>
      <ul>{todoListUi}</ul>
    </>
  )
}

const App5 = () => {
  const inputRef = useRef()
  const [todoList, setTodoList] = useState([
    { id: 0, todo: '컴포넌트 형식으로 만들기.', state: 'doing' },
  ])
  const onAdd = (e) => {
    if (!inputRef.current.value) {
      return
    }
    const nextTodoId = todoList.length
      ? todoList[todoList.length - 1].id + 1
      : 0
    const todo = inputRef.current.value

    setTodoList((todoList) => [
      ...todoList,
      { id: nextTodoId, todo: todo, state: 'doing' },
    ])
    inputRef.current.value = ''
  }
  const onChangeState = (e) => {
    const targetTodoId = Number(e.target.dataset.id)
    const changedTodoList = todoList.map((t) =>
      t.id === targetTodoId
        ? t.state === 'doing'
          ? { ...t, state: 'done' }
          : { ...t, state: 'doing' }
        : t
    )
    setTodoList(changedTodoList)
  }
  const onDelete = (e) => {
    const targetTodoId = Number(e.target.dataset.id)
    const changedTodoList = todoList.filter((t) => t.id !== targetTodoId)
    setTodoList(changedTodoList)
  }
  return (
    <>
      <Title todoList={todoList} />
      <Form onAdd={onAdd} inputRef={inputRef} />
      <List
        todoList={todoList}
        onChangeState={onChangeState}
        onDelete={onDelete}
      />
    </>
  )
}

export default App5
>>>>>>> 97dd3c242909149da5ff5f4a710a4d0c68133053
