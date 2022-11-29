import { Component } from "react";
import React, { useState } from "react";
import "./Searchbar.css";
import searchIcon from "../Images/black-search-icon.png";

function Searchbar() {
  return (
    <div className="header-right">
      <div className="header-right_search">
        <form action="">
          <input type="text" placeholder="Nhập tên sản phẩm cần tìm" />
          <button>
            <img src={searchIcon} alt="Search icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
