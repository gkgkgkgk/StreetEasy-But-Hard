import React from 'react';
import './styles.css';

function Authors() {
    return (
        <div className = "authors_title">
        <h1>Meet the Creators</h1>
        <div id="container_creators">
            <div className = "item"><img src="https://raw.githubusercontent.com/gkgkgkgk/StreetEasy-But-Hard/main/client/husam.png" />Husam Almanakly</div>
            <div className = "item"><img src="https://raw.githubusercontent.com/gkgkgkgk/StreetEasy-But-Hard/main/client/ayden.png" />Ayden Shankman</div>
            <div className = "item"><img src="https://raw.githubusercontent.com/gkgkgkgk/StreetEasy-But-Hard/main/client/gavri.jpg" />Gavri Kepets</div>
            <div className = "item"><img src="https://raw.githubusercontent.com/gkgkgkgk/StreetEasy-But-Hard/main/client/michael.png" />Michael Bentivegna</div>
            <div className = "item"><img src="https://raw.githubusercontent.com/gkgkgkgk/StreetEasy-But-Hard/main/client/melina.jpg" />Melina Tsai</div>
            <div className = "item"><img src="https://raw.githubusercontent.com/gkgkgkgk/StreetEasy-But-Hard/main/client/cesar.jpg" />Cesar Rodriguez</div>
        </div>
        </div>
    );
}

export default Authors;
