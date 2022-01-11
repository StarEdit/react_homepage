import React from "react";
import Card from "./card";
import '../assets/css/cardList.css';

interface props {
    cardQuantity: number;
}

function CardList({cardQuantity}: props) {
    function SwitchCase({cardQuantity}: props) {
        switch(cardQuantity) {
          case 3:
            return(
                <div className="card-list">
                    <Card 
                        imgUrl={require("../assets/images/Corn.jpg")} 
                        cardWidth={"w-3"}
                        name={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                    <Card 
                        imgUrl={require("../assets/images/Corn.jpg")} 
                        cardWidth={"w-3"}
                        name={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                    <Card 
                        imgUrl={require("../assets/images/Corn.jpg")} 
                        cardWidth={"w-3"}
                        name={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                </div>
            );
          case 4:
            return(
                <div className="card-list">
                    <Card
                        imgUrl={require("../assets/images/Corn.jpg")} 
                        cardWidth={"w-4"}
                        name={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                    <Card
                        imgUrl={require("../assets/images/Corn.jpg")} 
                        cardWidth={"w-4"}
                        name={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                    <Card
                        imgUrl={require("../assets/images/Corn.jpg")} 
                        cardWidth={"w-4"}
                        name={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                    <Card
                        imgUrl={require("../assets/images/Corn.jpg")} 
                        cardWidth={"w-4"}
                        name={"Lorem ipsum dolor sit amet"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    />
                </div>
            );
          default:
            return(
                <div className="card-list">
                    <Card imgUrl={require("../assets/images/Corn.jpg")} cardWidth={"w-2"}/>
                    <Card imgUrl={require("../assets/images/Corn.jpg")} cardWidth={"w-2"}/>
                </div>
            );
        }
    }

    return(
        <SwitchCase cardQuantity={cardQuantity} />
    );
}

export default CardList;