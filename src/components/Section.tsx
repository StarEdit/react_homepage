import React from "react";
import '../assets/css/section.css';
import ContentTitle from "./ContentTitle";
import CardList from "./CardList";

interface props {
    cardQuantity: number;
}

function Section({cardQuantity}: props) {
    return (
        <div className="section-container">
            <ContentTitle
                name={"Lorem ipsum dolor sit amet"}
                description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. Integer auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec dictum lectus et bibendum faucibus. Integer mollis arcu sit amet mollis blandit. Nulla imperdiet molestie nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum in."
                }
            />

            <CardList cardQuantity={cardQuantity} />
        </div>
    );
}

export default Section;
