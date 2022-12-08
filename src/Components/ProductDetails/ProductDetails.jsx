import { Form, useParams } from "react-router-dom";
import ContainerItem from "../ContainerItem";
import React from "react";
const axios = require("axios");
function ProductDetails() {
  const [product, setProduct] = React.useState(null);
  const[item,setitem]=React.useState(null)
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
  return (
    <div >
      <div>
        {product.map((items)=>productID==items.maSp&&
        <div>
          <img src={items.hinh} alt="" />
          <ul>
            <li>{items.name}</li>
            <li>{vnd.format(items.price)}</li>
          </ul>
        </div>)}
      </div>

      <div>
        <p>Các sản phẩm liên quan</p>
        <div>
          {product.map((item)=>productID!=item.maSp&&product[productID-1].loai==item.loai&&
          <ContainerItem price={item.price} name={item.name} img={item.hinh} maSp={item.maSp}/>)}
        </div>
      </div>
    </div>
    
  );
}

export default ProductDetails;
