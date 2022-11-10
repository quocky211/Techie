import { Component } from "react";
import React, { useState } from "react";
import data from '../data'
import "./Products.css";

import ContainerItem from "../ContainerItem";

function ProductsCharger() {
    const [active, setActive] = useState("Sản phẩm");
    return (
                <div className="container__products-products">
                    {data[6].map(item => ContainerItem(item.image, item.name, item.price))}
                </div>
          
    );
}

export default ProductsCharger;
