import { Component } from "react";
import React, { useState,useEffect } from "react";
import data from '../data'
import "./Products.css";
import axios from "axios";
import ContainerItem from "../ContainerItem";

function ProductsCharger() {
    const [list, setlist] = useState([]);  
    
    useEffect(() => {
            axios.get('http://demoapiiii.somee.com/api/ServiceController/GetAllSP')
            .then(res => setlist(res.data))                 
    },[]);
    
    return (
        <div className="container__products-products">
            {list.map((item,index)=> item.loai==="sac"
                 &&<ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)}    
        </div>      
    );
}

export default ProductsCharger;
