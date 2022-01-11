import React from "react";
import MyBtn from "./button";
import '../assets/css/banner.css';

function Banner() {
    return(
        <div className="banner-container">
            <div className="banner-info">
                <div className="banner-head">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

                <MyBtn name={"View more"} />
            </div>
        </div>
    );
}

export default Banner;