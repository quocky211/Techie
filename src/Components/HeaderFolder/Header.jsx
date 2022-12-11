import { Component } from "react";
import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.webp";
import shoppingIcon from "../Images/shopping-icon.png";
import { NavLink as Link, NavLink } from "react-router-dom";
import Searchbar from "../Search/Searchbar";
import { Log_out } from "../../actions";
import { useNavigate } from "react-router-dom";

import Register from "../Register/Register";
import { Avatar } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../LoginFolder/Login";
import { connect } from "react-redux";
// https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg

function Header(props) {
  let logged_fullName = "";
  let headerData = [];
  headerData = JSON.parse(localStorage.getItem("da_dang_ky"));
  headerData.map(item => {
    logged_fullName = item.fullname;
  })
  let navigate = useNavigate();
  var linkCart = "/Login";
  var loginButtonText = "Đăng nhập";
  if (props.isLoggedin) {
    linkCart = "/ShoppingCart";
    loginButtonText = "Đăng xuất";
  }
  function LoginclickHandler() {
    if (props.isLoggedin) {
      props.Log_out();
      navigate("/");
    } else {
      navigate("/Login");
    }
  }
  if (props.isLoggedin) {
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
          <Link to={linkCart}>
            <img src={shoppingIcon} alt="cart" />
            <span>{props.numberCart}</span>
          </Link>
          <Avatar 
            className="avatar_login"
            src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg"
          />
          <a href="#" className="logged_username" >{logged_fullName}</a>
          <button onClick={LoginclickHandler} className="logIn-btn">
            {loginButtonText}
          </button>
        </div>
      </div>
    </div>
    )
  }
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
          <Link to={linkCart}>
            <img src={shoppingIcon} alt="cart" />
            <span>{props.numberCart}</span>
          </Link>
          <button onClick={LoginclickHandler} className="logIn-btn">
            {loginButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
    isLoggedin: state._todoProduct.isLoggedin,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    Log_out: () => dispatch(Log_out()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

