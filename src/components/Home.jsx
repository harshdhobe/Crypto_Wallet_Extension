import React from 'react'
import logo from '../assets/mwallet.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    return (
        <div className='Content'>
            <img src={logo} className='frontPageLogo' />

            <div className='myContent'>
                <h2>Hey There 👋 </h2>
                <h5>Welcome to your Web3 Wallet.</h5>
            </div>

            <div className='frontPageButton'>

                <div class="d-grid gap-2 custom-container">
                    <button class="btn btn-primary" type="button"
                        onClick={() => navigate("/yourWallet")}

                    >Create a Wallet</button>

                </div>

                <div class="d-grid gap-2 custom-container">
                    <button class="btn btn-secondary" type="button"
                        onClick={() => navigate("/Recover")}

                    >SignIn with seed phrase</button>

                </div>


            </div>

        </div>
    )
}

export default Home;
