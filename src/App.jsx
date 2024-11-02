import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/moralisLogo.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';


function App() {
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (

    <div className='App'>
      <header>
        <img src={logo} className="headerLogo" alt="logo" />
        <select name="selectedChain">
          <option value="0x1">Ethereum</option>
          <option value="0x13881">Mumbai Testnet</option>
          <option value="0x89">Polygon</option>
          <option value="0xa86a">Avalanche</option>

        </select>

        


      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />



        </Routes>

      </BrowserRouter>




    </div>


  )
}

export default App;
