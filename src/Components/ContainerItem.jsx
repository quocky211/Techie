import React from "react";
import { Component } from "react";
import { useState } from "react";
import './ContainerItem.css'


function ContainerItem(img, name, price) {
    const vnd = Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
    const priceVND = vnd.format(price);
    return (
        <div className="containerItem">
            <button>
                <img src={img} alt="sanpham" className="ContainerItem_image"/>
                <p className="containerItem_name">{name}</p>
            </button>
            
            <div className="containerItem_infor">
                <p className="containerItem_infor-price">{priceVND}</p>
                <button className="buy-btn">Mua ngay</button>
            </div>
        </div>
    )
}

export default ContainerItem