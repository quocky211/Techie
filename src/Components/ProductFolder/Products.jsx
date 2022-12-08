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
                <div className="container-left">
                    <div className="container__products-nav">
                        <p>DANH MỤC</p>
                        <button onClick={() => setActive("ProductsHeadphone")}>Tai nghe</button>
                        <button onClick={() => setActive("ProductsKeyboard")}>Bàn phím</button>
                        <button onClick={() => setActive("ProductsMouse")}>Chuột</button>
                        <button onClick={() => setActive("ProductsCharger")}>Sạc / Cáp</button>
                        <button onClick={() => setActive("ProductsChargerBackup")}>Sạc dự phòng</button>
                        <button onClick={() => setActive("ProductsSpeaker")}>Loa</button>
                    </div>
                    <div className="find-product-price">
                        <p>Lọc giá sản phẩm</p>
                        <input type="radio" name="price" id="" />
                        <label> Dưới 1.000.000 đ</label>
                        <br></br>
                        <input type="radio" name="price" id="" />
                        <label> 1.000.000 đ - 2.000.000 đ</label>
                        <br></br>
                        <input type="radio" name="price" id="" />
                        <label> 2.000.000 đ - 5.000.000 đ</label>
                        <br></br>
                        <input type="radio" name="price" id="" />
                        <label> Trên 5.000.000 đ</label>
                        <br></br>
                    </div>
                </div>

                <div className="container-right">
                    <div className="sort-product">
                        <select name="" id="">
                            <option value="">Chọn</option>
                            <option value="">Giá từ thấp đến cao</option>
                            <option value="">Giá từ cao đến thấp</option>
                            <option value="">Từ A - Z</option>
                            <option value="">Từ Z - A</option>
                        </select>
                    </div>
                    <div className="container__products-products">
                        {active === "ProductsHeadphone" && <ProductsHeadphone />}
                        {active === "ProductsKeyboard" && <ProductsKeyboard />}
                        {active === "ProductsMouse" && <ProductsMouse />}
                        {active === "ProductsSpeaker" && <ProductsSpeaker />}
                        {active === "ProductsCharger" && <ProductsCharger />}
                        {active === "ProductsChargerBackup" && <ProductsChargerBackup />}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Products;
