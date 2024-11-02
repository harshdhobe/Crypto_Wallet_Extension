import React from 'react'
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
const { TextArea } = Input;
import { useNavigate } from 'react-router-dom';

const RecoverAccount = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='content'>
                <div className='mnemonic'>

                    <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
                    <div>
                        Type your seed phrase in the field below to recover your wallet (it
                        should include 12 words seperated with spaces)
                    </div>
                </div>

                <div className='textArea'>
                    <TextArea placeholder="Enter your Seed Phrase here"
                        autosize={{ minRows: 2, maxRows: 6 }} />
                </div>

                <Button
                    className="frontPageButton"
                    type="primary"

                >
                    Recover Wallet
                </Button>

                <p className='backHome2'
                    onClick={() => navigate("/")}
                >Back Home</p>




            </div>


        </>

    )
}

export default RecoverAccount
