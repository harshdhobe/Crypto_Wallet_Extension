import React from 'react'
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";



const CreateAccount = () => {
    return (
        <div className='content'>

            <div className='mnemonic'>

                <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
                <div>
                    Once you generate the seed phrase, save it securely in order to
                    recover your wallet in the future.
                </div>


            </div>

        </div>
    )
}

export default CreateAccount
