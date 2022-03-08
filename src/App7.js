import React from "react";
import {useState, useRef} from "react";


const Title = ({todoList}) => {
    const doing = todoList.filter((item) => (item.state === 'doing')).length;
    const done = todoList.filter((item) => (item.state === 'done')).length;
    return (
        <div>
            <h1>List</h1>
            <p>할일 : {} </p>
            <p>해야 할 일 : {} </p>
        </div>
    )
}

const Form = () => {
    return (
        <>

        </>
    )
}


const app6 = () => {
    const inputRef = useRef();
    const [todoList, setTodoList] = useState([
        {id: 0, todo : '컴포넌트 이해하기', state : 'doing'},
    ]);

    // 값을 
    const onAdd = (e) => {


    }


    return (
        <div>
           <Title todoList={todoList} />
        </div>
    )
}

export default app6;