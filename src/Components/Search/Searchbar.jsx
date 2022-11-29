import { Component } from "react";
import Select, { components } from "react-select";
import React, { useState } from "react";
import "./Searchbar.css";
import searchIcon from "../Images/black-search-icon.png";

const options = [
  { value: "headphone1", label: "Headphone 1" },
  { value: "headphone2", label: "Headphone 2" },
  { value: "headphone3", label: "Headphone 3" },
  { value: "headphone4", label: "Headphone 4" },
  { value: "headphone5", label: "Headphone 5" },
  { value: "headphone6", label: "Headphone 6" },
  { value: "headphone7", label: "Headphone 7" },
  { value: "headphone8", label: "Headphone 8" },
  { value: "headphone9", label: "Headphone 9" },
];

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
	  <img src={searchIcon} alt="Search icon" />
    </components.DropdownIndicator>
  );
};

function Searchbar() {
  return (
    <div className="header-right">
      <div className="header-right_search">
        <Select options={options} components={{ DropdownIndicator }} />
      </div>
    </div>
  );
}

export default Searchbar;
