import React from 'react'
import styled from "styled-components"
import {Route,Link} from "react-router-dom"


function Section({title,location,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
           <h1> {title}</h1>
        </ItemText>
      <Buttons>
    <ButtonGroup>
       <LeftButton>
         <Link to={location}>Features</Link>
       </LeftButton>
       <RightButton>
         {rightBtnText}
       </RightButton>
    </ButtonGroup>
    <DownArrow src="/Images/down-arrow.png" />
    </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap=styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    background-image: ${props => `Url("/Images/${props.bgImage}")` }

`
const ItemText = styled.div`
    padding-top: 8vh;
    text-align:center;
    text-transform: uppercase;
    text-shadow:2px 2px black;
`

const ButtonGroup=styled.div`
   display: flex;
   margin-bottom: 0px;
   @media(max-width: 768px){
     flex-direction: column;
   }
`
const LeftButton=styled.div`
   background: white;
   opacity: 0.65;
   color: black;
   height:30px;
   width:200px;
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:100px;
   text-transform: uppercase;
   font-size: 14px;
   cursor: pointer;
   margin-bottom:5px;

`

const RightButton=styled(LeftButton)`
   background: white;
   opacity: 0.65;
   color: black;
`

const DownArrow= styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`
const Buttons= styled.div`


`