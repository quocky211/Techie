import React from "react";
import { Component } from "react";
import { useState } from "react";
import './ContainerItem.css'


function ContainerItem(img, name, price) {
    const [active, setActive] = useState("")
    return (
        <div className="containerItem">
            <button onClick={() => setActive("profile")}>
                <img src={img} alt="sanpham" className="ContainerItem_image"/>
                <p className="containerItem_name">{name}</p>
            </button>
            
            <div className="containerItem_infor">
                <p className="containerItem_infor-price">{price}</p>
                <button className="buy-btn">Mua ngay</button>
            </div>
        </div>
    )
}

export default ContainerItem