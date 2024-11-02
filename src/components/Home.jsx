import React from 'react'
import logo from '../assets/mwallet.png'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className='Content'>
            <img src={logo} className='frontPageLogo' />

            <div className='myContent'>
                <h2>Hey There 👋 </h2>
                <h5>Welcome to your Web3 Wallet.</h5>
            </div>

            <div className='frontPageButton'>

                <div class="d-grid gap-2 custom-container">
                    <button class="btn btn-primary" type="button">Create a Wallet</button>

                </div>

                <div class="d-grid gap-2 custom-container">
                    <button class="btn btn-secondary" type="button">SignIn with seed phrase</button>

                </div>


            </div>

        </div>
    )
}

export default Home;
