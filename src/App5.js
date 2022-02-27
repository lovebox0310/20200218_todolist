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
