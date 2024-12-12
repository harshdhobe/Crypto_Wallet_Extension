import React, { useEffect } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import {
    Divider,
    Tooltip,
    List,
    Avatar,
    Spin,
    Input,
    Button,
} from "antd";

import { useNavigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListGroup from 'react-bootstrap/ListGroup';
import TokenCard from "./TokenCard";
import axios from "axios";


const tokens = [
    {
        symbol: "ETH",
        name: "Ethereum",
        balance: 100000000000,
        decimals: 18,
    },
    {
        symbol: "LINK",
        name: "Chainlink",
        balance: 100000000000,
        decimals: 18,
    },
    {
        symbol: "UNI",
        name: "Uniswap",
        balance: 100000000000,
        decimals: 18,
    },
    {
        symbol: "MATIC",
        name: "Polygon",
        balance: 100000000000,
        decimals: 18,
    },
];

const nfts = [
    "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xd774557b647330c91bf44cfeab205095f7e6c367/0xfb76f9ef3adabc27d77c615959f9e22dea24ac7d6a10af3458b3481e5f5e0f10/high.png",
    ,
    "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0x749f5ddf5ab4c1f26f74560a78300563c34b417d/0x90cae88ffc909feab8e4df76abd0652dee98b7bffab29597d898260d91c20aa1/high.jpeg",

];




function WalletView({
    wallet,
    setWallet,
    seedPhrase,
    setSeedPhrase,
    selectedChain
}) {

    const navigate = useNavigate();
    const [tokens, setTokens] = useState(false);
    const [nft, setNfts] = useState(false);
    const [balence, setBalence] = useState(false);

    async function getAccountsToken() {
        const res = await axios.get(`http://localhost:3001/getTokens`, {
            params: {
                userAddress: wallet,
                chain: selectedChain,
            }
        });
        
        const response = res.data;
        
        if (response.tokens.length > 0) {
            setTokens(response.tokens);
        }

        if (response.nfts.length > 0) {
            setNfts(response.nfts);
        }

        setBalence(response.balence);

    }




    function logout() {
        setWallet(null);
        setSeedPhrase(null);
        navigate("/")
        setTokens(null);
        setNfts(null);
        setBalence(0);
        

        // Add any other cleanup logic if necessary
    }

    useEffect(() => {
        if (!wallet || !selectedChain) return;
        setTokens(null);
        setNfts(null);
        setBalence(0);
        getAccountsToken();
    }, [])
    
    useEffect(() => {
        if (!wallet) return;
        setTokens(null);
        setNfts(null);
        setBalence(0);
        getAccountsToken();
    }, [selectedChain]);



    return (
        <>
            <div className="content">

                <div className="logoutButton" onClick={logout}>
                    <LogoutOutlined />

                </div>

                <div className="wallet-part" >
                    Wallet
                    <br></br>
                    <span>Address - </span>
                    {wallet.slice(0, 4)}...{wallet.slice(38)}

                </div>

                <div>
                    <Tabs
                        defaultActiveKey="1"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="Tokens" title="Tokens">
                            <div className="token-card">
                                <TokenCard symbol="ETH" name="Ethereum" />
                                <TokenCard symbol="LINK" name="Chainlink" />
                                <TokenCard symbol="UNI" name="Uniswap" />
                                <TokenCard symbol="MATIC" name="Polygon" />

                            </div>
                        </Tab>
                        <Tab eventKey="NFTs" title="NFTs">
                            {nfts ? (<>
                                {nfts.map((e, i) => {
                                    return (
                                        <>
                                            {e && (
                                                <img
                                                    key={i}
                                                    src={e}
                                                    className="nftImage"

                                                />
                                            )}

                                        </>
                                    )
                                })}

                            </>) : (<>
                                <span>You seem to not have any nfts yet</span>
                                <p className="frontPageBottom">
                                    Find Alt Coin Gems:{" "}
                                    <a
                                        href="https://moralismoney.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        money.moralis.io
                                    </a>
                                </p>

                            </>)}
                        </Tab>
                        <Tab eventKey="Transfer" title="Transfer">
                            <diV></diV>
                        </Tab>
                    </Tabs>
                </div>






            </div>
        </>
    );
}

export default WalletView;