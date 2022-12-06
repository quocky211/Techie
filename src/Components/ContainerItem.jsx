import React from "react";
import { Component } from "react";
import { useState } from "react";
import './ContainerItem.css'
import {AddCart} from '../actions'
import {connect} from 'react-redux';
import whiteplus from "./Images/whiteplus.jpg"


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
                <div className="add-buy-btn">
                    <button className="buy-btn">Mua ngay</button>
                    <button className="addcart"> <img src={whiteplus} alt="" /> </button>
                </div>
            </div>
        </div>
    )
}

export default ContainerItem