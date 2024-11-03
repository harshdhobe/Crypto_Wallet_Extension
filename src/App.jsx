import { useState } from 'react'
import './App.css'
import logo from './assets/moralisLogo.svg'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import CreateAccount from './components/CreateAccount'
import RecoverAccount from './components/RecoverAccount'


function App() {
  const [selectedChain, setSelectedChain] = useState("0x1");
  const [wallet, setWallet] = useState("null");
  const [seedPhrase, setSeedPhrase] = useState("null");

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
          <Route path="/yourWallet" element={< CreateAccount
            setWallet={setWallet}
            setSeedPhrase={setSeedPhrase}

          />} />
          <Route path="/Recover" element={<RecoverAccount />} />



        </Routes>

      </BrowserRouter>




    </div>


  )
}

export default App;
