import React from 'react'
import styled from "styled-components"
import Login from "../Login"


function Header() {
  return (
    <Container> 
       <Login />
    </Container>
  )
}

export default Header

const Container=styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    padding-left:20px;
    padding-top:10px;
    flex-direction:column;
    top:0;
    right:0;
    @media(max-width: 68px){
      flex-direction: column;
    }
   
`

