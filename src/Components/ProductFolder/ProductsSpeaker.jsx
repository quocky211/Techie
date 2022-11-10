import { Component } from "react";
import React, { useState } from "react";
import data from '../data'
import "./Products.css";
import ContainerItem from "../ContainerItem";

function ProductsSpeaker() {
    return (
  
                <div className="container__products-products">
                    {data[8].map(item => ContainerItem(item.image, item.name, item.price))}
                </div>
    );
}

export default ProductsSpeaker;
