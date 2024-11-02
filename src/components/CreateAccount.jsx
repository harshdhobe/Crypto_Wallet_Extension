import React from 'react'
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';



const CreateAccount = () => {
    const navigate = useNavigate();
    return (
        <div className='content'>

            <div className='mnemonic'>

                <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
                <div>
                    Once you generate the seed phrase, save it securely in order to
                    recover your wallet in the future.
                </div>
            </div>
            <Button type="primary" className='frontPageButton'>Generate Seed Phrase</Button>
            <Card className='seedPhraseContainer'></Card>
            <Button type="primary" className='frontPageButton'>Open Your New Wallet</Button>
            
            <p className='frontPageBottom'
                onClick={() => navigate("/")}
            >Back Home</p>




        </div>
    )
}

export default CreateAccount
