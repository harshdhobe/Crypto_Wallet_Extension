import React, { useState } from 'react'
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { ethers } from "ethers";
// const { ethers } = require('ethers');



const CreateAccount = ({ setWallet, setSeedPhrase }) => {
    const [newSeedPhrase, setnewSeedPhrase] = useState(null);
    const navigate = useNavigate();

    function generateWallet() {
        const wallet = ethers.Wallet.createRandom();
        const letters = wallet.mnemonic.phrase;
        //console.log(letters);
        setnewSeedPhrase(letters);
    }

    function setWalletAndMnemonic() {
        setnewSeedPhrase(newSeedPhrase);
        setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address)

    }


    return (
        <div className='content'>

            <div className='mnemonic'>

                <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
                <div>
                    Once you generate the seed phrase, save it securely in order to
                    recover your wallet in the future.
                </div>
            </div>
            <Button type="primary" className='frontPageButton'
                onClick={() => generateWallet()}

            >Generate Seed Phrase</Button>
            <Card className='seedPhraseContainer'>
                {newSeedPhrase && <pre style={{ whiteSpace: "pre-wrap" }}>{newSeedPhrase}</pre>}

            </Card>

            <Button type="primary" className='frontPageButton'
                onClick={() => setWalletAndMnemonic()}

            >Open Your New Wallet</Button>

            <p className='frontPageBottom'
                onClick={() => navigate("/")}
            >Back Home</p>




        </div>
    )
}

export default CreateAccount
