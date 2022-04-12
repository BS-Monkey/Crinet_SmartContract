import React, { useEffect, useState } from 'react';
import { Col, Container, Row,} from 'react-bootstrap';
import logo from '../../../asset/logo.png';
import './Navigation.css'

import ReactTooltip from "react-tooltip";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../../redux/blockchain/blockchainActions";
import { fetchData } from "../../../redux/data/dataActions";

import { initWeb3Onboard } from '../../../services'
import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react'

let provider;
const ethChainId = '0x4';
// const ethChainId = '0x61';

const Navigation = () => {
    ///////////// web3-onboard /////////////
    const [{ wallet }, connectWallet, disconnectWallet] = useConnectWallet();
    const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
    const connectedWallets = useWallets();
  
    const [web3Onboard, setWeb3Onboard] = useState(null);
  
    useEffect(() => {
      setWeb3Onboard(initWeb3Onboard);

    //   dispatch(fetchData());
    }, [])

    useEffect(() => {
      if (!connectedWallets.length) return;
  
      const connectedWalletsLabelArray = connectedWallets.map(
        ({ label }) => label
      )
      window.localStorage.setItem(
        'connectedWallets',
        JSON.stringify(connectedWalletsLabelArray)
      )
    }, [connectedWallets]);
  
    useEffect(() => {
      console.log('wallet', wallet)
      console.log('chain id', connectedChain)
      if (wallet && connectedChain?.id !== ethChainId) {
        setChain({chainId: ethChainId});
      }

      if (!wallet?.provider) {
        provider = null;
      } else {
        provider = wallet.provider;
      }
      if (wallet && connectedChain?.id === ethChainId)
      {
        dispatch(connect(wallet.accounts[0].address, provider));
        getData();
      }
    }, [wallet, connectedChain]);
  
    // useEffect(() => {
    //   const previouslyConnectedWallets = JSON.parse(
    //     window.localStorage.getItem('connectedWallets')
    //   )
  
    //   if (previouslyConnectedWallets?.length) {
    //     async function setWalletFromLocalStorage() {
    //       await connectWallet({ autoSelect: previouslyConnectedWallets[0] })
    //     }
    //     setWalletFromLocalStorage();
    //   }
    // }, [web3Onboard, connectWallet])
  
    // const readyToTransact = async () => {
    //   if (!wallet) {
    //     const walletSelected = await connectWallet();
    //     if (!walletSelected) return false;
    //   }

    //   await setChain({ chainId: ethChainId });
  
    //   return true;
    // }
    /////////////////////////

    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);

    const getData = () => {
    //   dispatch(fetchData());
    };

    useEffect(() => {
        let timer = setInterval(() => {
        getData();
      }, 3000);
    
      // return () => clearInterval(timer);
    });

    return (
        <div className='mt-5 pt-4'>

        <Container>
        <Row className='my-3'>
            <Col sm={12} md={4}>
                <div className='affiliate'>
                    <a className='affiliate-programe' href='#AffiliateProgram'>AFFILIATE PROGRAM</a>
                </div>
            </Col>
            <Col sm={12} md={4}>
                <div className='mt-sm-2'>
                <nav className='affiliate'>
                    <img src={logo} alt="" /> <span className='ico'>ICO PRESALE</span> 
                </nav>
                </div>
            </Col>
            <Col sm={12} md={4}>  
                <div className='affiliate'>
                {wallet && connectedChain?.id === ethChainId && wallet?.accounts[0]?.address ? (
                      <button className='wallet-btn' onClick={
                        () => {
                          connectWallet();
                        }}>
                              {`${wallet.accounts[0].address.slice(0, 5) + "..." + wallet.accounts[0].address.slice(38)}`}
                      </button>
                  ) : wallet ?
                      <button className='wallet-btn' onClick={
                        (e) => {
                            e.preventDefault();
                            setChain({chainId: ethChainId});
                        }}>
                              Switch Chain
                      </button>
                    :
                    <>
                      <button className='wallet-btn' data-tip data-for="registerTip" onClick={
                          (e) => {
                              e.preventDefault();
                              connectWallet();
                          }}>
                                Connect Wallet
                      </button>

                      <ReactTooltip id="registerTip" place="bottom" effect="solid">
                        <p style={{margin: 0}}>Must have your Wallet chrome extension installed (activate all <br/>
                        the voices in the extens.'s settings) and be sure to have logged in.<br/>
                        Go incognito mode if you still don't find your wallet. <br/>
                        </p>
                      </ReactTooltip>
                    </>
                }
                </div>
            </Col>
        </Row>
        </Container>

        </div>
    );
};

export default Navigation;