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
    const [currentItem, setCurrentItem] = useState([
      {id: 0, title : '할일 목록을 만들기', checked : false} // 할밀 목록 제어하기 위한 리스트
    ]); 

    // form evnet
    const onChangeSubmit = (e) =>{ // 텍스트 값을 감지해서 currentText 값을 변경함.
      e.preventDefault(); // submit 누르면 이벤트를 명시적으로 처리 하지 않은 경우, 해당 이벤트에 대한 기본 동작을 실행 하지 않도록 제어.

      // const el = setCurrentItem(e.target.value);
      
      const el = e.target.querySelector("input"); // 엔터나 버튼으로 이벤트를 발생시 form이 이벤트의 target임 안쪽의 input태그를 참조함.
      const txt = el.value;
      if(txt === '') {
        alert("todo list add me");
        return;
      }
      
<<<<<<< HEAD
      const count = currentItem.length - 1;
      
      console.log(count, "id :::::::::::::??");
      setCurrentItem([...currentItem, { id: count + 1, title: txt, checked: false }]);
=======
      const lastTodo = currentItem[currentItem.length - 1]; // 리스트에서 마지막 할 일을 가져온다.

      console.log(lastTodo, "lastTodo :::::::::::::??");

      const id = lastTodo === undefined ? 0 : lastTodo.id; // 리스트에 아무것도 없으면 undefined이고 id값은 0으로 셋팅 id값은 중요함.

      console.log(id, "id :::::::::::::??");

      setCurrentItem([...currentItem, { id: id + 1, title: txt, checked: false }]);

>>>>>>> refs/remotes/origin/main
      el.value = "";
    }

    const handleDeleteBtn = (e , id) => {
      // const id = Number(e.target.dataset.id);
      // console.log(id, ":::::::::::id");
      const tempList = currentItem.filter((todo) => todo.id !== id);

      console.log(tempList, "tempList :::::::::::");
      setCurrentItem(tempList);
    }



    return (
      <Wrap>
        <Top>
          <h1>Todo</h1>
          <form name="todoForm" id="todoForm" onSubmit={ onChangeSubmit }>
            <input type="text" />
            <input type="submit" />
          </form>
        </Top>
        <UL>    
            {currentItem.map( (item) => (
              <li key={item.id}>
                <p>
                  <input type="checkbox" value={item.checked} />
                  {item.id} :: {item.title}
                </p>
                <button onClick={(e)=>handleDeleteBtn(e, item.id)}>삭제</button>
                {/* <button onClick={handleDeleteBtn} data-id={item.id}>삭제</button> */}
              </li>
            ))}
        </UL>

       

      </Wrap>
    );
}

export default App;
