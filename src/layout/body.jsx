
import React from "react";
import styled from "styled-components";


const BodyItem = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    /* border-bottom: 1px solid #ddd; */
`



const body = ({ children }) => {
  return <BodyItem>{ children }</BodyItem>
}

export default body;