import React from "react";

import { Component } from "react";
import { useState } from "react";
import './ContainerItem.css'
import {AddCart} from '../actions'
import {connect} from 'react-redux';
import whiteplus from "./Images/whiteplus.jpg"
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export function ContainerItem(props) {
    
        var vnd = Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        const priceVND = vnd.format(props.price);
        const item={
            maSp:props.maSp,
            price:props.price,
            name:props.name,
            hinh:props.img
        }
        const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

        return(
            <div className="containerItem">
                <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Thêm vào giỏ hàng thành công!
                        </Alert>
                    </Snackbar>
                <button>
                    <img src={props.img} alt="sanpham" className="ContainerItem_image"/>
                    <p className="containerItem_name">{props.name}</p>
                </button>
                <div className="containerItem_infor">
                    <p className="containerItem_infor-price">{priceVND}</p>
                    <div className="add-buy-btn">
                    <Link to="/Shoppingcart">
                        <button className="buy-btn" onClick={()=>props.AddCart(item)}>Mua ngay</button>
                    </Link>
                    <button className="btn-addcart" onClick={()=>{props.AddCart(item); handleClick()}}> <img src={whiteplus} alt="" /> </button>
                    
                    </div>
                    
                </div>
                
            </div>
            
    )}

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
