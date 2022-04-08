import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cIco_ from '../../../asset/xt-logo.png'
import cIco from '../../../asset/latoken-la-logo.svg'
import './PublicSaleCex.css'

const PublicSaleCex = () => {
    return (
        <div>
             <Container>
                <div className='seed-card pb-3'>
                    <div className='text-white lh-1 pt-3'>
                        <h3>CEX LISTING</h3>   
                    </div>
                    <div className='cex-listing'>
                    <Row>
                        <Col sm={12} md={4}>
                        <div className='listing-date'>
                        <div className='text-white text-start'>
                                <h6>Initial price at listing</h6>
                                <h6>1 CNT = $0.01</h6>
                       </div>
                        </div>
        
                        </Col>
                        <Col sm={12} md={4}>
                            <a href="https://latoken.com/" target="_blank" rel="noreferrer noopener" style={{marginRight: '10px'}}><img className='cex-logo' src={cIco} alt="" /></a>
                            <a href="https://www.xt.com/" target="_blank" rel="noreferrer noopener"><img className='cex-logo' src={cIco_} alt="" /></a>
                        </Col>
                        <Col sm={12} md={4}>
                        <div className='listing-date'>
                        <div className='text-white text-start'>
                                <h6>Listing on LATOKEN and XT.com</h6>
                                <h6>15/04/2022</h6>
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

export default PublicSaleCex;