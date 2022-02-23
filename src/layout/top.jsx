
import React from "react";
import styled from "styled-components";


const TopItem = styled.div`
    
    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      input {
        flex: 3;
      }
      input + input {
        flex: 1;
        margin-left: 10px;
      }
    }
 
`



const Top = ({ children }) => {
  return <TopItem>{ children }</TopItem>
}

export default Top;