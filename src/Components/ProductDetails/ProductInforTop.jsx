import { Form, Link, useParams } from "react-router-dom";
import ContainerItem from "../ContainerItem";
import "./ProductDetails.css" ;
import React from "react";
import { AddCart } from "../../actions";
import { connect } from "react-redux";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const axios = require("axios");


function ProductInforTop(props) {
  const [product, setProduct] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const { productID } = useParams();
  React.useEffect(() => {
    axios
      .get("http://demoapiiii.somee.com/api/ServiceController/GetAllSP")
      .then(function (response) {
      setProduct(response.data);
      });
  });
  if (!product) {
    return null;
  }
  var vnd = Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  let settings = {
    arrows:true,
    infinite: true,
    speed:1000,
    slidesToShow:4,
    slidesToScroll:1,
  };
  return (
    <div >
      <div className="product-detail">
        {product.map((items)=>productID==items.maSp&&  
        <div>
          <div className="total-product" >
            <img className="product-img" src={items.hinh} />
            <div className="product-info">
                <h3 className="product-name">{items.name}</h3>
                <div className="line"/>
                <p>Giá bán: {vnd.format(items.price)}</p>  
                <p>Sản phẩm: <span className="btn btn-success">Còn hàng</span></p> 
                    <h2 className="decrease-price">{vnd.format(items.price-100000)}</h2>
                <div className="btn-footer">
                  <Link className="buy-btn" to="/ShoppingCart"><button onClick={()=>props.AddCart(items)} style={{color:'white'}}>Mua ngay</button></Link>
                  <span className="btn btn-success add-cart" onClick={()=>{props.AddCart(items)}}>Thêm vào giỏ hàng</span>
                </div>    
            </div>     
        </div>
            </div>  )
    }
        </div>
    </div>
)
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductInforTop)
