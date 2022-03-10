import React from "react";
import {useState, useRef} from "react";


const Title = ({todoList}) => {
    const doing = todoList.filter((item) => (item.state === 'doing')).length;
    const done = todoList.filter((item) => (item.state === 'done')).length;
    return (
        <div>
            <h1>List</h1>
            <p>할일 : {doing} </p>
            <p>해야 할 일 : {done} </p>
        </div>
    )
}

const Form = ({onAdd, inputRef}) => {
    const onKeyDownEnter = (e) => {
        if (e.key !== 'Enter') {
          return
        }
        onAdd();
    }
    return (
        <>
            <input type="text" ref={inputRef} onKeyDown={onKeyDownEnter} />
            <input type="button" onClick={onAdd} value="등록하기" />
        </>
    )
}


const List = ({todoList, onChangeState, onDelete }) => {

    const getTodoListUi = () => {
        if(todoList && todoList.length < 1) {
            return <></>
        }

        return todoList.map((item) => (
            <li key={item.id}>
                <input type="checkbox"
                    data-id={item.id}
                    defaultChecked={item.state === 'done'}
                    onChange={onChangeState}
                />
                {item.todo}
                <input type="button" data-id={item.id} value="삭제" onClick={onDelete} />
            </li>
        ));
    }

    const todoListUi = getTodoListUi(todoList)
    return (
      <>
        <ul>{todoListUi}</ul>
      </>
    )


}

const app7 = () => {
    const inputRef = useRef();
    const [todoList, setTodoList] = useState([
        {id: 0, todo : '컴포넌트 이해하기', state : 'doing'},
    ]);

    // 
    const onAdd = (e) => {
        if(!inputRef.current.value){
            return; 
        }
        const nextTodoId = todoList.length ? todoList[todoList.length - 1].id + 1 : 0;
        
        const todo = inputRef.current.value;

        setTodoList((todoList) => [ ...todoList,{ id: nextTodoId, todo: todo, state: 'doing' },])

        inputRef.current.value = '';
       
    }
    const onChangeState = (e) => {
        const targetTodoId = Number(e.target.dataset.id)
        const changedTodoList = todoList.map((item) =>
            item.id === targetTodoId  ? item.state === 'doing' ? { ...item, state: 'done' } : { ...item, state: 'doing' } : item
        )
        setTodoList(changedTodoList)
    }
    const onDelete = (e) => {
        const targetTodoId = Number(e.target.dataset.id)
        const changedTodoList = todoList.filter((item) => item.id !== targetTodoId)
        setTodoList(changedTodoList)
    }
    return (
        <div>
            <Title todoList={todoList} />
            <Form onAdd={onAdd} inputRef={inputRef} />
            <List todoList={todoList} onChangeState={onChangeState} onDelete={onDelete} />
        </div>
    )
}

export default app7;