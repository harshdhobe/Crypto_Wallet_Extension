import React, { useState } from 'react'
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
const { TextArea } = Input;
import { useNavigate } from 'react-router-dom';

const RecoverAccount = () => {
    const navigate = useNavigate();
    const [typedSeed, settypedSeed] = useState("");
    const [nonValid, setNonValid] = useState("false");

    function seedAdjust(e) {
        setNonValid("false")
        settypedSeed(e.target.value);
    }


    function recoverWallet() {
        let recoveredWallet;
        try {
            recoveredWallet = ethers.Wallet.fromPhrase(typedSeed);
        } catch (err) {
            setNonValid(true);
            return;
        }

        setSeedPhrase(typedSeed);
        setWallet(recoveredWallet.address);
        navigate("/yourwallet");
        return;
    }

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
                        value={typedSeed}
                        onChange={seedAdjust}
                        autosize={{ minRows: 2, maxRows: 6 }} />
                </div>

                <Button
                    disabled={
                        typedSeed.split(" ").length !== 12 || typedSeed.slice(-1) === " "
                    }
                    className="frontPageButton"
                    type="primary"

                >
                    Recover Wallet
                </Button>

                {nonValid && <p style={{ color: "red" }}> Invalid Seed Phrase</p>}

                <p className='backHome2'
                    onClick={() => navigate("/")}
                >Back Home</p>




            </div>


        </>

    )
}

export default RecoverAccount;
