import { Component } from "react";
import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.webp";
import shoppingIcon from "../Images/shopping-icon.png";
import { NavLink as Link, NavLink } from "react-router-dom";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../LoginFolder/Login";
import  {connect} from  'react-redux'

function Header(props) {
    return (
            <div className="header">
                <div className="header-left">
                    <a href="#">
                        <img src={logo} />
                        <h2>TechieShop</h2>
                    </a>
                </div>
=======
import Searchbar from "../Search/Searchbar";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <a href="/">
          <img src={logo} alt="logo" />
          <h2>TechieShop</h2>
        </a>
      </div>
>>>>>>> 22768b23bf8af372d808a7e5d4d3eb300a9be981

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

<<<<<<< HEAD
                <div className="header-right">
                    <div className="header-right_search">
                        <form action="">
                            <input type="text" placeholder="Nhập tên sản phẩm cần tìm" />
                            <button><img src={searchIcon} /></button>
                        </form>
                    </div>

                    <div className="header-right_item">
                        <Link to="/Shoppingcart"><img src={shoppingIcon} alt="cart"/>{props.numberCart}</Link>
                        <button className="logIn-btn"><NavLink to="/Login">Đăng nhập</NavLink></button>
                    </div>
                </div>
            </div>         
    );
=======
      <Searchbar />
>>>>>>> 22768b23bf8af372d808a7e5d4d3eb300a9be981

      <div className="header-right_item">
        <Link to="/Shoppingcart">
          <img src={shoppingIcon} alt="cart" />
        </Link>
        <button className="logIn-btn">
          <NavLink to="/Login">Đăng nhập</NavLink>
        </button>
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

