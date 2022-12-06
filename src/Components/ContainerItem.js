import React from "react";
import { Component } from "react";
import { useState } from "react";
import './ContainerItem.css'
import {AddCart} from '../actions'
import {connect} from 'react-redux';
import whiteplus from "./Images/whiteplus.jpg"


export class ContainerItem extends Component {
    constructor(props) {
        super(props)
       
    }
    
    render() {
        var vnd = Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        const priceVND = vnd.format(this.props.price);
        const item={
            maSp:this.props.maSp,
            price:this.props.price,
            name:this.props.name,
            hinh:this.props.img
        }
        return(
            <div className="containerItem">
                <button>
                    <img src={this.props.img} alt="sanpham" className="ContainerItem_image"/>
                    <p className="containerItem_name">{this.props.name}</p>
                </button>
                
                <div className="containerItem_infor">
                    <p className="containerItem_infor-price">{priceVND}</p>
                    <div className="add-buy-btn">
                    <button className="buy-btn" onClick={()=>this.props.AddCart(item)}>Mua ngay</button>
                    <button className="btn-addcart" onClick={()=>this.props.AddCart(item)}> <img src={whiteplus} alt="" /> </button>
                    </div>
                </div>
            </div>
    )}
}
const mapStateToProps = state =>{
    return {
         _products: state._todoProduct,
       };
}
function mapDispatchToProps(dispatch){
    return{      
        AddCart:item=>dispatch(AddCart(item))  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerItem)
