import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"
import Home from "./components/Home"
import Car from "./components/Car"

function App() {

  return (
    <div className="App">
        <Header />
          < Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/car/:carName" element={ <Car/>} />
        </Routes>
    </div>   
  );
}

export default App;
