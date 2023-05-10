import React from 'react';
import InfoCard from '../../components/infocard/infocard';
import Authors from '../../components/authors/authors';
import "./styles.css"

function AboutPage() {
    return (
        <div className='about'>
            <Authors></Authors>
            <div>
            <InfoCard heading = {"What is Housing Rights Initiative?"} mission = {true}></InfoCard><br/>
            <InfoCard heading = {"What can we all do to help?"}></InfoCard>
            </div>
        </div>
    );
}

export default AboutPage;