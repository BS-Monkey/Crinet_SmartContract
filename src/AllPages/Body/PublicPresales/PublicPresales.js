import React, { useEffect, useState } from 'react';
import { Col, Row, ProgressBar, Container } from 'react-bootstrap';
import pIco from '../../../asset/Crinet Logo_Icon_purpol.png'
import inPurple from '../../../asset/invisitor-purple.png'
import bxtime from '../../../asset/bx_time.png'
import './PublicPresales.css'
import BuyDlg from '../../Modal/BuyDlg';

//
import cIco from '../../../asset/Crinet Logo_Icon.png'
import gIco from '../../../asset/clarity_users-outline-alerted.png'
import '../SeedPhase/SeedPhase.css'
//
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/data/dataActions";
// import Web3 from "web3";

import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


const PublicPresales = () => {
    const dispatch = useDispatch();
    // const blockchain = useSelector((state) => state.blockchain);
    // const data = useSelector((state) => state.data);

    // let web3 = new Web3(window.ethereum);

    const { enqueueSnackbar } = useSnackbar();

    const [show, setShow] = useState(false);

    const [isOpen, setOpen] = useState(false);

    const [deadline, countDown] = useState({});

    const [claimableAmount, setClaimableAmount] = useState(0);

    const handleClose = () => {
        setShow(false);
    }

    async function UpdateClaimAmount() {
        // if (blockchain.account && blockchain.smartContract) {
        //     let amount;
        //     amount = await blockchain.smartContract.methods.claimableAmounts(blockchain.account).call();
        //     setClaimableAmount(amount);
        // }
    }

    function getDays(time) {
        return Math.floor(time / (1000 * 60 * 60 * 24));
    }

    function getHours(time) {
        return Math.floor((time / (1000 * 60 * 60)) % 24);
    }

    function getMinutes(time) {
        return Math.floor((time / 1000 / 60) % 60);
    }

    function getSeconds(time) {
        return Math.floor((time / 1000) % 60);
    }

    const numberFormatter = Intl.NumberFormat('en-US');

    // useEffect(() => {
    //     UpdateClaimAmount();
    // }, [blockchain.account]);


    const handleSubmit = (value) => {
        // const load = async () => {
        //     let busdAmount = await blockchain.busdContract.methods
        //             .balanceOf(blockchain.account)
        //             .call();
                    
        //     busdAmount = web3.utils.fromWei(busdAmount.toString(), 'ether');

        //     if (parseInt(busdAmount) < parseInt(value)) {
        //         enqueueSnackbar(`Insufficient BUSD balance. Your balance is ${Number.parseFloat(busdAmount).toFixed(2)}`, { variant: 'warning' });
        //         return;
        //     }

        //     try {
        //         console.log("APPROVE", value);

        //         await blockchain.busdContract.methods
        //             .approve(blockchain.smartContract._address, web3.utils.toWei(value.toString(), 'ether'))
        //             .send({ from: blockchain.account });

        //         const separator = 'r=';
        //         const offset = separator.length;
        //         const href = window.location.href;
        //         const begin = href.indexOf(separator) + offset;
        //         let addrStr = href.slice(begin, begin + 42);
        //         const addrNull = '0x0000000000000000000000000000000000000000';
        //         if (addrStr && web3.utils.isAddress(addrStr)) {
        //             if (addrStr == blockchain.account) {
        //                 addrStr = addrNull;
        //             }
        //         } else {
        //             addrStr = addrNull;
        //         }

        //         await blockchain.smartContract.methods
        //             .buyTokens(web3.utils.toWei(value.toString(), 'ether'), addrStr)
        //             .send({ from: blockchain.account });
                
        //         dispatch(fetchData());

        //         UpdateClaimAmount();

        //         enqueueSnackbar('You have successfully purchased $CNT', { variant: 'success' });
        //     } catch (err) {
        //         enqueueSnackbar('Transaction has been failed', { variant: 'error' });
        //     }

        //     setShow(false);
        // }
        // load();
    }
    async function buyToken() {
        // if (timer) {
        //     clearInterval(timer);
        // }
        
        // if (blockchain.account) {
        //     setShow(true);
        // } else {
        //     document.body.scrollTop = 0;
        //     document.documentElement.scrollTop = 0;
        //     enqueueSnackbar("Please connect to a wallet...", { variant: 'warning' });
        // }
    }

    async function claimToken() {
        // if (blockchain.account) {
        //     await blockchain.smartContract.methods
        //     .claimTokens()
        //     .send({ from: blockchain.account });
        // } else {
        //     document.body.scrollTop = 0;
        //     document.documentElement.scrollTop = 0;
        //     enqueueSnackbar("Please connect to a wallet...", { variant: 'warning' });
        // }
    }

    const FilledCard = (props) => {
        return (
            <Container>
                <div className='seed-card' style={{marginTop: '1.5rem', marginBottom: '1.5rem', top: 'unset'}}>
                    <div className='text-white lh-1 pt-3'>
                        <h3>PUBLIC PRESALE</h3>
                        <p>ICO Round #{props.roundNumber}</p>
                    </div>
                    <button className='btn-filed' disabled={true}>FILLED</button>
                    <div align="center">
                        {/* <div  className='bold-line'></div> */}
                        <ProgressBar now={100} label='100%' variant="info"></ProgressBar>
                    </div>
                    <div className='private-bnb'>
                        <p><strong>0 BUSD</strong></p>
                        <p><strong>{props.hardCap} BUSD</strong></p>
                    </div>

                    {/* -------------filled in// */}

                <div>
                    <h2 className='text-white trig-text'>FILLED IN</h2>
                <div className='field-in'>
                        <div className='invest-cnt'>
                        <div></div>
                            <img src={cIco} alt="" />
                            <div className='text-start ps-1'>
                                <span className='calculation-box'>1 CNT</span>
                                <h6>${props.price}</h6>
                            </div>    
                        </div>
                        <div className='timing'>
                            <div className='time'> <h3>{getDays(props.period * 1000)}</h3><h6>day</h6></div>
                            <div className='time'> <h3>{getHours(props.period * 1000)}</h3><h6>hour</h6></div>
                            <div className='time'> <h3>{getMinutes(props.period * 1000)}</h3><h6>min</h6></div>
                        </div>
                        <div className='invest-cnt'>
                            <div></div>
                            <div className='text-end pe-1'>
                                <span className='calculation-box'>Total Investors</span>
                                <h6>{props.investors}</h6>
                            </div>
                        <div><img className='w-100' src={gIco} alt="" /></div>
                        </div>
                    </div>
                </div>
                </div>
            </Container>
        );
    }
    
    return (
        <div className='mt-5 pt-4'>
            {/* <BuyDlg show={show} handleClose={handleClose} handleSubmit={handleSubmit} price={data.cntPrice}></BuyDlg> */}
            <BuyDlg show={show} handleClose={handleClose} handleSubmit={handleSubmit} price='1007'></BuyDlg>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tX6K1nAxEIc" onClose={() => setOpen(false)} />
            
        </div>
    );
};

export default PublicPresales;