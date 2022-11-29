import { Component } from "react";
import React, { useState,useEffect } from "react";
import data from '../data'
import "./Products.css";
import ContainerItem from "../ContainerItem";
import axios from "axios";
function ProductsMouse() {

    const [list, setlist] = useState([]);  
    
    useEffect(() => {
            axios.get('http://demoapiiii.somee.com/api/ServiceController/GetAllSP')
            .then(res => setlist(res.data))                 
    },[]);
    return (
        <div className="container__products-products">
            {list.map((item,index)=> item.loai==="mouse"
                &&(ContainerItem(item.hinh, item.name, item.price)))} 
        </div>
    );
}

export default ProductsMouse;
