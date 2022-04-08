import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cTelegram from '../../../asset/telegram-logo.svg'
import cEmail from '../../../asset/email-logo.png'
import './Video.css'

import '../../../../node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video';

const Videos = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tX6K1nAxEIc" onClose={() => setOpen(false)} />
            <Container>
                <div className='help-card'>
                    <div className='public-heading lh-1 pt-3'>
                        <h3>NEED HELP?</h3>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <a href={'mailto: support@crinet.io'}><button className='wallet-btn' style={{ marginLeft: '30px', marginRight: '30px', width: '240px' }}>
                            <div className="btn-content">
                                <img src={cEmail} />
                                <p style={{ margin: '0px' }}>EMAIL SUPPORT</p>
                            </div>
                        </button></a>
                        <a href={'https://t.me/CrinetSupport'}>
                            <button className='wallet-btn' style={{ marginLeft: '30px', marginRight: '30px', width: '240px' }}>
                                <div className="btn-content">
                                    <img src={cTelegram} />
                                    <p style={{ margin: '0px' }}>TELEGRAM LIVE CHAT</p>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div style={{margin: '1.5rem'}}>
                        <button className='affiliate-btn'><h5 style={{margin: '0'}} onClick={()=> setOpen(true)}>How To Buy Tutorial</h5></button>
                    </div>
                </div>
            </Container>

            <Container>
                <div className='claim-card' style={{ opacity: '1', marginBottom: '3rem' }}>
                    <div className='public-heading lh-1 pt-3'>
                        <h3>PEOPLE TALKING ABOUT US</h3>
                    </div>

                    <div className='m-4'>
                        <Row>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/IB9fKXMa1oc">
                                    </iframe>
                                    <h6>Mary Harma - 95.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/6q81gOhoLE0">
                                    </iframe>
                                    <h6>Mia - 20.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/KnkKv-PokrI">
                                    </iframe>
                                    <h6>Cr Juli - 215.000 Subscribers</h6>
                                </div>
                            </Col>

                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/HuyVwEiJuVE">
                                    </iframe>
                                    <h6>Leo MoonShots - 115.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/x7_tf7HUXWw">
                                    </iframe>
                                    <h6>Assen Nowak - 70.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/KyTNT2Lmsng">
                                    </iframe>
                                    <h6>Yassine Geek - 125.000 Subscribers</h6>
                                </div>
                            </Col>

                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/ptImFUvUNX8">
                                    </iframe>
                                    <h6>David in Crypto - 175.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/1ULun5xDeKI">
                                    </iframe>
                                    <h6>Anna Reviews - 99.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/hDggHoUcrAo">
                                    </iframe>
                                    <h6>Crypto Pandas - 12.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/_VCzdamxUcE">
                                    </iframe>
                                    <h6>Laurent Furie - 95.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/taUANU7N2F4">
                                    </iframe>
                                    <h6>Wendy Red - 95.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/WKMSL10eEGo">
                                    </iframe>
                                    <h6>Marco Haravan - 140.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/U_rX2UHcTLM">
                                    </iframe>
                                    <h6>Prime Investors - 130.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/l8F4QjEefZ4">
                                    </iframe>
                                    <h6>Alessandro Autiero - 80.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/x2-ooTrFtmE">
                                    </iframe>
                                    <h6>Money Ninjas - 19.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/_H4RPqEis80">
                                    </iframe>
                                    <h6>Android Here</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/BKQMeptjEPM">
                                    </iframe>
                                    <h6>Cowboys of Crypto - 32.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/YY3fHbC2OSc">
                                    </iframe>
                                    <h6>TestWerk - 23.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/8ZdVbreL78g">
                                    </iframe>
                                    <h6>Charlie Seddine - 31.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/Tn9WKJm_qA8">
                                    </iframe>
                                    <h6>Crypto Moonlight - 98.000 Subscribers</h6>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={4}>
                                <div className='video-padding'>
                                    <iframe style={{ width: '100%'}}
                                        src="https://www.youtube.com/embed/sQvC7tcSjDM">
                                    </iframe>
                                    <h6>Darryl Boo - 20.000 Subscribers</h6>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Videos;