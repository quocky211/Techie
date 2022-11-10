import { Component } from "react";
import React, { useState } from "react";
import data from '../data'
import "./Products.css";
import banner1 from "../Images/banner/banner_1.jpg";
import banner2 from "../Images/banner/banner2.webp";
import banner3 from "../Images/banner/banner3.webp";
import banner4 from "../Images/banner/banner4.jpg";
import ContainerItem from "../ContainerItem";
import ProductsHeadphone from "./ProductsHeadphone";
import ProductsKeyboard from "./ProductsKeyboard";
import ProductsMouse from "./ProductsMouse";
import ProductsSpeaker from "./ProductsSpeaker";
import ProductsCharger from "./ProductsCharger";
import ProductsChargerBackup from "./ProductsChargerBackup";



function Products() {
    const [active, setActive] = useState("ProductsHeadphone");
    return (
        <div>
            <div className="mainPage_banner">
                <img className="mainPage_banner-img" src={banner1} alt="banner"/>
            </div>

            <div className="container__products">
                <div className="container__products-nav">
                    <button onClick={() => setActive("ProductsHeadphone")}>Tai nghe</button>
                    <button onClick={() => setActive("ProductsKeyboard")}>Bàn phím</button>
                    <button onClick={() => setActive("ProductsMouse")}>Chuột</button>
                    <button onClick={() => setActive("ProductsSpeaker")}>Sạc / Cáp</button>
                    <button onClick={() => setActive("ProductsCharger")}>Sạc dự phòng</button>
                    <button onClick={() => setActive("ProductsChargerBackup")}>Loa</button>
                </div>

                <div className="container__products-products">
                    {active==="ProductsHeadphone" && <ProductsHeadphone/>}
                    {active==="ProductsKeyboard" && <ProductsKeyboard/>}
                    {active==="ProductsMouse" && <ProductsMouse/>}
                    {active==="ProductsSpeaker" && <ProductsSpeaker/>}
                    {active==="ProductsCharger" && <ProductsCharger/>}
                    {active==="ProductsChargerBackup" && <ProductsChargerBackup/>}
                </div>
            </div>

        </div>
    );
}

export default Products;
