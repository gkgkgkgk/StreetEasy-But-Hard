import React from 'react';
import './styles.css';

function InfoCard(props) {
    return (
        <div  className = "background">
            <h1>{props.heading}</h1>
            {props.mission ? 
                <MissionStatement></MissionStatement>
            :
            
            <HelpStatement></HelpStatement>}
            
        </div>
    );
}

export default InfoCard;

function MissionStatement() {
    return (
        <div>
            <p className = "text_intro">Their Mission Statement:</p>
            <p className = "text">"Housing Rights Initiative takes a proactive and systematic approach to targeting, investigating, and fighting fraudulent real estate practices, promoting fair housing, and connecting tenants to legal support. We educate and counsel tenants about their rights to fair and affordable housing and launch investigations against predatory real estate companies. HRI’s data-driven model identifies properties where there is a high probability of systematic fraud and discrimination. We educate tenants about their rights to fair and affordable housing, launch investigations, and generate class action lawsuits against predatory real estate companies. Through a legal mobilization effort, HRI lays the foundation for tenants who have been defrauded or discriminated against by the real estate industry, to seek redress and secure their rights under the law."</p>
            <p className = "text">To learn more about HRI, please checkout their website <a href="https://www.housingrightsus.org/" target="_blank" className = "link">here</a>.</p>
        </div>
    )
}

function HelpStatement() {
    return (
        <div>
            <p className = "text">The purpose of this application is to spread the word about the prevalence of housing voucher discrimination across New York City.  It is our goal that you walk away from this exhibit with an understanding of how widespread the issue is accross different neighborhoods within the 5 boroughs.  If you would like to make your voice heard, email your representative and make sure that your vote at the next election goes for someone that is willing to take housing discrimination seriously.  The laws are already in place, but enforcement is the key to ending this discriminatory practice.</p>
        </div>
    )
}
