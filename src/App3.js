import React, { useState } from "react";
import "./assets/css/reset.css";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 20px;
`
const Top = styled.div``
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
      { id: 0, title: '할일 목록 을 만들자', checked : false }
    ]);

    const onSubmit = (e) =>{
      e.preventDefault();

      const el = e.target.querySelector('input');
      const text = el.value;

      if(text === '') return;

      const list = currentText[ currentText.length - 1 ];

      console.log(list, "lastTodo :::::::::::::??");

      const id = list === undefined ? 0 : list.id;
      
      console.log(id, "id :::::::::::::??");
      
      
      setCurrentText([...currentText, { id: id + 1, title: text, checked: false }]);
      
      
      el.value = "";
    }

    return (
      <Wrap>
        <Top>
          <h1>title</h1>
          <form onSubmit={onSubmit}>
            <input type="text" />
            <input type="submit" />
          </form>
        </Top>
        <UL>
          {currentText.map( (item)  => ( 
            <li key={item.id}>
              <p>
                <input type="checkbox" value={item.checked} />
                {item.title}
              </p>
              <button>삭제</button>
            </li>
          ))}
        </UL>
      </Wrap>
    );
}

export default App;
