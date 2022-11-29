import { Component } from "react";
import React, { useState, useEffect} from "react";
import data from '../data'
import "./Products.css";
import ContainerItem from "../ContainerItem";
import axios from "axios";
function ProductsHeadphone() {
    const [list, setlist] = useState([]);  
    
    useEffect(() => {
            axios.get('http://demoapiiii.somee.com/api/ServiceController/GetAllSP')
            .then(res => setlist(res.data))                 
    },[]);
    
    return (
        <div className="container__products-products">
            {list.map((item,index)=> index>-1&&index<10
                &&(ContainerItem(item.hinh, item.name, item.price)))}    
        </div>    
    );
}

export default ProductsHeadphone;
