import { Component } from "react";
import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.webp";
import shoppingIcon from "../Images/shopping-icon.png";
import { NavLink as Link, NavLink } from "react-router-dom";
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

export default Header;
