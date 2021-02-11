import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';


import { ethers } from 'ethers';


function getEthers() {
    return new ethers.providers.Web3Provider(window.ethereum);
};


function Init() {
    const dispatch = useDispatch;

    const metamask = window.ethereum;
    if (!metamask) {
        // if `window.ethereum` is missing
        // then the user hasn't installed Metamask
        return(
            <h1>Metamask not installed</h1>
        )
    } else {
        dispatch({
            action: 'metamask',
            payload: {
                e: 'available'
            },
        });

        return (
            <h1>Metamask Installed</h1>
        )
    }
}


export default Init;
