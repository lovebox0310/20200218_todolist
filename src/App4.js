// import React, { useState } from "react";
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
  
    return (
      <Wrap>
        <Top>
          <h1>Todo</h1>
          <form>
            <input type="text" />
            <input type="submit" />
          </form>
        </Top>
        <UL>
            <li>
              <p>
                <input type="checkbox" />
              </p>
              <button>삭제</button>
            </li>
        </UL>
      </Wrap>
    );
}

export default App;
