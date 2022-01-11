import React from "react";
import '../assets/css/contentTitle.css';

interface props {
    name: string;
    description: string;
}

function ContentTitle({name, description}: props) {
    return(
        <div className="content-container">
            <div className="content-name">{name}</div>
            <p className="content-description">{description}</p>
        </div>
    );
}

export default ContentTitle;