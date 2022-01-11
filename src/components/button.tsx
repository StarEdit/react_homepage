import React from "react";
import '../assets/css/button.css';

interface props {
    name: string;
}

function MyBtn({name} : props){
    return(
        <div className="btn">{name}</div>
    );
}

export default MyBtn;