import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section
           title="Hyundai Verna"
           backgroundImg="Hyundai-Verna.jpg"
           location="/car/1"
           rightBtnText="Order Now"
        />
        <Section  
        title="Hyundai Venue"
        backgroundImg="Hyundai-Venue.jpg"
        location="/car/2"
        rightBtnText="Order Now"
        />
        <Section
        title="Maruti Ciaz"
        backgroundImg="Maruti-Ciaz.jpg"
        location="/car/3"
        rightBtnText="Order Now"
        />
        <Section
        title="Maruti Suzuki Baleno"
        backgroundImg="Maruti-Suzuki-Baleno.jpg"
        location="/car/4"
        rightBtnText="Order Now"
        />
         <Section  
        title="Maruti Suzuki Dzire"
        backgroundImg="Maruti-Suzuki-Dzire.jpg"
        location="/car/5"
        rightBtnText="Order Now"
        />
         <Section  
        title="Tata Nexon XE"
        backgroundImg="Tata Nexon XE.png"
        location="/car/6"
        rightBtnText="Order Now"
        />
         <Section  
        title="Tata Altroz"
        backgroundImg="Tata-Altroz.jpg"
        location="/car/7"
        rightBtnText="Order Now"
        />
         <Section  
        title="Tata Tigor"
        backgroundImg="Tata-Tigor.jpg"
        location="/car/8"
        rightBtnText="Order Now"
        />
         <Section  
        title="Volkswagen-Polo"
        backgroundImg="Volkswagen-Polo.jpg"
        location="/car/9"
        rightBtnText="Order Now"
        />
        

    </Container>
  )
}

export default Home

const Container=styled.div`
   height:100vh;
`