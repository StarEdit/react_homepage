import React from "react";
import '../assets/css/navbar.css';
import MyBtn from "./button";

const Navbar = () => {
    return(
        <>
            <div className="navbar-container">
                <div className="navbar-list">
                    <div className="navbar-item">
                        <a href="#" className="navbar-link">Home</a>
                    </div>
                    <div className="navbar-item">
                        <a href="#" className="navbar-link">Menu</a>
                    </div>
                    <div className="navbar-item">
                        <a href="#" className="navbar-link">About us</a>
                    </div>
                    <div className="navbar-item">
                        <MyBtn name={'Order now'} />
                    </div>
                </div>

                <div className="user-list">
                    <div className="user-item">
                        <div className="search-input">
                            <input type="text" placeholder="Search" />
                            <img src={require("../assets/icons/search-icon.png")} alt="Search" />
                        </div>
                    </div>
                    <div className="user-item">
                        <img src={require("../assets/icons/user-icon.png")} alt="User" />
                        <span>Account</span>
                    </div>
                    <div className="user-item">
                        <img src={require("../assets/icons/cart-icon.png")} alt="Cart" />
                        <span className="cart-quantity">1</span>
                    </div>
                </div>
            </div>

            <div className="border"></div>
        </>
    );
}

export default Navbar;