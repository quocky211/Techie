import { Component } from "react";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Header.css";
import logo from "../Images/logo.webp";
import shoppingIcon from "../Images/shopping-icon.png";
import { NavLink as Link, NavLink } from "react-router-dom";
import Searchbar from "../Search/Searchbar";
import { Log_out } from "../../actions";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

function Header(props) {
  let navigate = useNavigate();
  const [logged_fullName, setlogged_fullName] = useState("admin");

  let headerData = [];
  headerData = JSON.parse(localStorage.getItem("da_dang_ky"));
  if (headerData !== null) {
    headerData.map((item) => {
      setlogged_fullName(item.fullname);
    });
  }

  function LoginclickHandler() {
    if (props.isLoggedin) {
      props.Log_out();
      navigate("/");
    } else {
      navigate("/Login");
    }
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
        {props.isLoggedin ? (
          <div className="header-right_item">
            <Link to="/ShoppingCart">
              <img src={shoppingIcon} alt="cart" />
              <span>{props.numberCart}</span>
            </Link>
            <Avatar
              className="avatar_login"
              src="https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg"
            />
            <a href="#" className="logged_username">
              {logged_fullName}
            </a>
            <button onClick={() => LoginclickHandler()} className="logIn-btn">
              Đăng xuất
            </button>
          </div>
        ) : (
          <div className="header-right_item">
            <Link to="/Login">
              <img src={shoppingIcon} alt="cart" />
              <span>{props.numberCart}</span>
            </Link>
            <button onClick={() => LoginclickHandler()} className="logIn-btn">
              Đăng nhập
            </button>
          </div>
        )}
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
