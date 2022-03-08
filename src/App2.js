import React, { useState } from 'react'
import './assets/css/reset.css'
import styled from 'styled-components'

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
    input[type='checkbox'] {
      margin-right: 10px;
    }
  }
`
const P = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.color || '#333'};
  text-decoration: ${(props) => props.textDecoration || 'none'};
`

const App = () => {
  const [currentItem, setCurrentItem] = useState([
    { id: 0, title: '할일 목록을 만들기', checked: false }, // 할밀 목록 제어하기 위한 리스트
  ])
  const onChangeSubmit = (e) => {
    // 텍스트 값을 감지해서 currentText 값을 변경함.
    e.preventDefault() // submit 누르면 이벤트를 명시적으로 처리 하지 않은 경우, 해당 이벤트에 대한 기본 동작을 실행 하지 않도록 제어.

    // const el = setCurrentItem(e.target.value);
    const el = e.target.querySelector('input') // 엔터나 버튼으로 이벤트를 발생시 form이 이벤트의 target임 안쪽의 input태그를 참조함.
    const txt = el.value
    if (txt === '') {
      alert('todo list add me')
      return
    }

    /** 리스트의 길이로 카운트 하는 방식은 할 일 삭제시에 중복 문제가 발생함. */
    // const count = currentItem.length - 1;
    /** 리스트의 마지막 아이템의 id를 참조해야 중복 문제가 안생김. */
    const count = currentItem[currentItem.length - 1]

    console.log(count.id, 'id :::::::::::::??')
    setCurrentItem([
      ...currentItem,
      { id: count.id + 1, title: txt, checked: false },
    ])
    el.value = ''
  }

  const handleDeleteBtn = (id) => {
    // const id = Number(e.target.dataset.id);
    // console.log(id, ":::::::::::id");

    const tempList = currentItem.filter((todo) => todo.id !== id)

    console.log(tempList, 'tempList :::::::::::')
    setCurrentItem(tempList)
  }

  const handleCheckBox = (id) => {
    const tempList = currentItem.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked
      }
      return todo
    })
    setCurrentItem(tempList)
  }

  return (
    <Wrap>
      <Top>
        <h1>Todo</h1>
        <form onSubmit={onChangeSubmit}>
          <input type="text" />
          <input type="submit" />
        </form>
      </Top>
      <UL>
        {currentItem.map((item) => (
          <li key={item.id}>
            <P
              color={item.checked ? '#aaa' : '#333'}
              textDecoration={item.checked ? 'line-through' : 'none'}
            >
              <input
                type="checkbox"
                value={item.checked}
                onChange={() => handleCheckBox(item.id)}
              />
              {item.id} :: {item.title}
            </P>
            <button onClick={() => handleDeleteBtn(item.id)}>삭제</button>
            {/* <button onClick={handleDeleteBtn} data-id={item.id}>삭제</button> */}
          </li>
        ))}
      </UL>
    </Wrap>
  )
}

export default App
