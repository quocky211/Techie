import { Form, useParams } from "react-router-dom";
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

  return (
    <div>{product.map((items)=>
      productID==items.maSp&&
      <div>
      <div>ID = {productID}</div>
      <img src={items.hinh} alt="" />
      <ul>
        <li>{items.name}</li>
        <li>{items.loai}</li>
        <li>{items.price}</li>
        <li>{items.maSp}</li>
      </ul>
    </div>
    )}
    </div>
    
  );
}

export default ProductDetails;
