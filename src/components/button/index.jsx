import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  width: 70px;
  padding: 10px;
  background: #eee;
  border: 0;
  border-radius: 3px;
  margin-left: 10px;
  box-sizing: border-box;
`

const Button = ({ children, handleDeleteBtn, itemId }) => {
<<<<<<< HEAD
  // return <Btn onClick={(e) => handleDeleteBtn(itemId)}>{children}</Btn>;
  return <Btn onClick={(e) => handleDeleteBtn(itemId)}>{children}</Btn>;
};
=======
  return (
    <Btn onClick={(e) => handleDeleteBtn && handleDeleteBtn(itemId)}>
      {children}
    </Btn>
  )
}
>>>>>>> 97dd3c242909149da5ff5f4a710a4d0c68133053

export default Button
