import { Component } from "react";
import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.webp";
import shoppingIcon from "../Images/shopping-icon.png";
import { NavLink as Link, NavLink } from "react-router-dom";
import Searchbar from "../Search/Searchbar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../LoginFolder/Login";
import  {connect} from  'react-redux'

function Header(props) {
    return (
            <div className="header">
                <div className="header-left">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <h2>TechieShop</h2>
                    </Link>
                </div>


        <div className="header-nav_menu">
            <button>
                <NavLink to="/MainPage">Trang chủ</NavLink>
            </button>
            <button>
                <NavLink to="/Products">Sản phẩm</NavLink>
            </button>
            <button>
                <NavLink to="/AboutUs">Giới thiệu</NavLink>
            </button>
        </div>
        
        <Searchbar />

                <div className="header-right">
                    <div className="header-right_item">
                        <Link to="/Shoppingcart"><img src={shoppingIcon} alt="cart"/><span style={{borderRadius:'8px', margin:'-10px 0 10px -5px',backgroundColor:'black',color:'white',textDecorationLine:'none'}} >{props.numberCart}</span></Link>
                        <button className="logIn-btn"><NavLink to="/Login">Đăng nhập</NavLink></button>
                    </div>
                </div>
            </div>         
    );

}
const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(Header)