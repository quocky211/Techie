import { Component } from "react";
import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.webp";
import shoppingIcon from "../Images/shopping-icon.png";
import searchIcon from "../Images/black-search-icon.png";
import MainPage from "../MainPageFolder/MainPage";
import Products from "../ProductFolder/Products";
import AboutUs from "../AboutUsFolder/AboutUs";
// import banner from "../Images/banner.jpg";
import { NavLink as Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../LoginFolder/Login";
import styled from "styled-components";

function Header() {
    return (
        <Router>
             
            <div className="header">
                <div className="header-left">
                    <a href="#">
                        <img src={logo} />
                        <h2>TechieShop</h2>
                    </a>
                </div>

                <div className="header-nav_menu">
                    <button><NavLink to="/MainPage">Trang chủ</NavLink></button>
                    <button><NavLink to="/Products">Sản phẩm</NavLink></button>
                    <button><NavLink to="/AboutUs">Giới thiệu</NavLink></button>
                </div>

                <div className="header-right">
                    <div className="header-right_search">
                        <form action="">
                            <input type="text" placeholder="Nhập tên sản phẩm cần tìm" />
                            <button><img src={searchIcon} /></button>
                        </form>
                    </div>

                    <div className="header-right_item">
                        <button><img src={shoppingIcon} /></button>
                        <button className="logIn-btn"><NavLink to="/Login">Đăng nhập</NavLink></button>
                    </div>
                </div>
            </div>         
            <div className="container">
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path='/MainPage' element={<MainPage />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/AboutUs' element={<AboutUs />} />
                    <Route path='/Login' element={<Login />} />
                </Routes>
            </div>
        </Router>

    );

}

export default Header;
