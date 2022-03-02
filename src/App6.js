import React from "react";
import {useState, useRef} from "react";


// 타이틀 컴포넌트
const Title = ({todoList}) => { // todolist  배열을 받음
    const doing = todoList.filter((item) => item.state === 'doing').length; // 배열의 state값과 doing이 같은 length값
    const done = todoList.filter((item) => item.state === 'done').length;
    return (
        <>
            <h1>할일 목록</h1>
            <p>할일 : {doing}</p>
            <p>할야 할 일 : {done}</p>
        </>
    )
}

const Form = ({onAdd, inputRef}) => { // form 컴포넌트
    const onKeyDownEnter = (e) => {
        if (e.key !== 'Enter') {
            return
        }
        onAdd()
    }
    return (
        <>
            <input type="text" ref={inputRef} onKeyDown={onKeyDownEnter}  />
            <input type="button" onClick={onAdd} value="버튼" />
        </>
    )
}

const ListItem = ({todoList, onChangeState, onDelete}) => {
    const getTodoList = () => {
        if(todoList && todoList.length < 1 ){
            return <></>
        }
        return todoList.map((item) => (
            <li key={item.id}>
                <input type="checkbox" data-id={item.id} defaultChecked={item.state === 'done'} onChange={onChangeState}/>
                {item.todo}
                <input type="button" data-id={item.id} value="삭제" onChange={onDelete} />
            </li>
        ));
    }
    const todoListUi = getTodoList(todoList)
    return (
        <>
            <ul>{todoListUi}</ul>
        </>
    )
}


const app6 = () => {
    const inputRef = useRef();
    const [todoList, setTodoList] = useState([
        { id: 0, todo: '컴포넌트 형식으로 만들기.', state: 'doing' },
    ]);
    const onAdd = (e) => { // form
        if (!inputRef.current.value) {
            return;
        }
        console.log(todoList.length);
        const nextId = todoList.length ? todoList[todoList.length -1].id + 1 : 0;
        const todo = inputRef.current.value;
        setTodoList((item) => [...todoList, { id: nextId, todo: todo, state: 'doing' }]); // 배열을 받아와 재 배열

        inputRef.current.value = '';
    }
    const onChangeState = (e) => {
        const targetTodoId = Number(e.target.dataset.id)
        const changedTodoList = todoList.map((item) => (
            item.id === targetTodoId ? item.state === 'doing' ? {...item, state : 'done'} : {...item, state: 'doing'} : item
        ));
        setTodoList(changedTodoList);
    }

    const onDelete = (e) => {
        console.log( "???")
        const targetTodoId = Number(e.target.dataset.id);
        const changeTodoList = todoList.filter((item) => (item.id !== targetTodoId));
        setTodoList(changeTodoList)
    }

    return (
        <div>
            <Title todoList={todoList} />
            {/*타이틀 컴포넌트로 배열을 전달 */}
            <Form onAdd={onAdd} inputRef={inputRef} />
            <ListItem todoList={todoList} onChangeState={onChangeState} onDelete={onDelete} />
        </div>
    )
}

export default app6;