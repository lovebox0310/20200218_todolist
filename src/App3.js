// import React, { useState } from "react";
import "./assets/css/reset.css";
import styled from "styled-components";
import TopItem from "./layout/top";
import BodyItem from "./layout/body";
import InputTxt from "./components/input";
import Btn from "./components/button";
import Checkbox from "./components/checkbox";
import { useState } from "react";
const Wrap = styled.div`
  padding: 20px;
`
// const Top = styled.div``
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
      {id: 0, text : '첫 할일 리스트 작성', checked: false}
    ]);

    const onChangeSubmit = (e) => {
      e.preventDefault();

      const el = e.target.querySelector('input');
      const txt = el.value;
      
      console.log(txt);

      if (txt === "") {
        alert("todo list add me");
        return;
      }
      
      const arrCount = currentText[currentText.length - 1];
      
      console.log(arrCount);

      setCurrentText([
        ...currentText,
        { id: arrCount.id + 1, text: txt, checked: false },
      ]);

      el.value = '';
    }

    const handleDelete = (e, id) => {
      const tempList = currentText.filter((todo) => todo.id !== id);
      console.log(tempList, "::::::::::");
      setCurrentText(tempList);

    }

    return (
      <Wrap>
        <TopItem>
          <h1>Todo 3</h1>
          <form onSubmit={onChangeSubmit}>
            <InputTxt />
            <InputTxt type="submit" value="입력" />
          </form>
        </TopItem>
        <BodyItem>
          <UL>
            {currentText.map(item =>(
                <li key={item.id}>
                  <p>
                    <Checkbox type="checkbox" name="textInput" id="textInput" value={item.checked}/>
                    {item.text}
                  </p>
                  <button onClick={() => handleDelete(item.id)}>삭제</button>
                </li>
              ))}
          </UL>
        </BodyItem>
      </Wrap>
    );
}

export default App;
