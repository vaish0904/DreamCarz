import { useState, useEffect } from "react"
import { carData } from "../carData"
import { useParams } from "react-router-dom"
import "../App.css"

const Car = () => {
    const [carInfo, setCarInfo] = useState({})
    const {carId} = useParams()

    const getCarDetails = () => {
      const carRes = carData.filter((car)=>car.id === carId)
      console.log(carRes)
      setCarInfo(carRes[0])
    }
    
    useEffect(()=>{
        getCarDetails()
    },[carId])

  return(
    <div >
        <h1 style={{color: "black"}}>{carInfo.name}</h1>
        <h3 style={{color: "red"}}>{carInfo.price}</h3>
        <div>
        <img  className= "interiorImage" src={carInfo.img1} alt="no image" /> 
        <img  className= "interiorImage" src={carInfo.img2} alt="no image" /> 
        <img  className= "interiorImage" src={carInfo.img3} alt="no image" /> 
        <img  className= "interiorImage" src={carInfo.img4} alt="no image" /> 
        </div>
        <h2 style={{color: "black"}}>Details</h2>
        <p style={{color: "black"}}>
          <br />
          {carInfo.details}
          </p>
          <br />
        <img src={carInfo.description} alt="" />
    </div>
  )
}

export default Car