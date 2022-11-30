import { Component } from "react";
import Select, { components } from "react-select";
import React, { useState } from "react";
import "./Searchbar.css";
import searchIcon from "../Images/black-search-icon.png";
import axios from "axios";

var options = [];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={searchIcon} alt="Search icon" />
    </components.DropdownIndicator>
  );
};

const customStyles = {
  // control represent the select component
  control: (provided) => ({
    ...provided,
    width: "220px",
  }),
};

function ParseResponse(response) {
  response.forEach((element) => {
    var singleitem = {};
    singleitem["value"] = element.name.toLowerCase();
    singleitem["label"] = element.name;
    options.push(singleitem);
  });
}

axios
  .get("http://demoapiiii.somee.com/api/ServiceController/GetAllSP")
  .then(function (response) {
    ParseResponse(response.data);
  });

function Searchbar() {
  return (
    <div className="header-right">
      <div className="header-right_search">
        <Select
          styles={customStyles}
          placeholder={"Tìm kiếm sản phẩm"}
          options={options}
          components={{ DropdownIndicator }}
        />
      </div>
    </div>
  );
}

export default Searchbar;
