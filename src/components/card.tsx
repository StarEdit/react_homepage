import React from "react";
import '../assets/css/card.css';

interface props {
    imgUrl: string;
    cardWidth: string;
    name?: string;
    description?: string;
}

function Card({imgUrl, cardWidth, name, description}: props) {
    return(
        <div className={`card-container ${cardWidth}`}>
            <img src={imgUrl} className="card-image" alt={name}></img>
            <div className="card-name">{name}</div>
            <div className="card-description">{description}</div>
        </div>
    );
}

export default Card;