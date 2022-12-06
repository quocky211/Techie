import React, { useState } from "react";
import "./Products.css";
import ProductsHeadphone from "./ProductsHeadphone";
import ProductsKeyboard from "./ProductsKeyboard";
import ProductsMouse from "./ProductsMouse";
import ProductsSpeaker from "./ProductsSpeaker";
import ProductsCharger from "./ProductsCharger";
import ProductsChargerBackup from "./ProductsChargerBackup";
import Slideshow from "../Slideshow/Slideshow";


function Products() {
    const [active, setActive] = useState("ProductsHeadphone");
    return (
        <div>
            <div className="mainPage_banner">
                <Slideshow/>
            </div>

            <div className="container__products">
                <div className="container__products-nav">
                    <button onClick={() => setActive("ProductsHeadphone")}>Tai nghe</button>
                    <button onClick={() => setActive("ProductsKeyboard")}>Bàn phím</button>
                    <button onClick={() => setActive("ProductsMouse")}>Chuột</button>
                    <button onClick={() => setActive("ProductsCharger")}>Sạc / Cáp</button>
                    <button onClick={() => setActive("ProductsChargerBackup")}>Sạc dự phòng</button>
                    <button onClick={() => setActive("ProductsSpeaker")}>Loa</button>
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
