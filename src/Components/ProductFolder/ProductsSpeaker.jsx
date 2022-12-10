import { Component } from "react";
import React, { useState,useEffect } from "react";
import "./Products.css";
import ContainerItem from "../ContainerItem";
import axios from "axios";
function ProductsSpeaker() {
    const [list, setlist] = useState([]);  
    
    useEffect(() => {
            axios.get('http://demoapiiii.somee.com/api/ServiceController/GetAllSP')
            .then(res => setlist(res.data))                 
    },[]);
    return (
        <div className="container__products-products">
            {list.map((item,index)=> item.loai==="loa"
                &&<ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)} 
        </div>
    );
}

export default ProductsSpeaker;
