import express from "express";
import cors from "cors";
import Moralis from "moralis";
const app = express();

const PORT = 3001;

//dotenv configuration 
import dotenv from "dotenv";
dotenv.config();


app.use(cors());
app.use(express.json());


//moralis api calls
app.get("/getTokens", async (req, res) => {

    const { chain, userAddress } = req.query;

    const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
        "chain": chain,
        "address": userAddress,
    });

    //checks needed
    const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
        "chain": chain,
        "address": userAddress,
        "mediaItems": true
    });

    const jsonResponse = {
        tokens: tokens.raw,
        nfts: nfts.raw
    };


    return res.status(200).json(jsonResponse);
});



Moralis.start({
    apiKey: process.env.MORALIS_KEY,
}).then(() => {
    app.listen(PORT, () => {
        console.log("listening for API calls");
    });
});


