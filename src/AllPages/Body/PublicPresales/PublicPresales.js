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
import Web3 from "web3";

import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';


const PublicPresales = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);

    let web3 = new Web3(window.ethereum);

    const { enqueueSnackbar } = useSnackbar();

    const [show, setShow] = useState(false);

    const [isOpen, setOpen] = useState(false);

    const [deadline, countDown] = useState({});

    const [claimableAmount, setClaimableAmount] = useState(0);

    const [CNTAmount, setCNTAmount] = useState(0)

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

    // let timer = null;
    // function leading0(num) {
    //     return num < 10 ? "0" + num : num;
    // }
    // function getTimeUntil(d) {
    //     const dnow = new Date();
    //     const time = d - dnow;
    //     if (isNaN(time) || time < 0) {
    //         countDown({ days: 0, hours: 0, minutes: 0, seconds: 0});
    //         if (timer) {
    //             clearInterval(timer);
    //         }
    //     } else {
    //         const seconds = getSeconds(time);
    //         const minutes = getMinutes(time);
    //         const hours = getHours(time);
    //         const days = getDays(time);
    //         countDown({ days:days, hours:hours, minutes:minutes, seconds:seconds });
    //     }
    // }
    
    // useEffect(() => {
    //     const d = new Date(1647795600000); //20th March 2022 at 5PM UTC
    //     getTimeUntil(d);
    //     timer = setInterval(() => {
    //         getTimeUntil(d);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        UpdateClaimAmount();
    }, [blockchain.account]);
    useEffect(() => {
        (async () => {
            if (blockchain.tokenContract) {
                const tokenAmount = await blockchain.tokenContract.methods
                    .balanceOf(blockchain.account)
                    .call();
                const decimals = await blockchain.tokenContract.methods
                    .decimals()
                    .call();
                if (decimals !== 0)
                    setCNTAmount(tokenAmount/Math.pow(10, decimals))
            }
        })()
    }, [blockchain.tokenContract])


    const handleSubmit = (value) => {
        const load = async () => {
            let usdtAmount = await blockchain.busdContract.methods
                    .balanceOf(blockchain.account)
                    .call();
            let usdtDecimal = await blockchain.busdContract.methods
                    .decimals()
                    .call();
            console.log(usdtAmount)
            usdtAmount = usdtAmount/usdtDecimal;

            if (parseInt(usdtAmount) < parseInt(value)) {
                enqueueSnackbar(`Insufficient USDT balance. Your balance is ${Number.parseFloat(usdtAmount).toFixed(2)}`, { variant: 'warning' });
                return;
            }

            try {
                console.log("APPROVE", value);

                await blockchain.busdContract.methods
                    .approve(blockchain.smartContract._address, parseInt(value) * Math.pow(10, parseInt(usdtDecimal)))
                    .send({ from: blockchain.account });

                // const separator = 'r=';
                // const offset = separator.length;
                // const href = window.location.href;
                // const begin = href.indexOf(separator) + offset;
                // let addrStr = href.slice(begin, begin + 42);
                // const addrNull = '0x0000000000000000000000000000000000000000';
                // if (addrStr && web3.utils.isAddress(addrStr)) {
                //     if (addrStr == blockchain.account) {
                //         addrStr = addrNull;
                //     }
                // } else {
                //     addrStr = addrNull;
                // }

                // await blockchain.smartContract.methods
                //     .buyTokens(web3.utils.toWei(value.toString(), 'ether'), addrStr)
                //     .send({ from: blockchain.account });

                await blockchain.smartContract.methods
                    .buy(value)
                    .send({ from: blockchain.account });
                
                // dispatch(fetchData());

                // UpdateClaimAmount();

                enqueueSnackbar('You have successfully purchased $CNT', { variant: 'success' });
            } catch (err) {
                enqueueSnackbar('Transaction has been failed', { variant: 'error' });
            }

            setShow(false);
        }
        load();
    }
    async function buyToken() {
        console.log('buy token', blockchain);
        // if (timer) {
        //     clearInterval(timer);
        // }
        if (blockchain.account) {
            setShow(true);
        } else {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            enqueueSnackbar("Please connect to a wallet...", { variant: 'warning' });
        }
    }

    async function claimToken() {
        if (blockchain.account) {
            await blockchain.smartContract.methods
            .claimTokens()
            .send({ from: blockchain.account });
        } else {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            enqueueSnackbar("Please connect to a wallet...", { variant: 'warning' });
        }

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
            <BuyDlg show={show} handleClose={handleClose} handleSubmit={handleSubmit} price={data.cntPrice}></BuyDlg>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tX6K1nAxEIc" onClose={() => setOpen(false)} />
            {/*----------------------------------- Round one/// */}
            {/* {parseInt(data.activeRound) == 0 ?
                <div className='container'>
                <div className='presales-card live-section'>
                    <div className='lh-1 pt-3'>
                        <div className='public-heading'>
                            <h3> PUBLIC PRESALE</h3>
                            <p>ICO Round #1</p>
                        </div>
                    </div> 
                    <button className='upcoming-btn' disabled={true}>UPCOMING</button>
                    <button className='tutorial-btn' onClick={()=> setOpen(true)}><h6>How To Buy Tutorial</h6></button>
                    <div align="center">
                        <ProgressBar>
                        </ProgressBar>
                    </div>
                    <div className='private-bnb text-dark'>
                        <p><strong>0 BUSD</strong></p>
                        <p>
                            <strong>500,000 BUSD</strong> <br />
                            <button className='hard-cup' disabled={true}>HARD CAP FOR ROUND 1 : 500,000 BUSD</button>
                        </p>
                    </div>
                    <div className='public-bycnt'>
                        <Row className='mx-auto'>
                            <Col sm={12} md={4} className='roundOne pt-0'>
                                <div className='roundOneUSD'>
                                    <div className='me-3'>
                                        <div className='d-flex'>
                                            <img src={pIco} alt="" />
                                            <div className='text-start ps-2'>
                                                <span className='text-secondary'>1 CNT</span>
                                                <h6 style={{ fontWeight: '800' }}>$0.0075</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={4}>
                            <div className='d-flex mb-4' style={{justifyContent: 'center', border: 'double 6px #09e426', borderRadius: '40px', padding: '10px'}}>
                                    <div className='text-start ms-2'>
                                        <h5 className='text-secondary' style={{textAlign: 'center'}}>Round #1 starts in:</h5>
                                        <h4 style={{fontWeight: '800', textAlign: 'center'}}>
                                            {leading0(deadline.days)}d&nbsp;
                                            {leading0(deadline.hours)}h&nbsp;
                                            {leading0(deadline.minutes)}m&nbsp; 
                                            {leading0(deadline.seconds)}s
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={4} className='roundOne pt-0'>
                                <div>
                                    <div>
                                        <div className='total-invisitor'>
                                            <img src={inPurple} alt="" />
                                            <div className='text-start ps-2'>
                                                <span className='text-secondary'>Total Investors</span>
                                                <h6 style={{ fontWeight: '800' }}>0</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            : */}
            {parseInt(data.activeRound) > 1 ?
                <FilledCard 
                    roundNumber={1} 
                    hardCap={`${numberFormatter.format(web3.utils.fromWei(data.roundInfo1['hardCap'].toString(), 'ether'))}`}
                    price={data.roundInfo1['cntPrice'] / 10000}
                    investors={Number(data.investors1)}
                    period={data.roundInfo1['endTime'] - data.roundInfo1['startTime']}>
                </FilledCard>
            :
                <div className='container'>
                    <div className={data.activeRound == 1 ? 'presales-card live-section mb-4' : 'presales-card mb-4'}>
                        <div className='lh-1 pt-3'>
                            <div className='public-heading'>
                                <h3> PUBLIC PRESALE</h3>
                                <p>ICO Round #1</p>
                            </div>
                        </div> 
                        {parseInt(data.activeRound) < 1 ? 
                        <button className='upcoming-btn' disabled={true}>UPCOMING</button>
                        : parseInt(data.activeRound) == 1 && 
                        <>
                        <button className='presales-btn' disabled={true}>LIVE</button>
                        <button className='tutorial-btn' onClick={()=> setOpen(true)}><h6>How To Buy Tutorial</h6></button>
                        </>
                        }
                        <div align="center">
                            <ProgressBar 
                                now={web3.utils.fromWei(data.busdAmount1.toString(), 'ether')} 
                                label={data.roundInfo1 && `${Math.floor(data.busdAmount1 / data.roundInfo1['hardCap'] * 100)} %`/*+ &nbsp;*/} 
                                max={data.roundInfo1 && web3.utils.fromWei(data.roundInfo1['hardCap'].toString(), 'ether')}>
                            </ProgressBar>
                        </div>
                        <div className='private-bnb text-dark'>
                            <p><strong>0 BUSD</strong></p>
                            <p>
                                <strong>{data.roundInfo1 && `${ numberFormatter.format(web3.utils.fromWei(data.roundInfo1['hardCap'].toString(), 'ether'))}`} BUSD</strong> <br />
                                <button className='hard-cup' disabled={true}>HARD CAP FOR ROUND 1 : {data.roundInfo1 && `${ numberFormatter.format(web3.utils.fromWei(data.roundInfo1['hardCap'].toString(), 'ether'))}`} BUSD </button>
                            </p>
                        </div>
                        <div className='public-bycnt'>
                            <Row className='mx-auto'>
                                <Col sm={12} md={4}>
                                    <div className='roundOneUSD'>
                                        <div className='me-3'>
                                            <div className='d-flex'>
                                                <img src={pIco} alt="" />
                                                <div className='text-start ps-2'>
                                                    <span className='text-secondary'>1 CNT</span>
                                                    <h6 style={{ fontWeight: '800' }}>${data.roundInfo1 && data.roundInfo1['cntPrice'] / 10000}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <div className='total-invisitor'>
                                                    <img src={inPurple} alt="" />
                                                    <div className='text-start ps-2'>
                                                        <span className='text-secondary'>Total Investors</span>
                                                        <h6 style={{ fontWeight: '800' }}>{Number(data.investors1)}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={12} md={4}>
                                {data.activeRound == '1' &&
                                    <div>
                                        <button className='buyUsdt-btn' onClick={buyToken}><p>BUY CNT</p></button>
                                    </div>
                                }
                                </Col>
                                <Col sm={12} md={4} className='roundOne pt-0'>
                                    <div className='d-flex mb-4' style={{marginTop: '20px'}}>
                                        <div><img style={{ width: '40px', height: '40px'}} src={bxtime} alt="" /></div>
                                        { parseInt(data.activeRound) == 1 ?
                                            <div className='text-start ms-2'>
                                                <span className='text-secondary'>Round #1 ends</span>
                                                <h6 className='text-secondary'>when Hard Cap is reached</h6>
                                            </div>
                                            : parseInt(data.activeRound) > 1 ?
                                            <div className='text-start ms-2'>
                                                <span className='text-secondary'>Round #1</span>
                                                <h6 style={{fontWeight: '800'}}>FILLED</h6>
                                            </div>
                                            :
                                            <div className='text-start ms-2'>
                                                <span className='text-secondary'>Round #1 starts in...</span>
                                                <h6 style={{fontWeight: '800'}}>18 days</h6>
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            }
            {/* //-----------------------------------Claim */}
            <Container>
            <div className={data.activeRound == 3 && data.roundInfo3['active'] == false? 'claim-card live-claim' : 'claim-card'}>
                <div className='public-heading lh-1 pt-3'>
                    <h3>CLAIM CRINET</h3>
                    <p>$CNT Address : 0x17d0b69a947Db94c825c07216905103dca2Dc732</p>
                </div>
                <div className='cex-listing'>
                <Row>
                    <Col sm={12} md={4}>
                    <div className='listing-date'>
                    <div className='text-white text-start'>
                            <h6 className='text-secondary'>Your Balance Of CNT</h6>
                            <h6 style={{color: 'black', fontWeight: '800'}}>{CNTAmount}</h6>
                    </div>
                    </div>
    
                    </Col>
                    
                    <Col sm={12} md={4}>
                        {Date.now() > 1649894400000 ?
                            <button className='buyUsdt-btn' onClick={claimToken}><p>Claim CNT</p></button>
                            :
                            <button className='buyUsdt-btn' disabled><p>Claim CNT</p></button>

                        }
                        
                    </Col>
                    <Col sm={12} md={4}>
                    <div className='listing-date'>
                    <div className='text-white text-start'>
                        <h6 className='text-secondary'>You can claim after</h6>
                        <h6 style={{color: 'black', fontWeight: '800'}}>14/04/2022</h6>
                    </div>
                    </div>
                    </Col>
                </Row>
                </div>

            </div>
            
            </Container>
        </div>
    );
};

export default PublicPresales;