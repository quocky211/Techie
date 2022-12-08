import "./Shopping.css"
import React from "react";
import ShipAddress from "../ShipAddress/ShipAddress";
import { NavLink as Link, NavLink} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../../actions';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Shopping({items, IncreaseQuantity, DecreaseQuantity, DeleteCart})
{
    let ListCart = [];
    let TotalCart=0;
    
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });
    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('vi-VN');
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
    return (

        <div className="main">
            
            <h1> Giỏ Hàng </h1>
            <div className="main-container">
                <div className="products">
                    <div className="row">
                        <div className="col-md-12">
                           <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Tổng tiền</th>
                                    </tr>
                                </thead>
                                <tbody style={{lineHeight:'85px'}}>
                                {
                                    ListCart.map((item,key)=>{
                                        return(
                                            <tr key={key}>    
                                            <td><i className="badge badge-danger" onClick={()=>{DeleteCart(key);handleClick()}}>X</i></td>
                                            
                                            <td>{item.name}</td>
                                            <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
                                            <td>{Number(item.price).toLocaleString('vi-VN')} VNĐ</td>
                                            <td>
                                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                                    <span className="btn btn-info">{item.quantity}</span>
                                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                                            </td>
                                            <td>{ TotalPrice(item.price,item.quantity)} VNĐ</td>
                                        </tr>
                                        )
                                    })
                                        
                                }
                                <tr>
                                    <td colSpan="5">Tổng tiền giỏ hàng</td>
                                    <td>{Number(TotalCart).toLocaleString('vi-VN')} VNĐ</td>
                                </tr>
                                </tbody>
                           </table>
                    </div>
                </div>
                                            <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
                                                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                                                Đã bỏ sản phẩm ra khỏi giỏ hàng!
                                                </Alert>
                                            </Snackbar>
                </div>
                <div className="cal-money" style={{margin:'0 -40px 0 40px'}}>
                    <div className="discount">
                        <h2>Mã giảm giá</h2>
                        <div className="enter-voucher">
                            <input type="text" placeholder="Nhập mã giảm giá" />
                            <button>Sử dụng</button>
                        </div>
                    </div>
                    <div className="money">
                        <div className="sum-cost-products">
                            <p>Tạm tính: {Number(TotalCart).toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                        <div className="ship-cost">
                            <p>Phí vận chuyển: 30.000 VNĐ</p>
                        </div>
                        <hr />
                        <div className="sum-cost">
                            <p>Tổng: {Number(TotalCart+30000).toLocaleString('vi-VN')} VNĐ</p>
                        </div>
                    </div>
                    <NavLink to='/ShipAddress'><button className="buy-btn">Mua hàng</button></NavLink>
                </div>
            </div>
        </div>

    );
}
const mapStateToProps = state =>{
    //  console.log(state)
      return{
          items:state._todoProduct
      }
  }
  
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Shopping)
  

