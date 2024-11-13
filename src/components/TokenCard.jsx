import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const TokenCard = (props) => {
    return (
        <div className='token-content-card'>
            <div className='first'>
                {props.symbol}
                <br></br>
                {props.name}

            </div>
            <div className='second'>
                0.00 tokens

            </div>

        </div>
    )
}

export default TokenCard;
