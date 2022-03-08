import React from 'react'
import styled from 'styled-components'

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`

const Check = (props) => {
  return <Checkbox {...props} />
}

export default Check
