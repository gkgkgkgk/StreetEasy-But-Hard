import React from 'react';
import InfoCard from '../../components/infocard/infocard';
import "./styles.css"

function AboutPage() {
    return (
        <div className='about'>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
        </div>
    );
}

export default AboutPage;