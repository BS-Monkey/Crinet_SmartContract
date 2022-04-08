import React from 'react'

import AffiliateProgram from '../Body/AffiliateProgram/AffiliateProgram';
import Navigation from '../Body/Navigation/Navigation';
import PublicPresales from '../Body/PublicPresales/PublicPresales';
import PublicSaleCex from '../Body/PublicSaleCex/PublicSaleCex';
import SeedPhase from '../Body/SeedPhase/SeedPhase';
import Videos from '../Body/videos/Videos';
import './HomePage.css'


const HomePage = () => {
    return (
        <React.Fragment>
            <div className='home'>
                <Navigation></Navigation>
                <SeedPhase></SeedPhase>
                <PublicPresales></PublicPresales>
                <PublicSaleCex></PublicSaleCex>
                <AffiliateProgram></AffiliateProgram>
                <Videos></Videos>
            </div>
        </React.Fragment>
    );
};

export default HomePage;