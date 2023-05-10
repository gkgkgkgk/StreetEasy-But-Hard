import React from 'react';
import './styles.css';

function Authors() {
    return (
        <div className = "authors_title">
        <h1>Meet the Creators</h1>
        <div id="container_creators">
            <div className = "item"><img src="../../../husam.png" />Husam Almanakly</div>
            <div className = "item"><img src="../../../ayden.jpg" />Ayden Shankman</div>
            <div className = "item"><img src="../../../gavri.jpg" />Gavri Kepets</div>
            <div className = "item"><img src="../../../michael.png" />Michael Bentivegna</div>
            <div className = "item"><img src="../../../background_city.png" />Melina Tsai</div>
            <div className = "item"><img src="../../../background_city.png" />Ceaser Rodriguez</div>
        </div>
        </div>
    );
}

export default Authors;
