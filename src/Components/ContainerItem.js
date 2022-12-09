import React from "react";
import "./ContainerItem.css";
import { AddCart } from "../actions";
import { connect } from "react-redux";
import whiteplus from "./Images/whiteplus.jpg";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function ContainerItem(props) {
  var vnd = Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const priceVND = vnd.format(props.price);
  const item = {
    maSp: props.maSp,
    price: props.price,
    name: props.name,
    hinh: props.img,
  };

  const [open, setOpen] = React.useState(false);

  var linkProduct = "/Products/" + props.maSp;
  var linkCart = "/Login";
  if (props.isLoggedin) {
    linkCart = "/ShoppingCart";
  }

  const handleClick = () => {
    setTimeout(() => {
      setOpen(true);
    }, 100);
  };
  const refresh = () => {
    window.location.refresh();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="containerItem">
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thêm vào giỏ hàng thành công!
        </Alert>
      </Snackbar>
      <Link to={linkProduct}>
        <button onClick={() => refresh()}>
          <img src={props.img} alt="sanpham" className="ContainerItem_image" />
          <p className="containerItem_name">{props.name}</p>
        </button>
      </Link>
      <div className="containerItem_infor">
        <p className="containerItem_infor-price">{priceVND}</p>
        <div className="add-buy-btn">
          <Link to={linkCart}>
            <button className="buy-btn" onClick={() => props.AddCart(item)}>
              Mua ngay
            </button>
          </Link>
          <button
            className="btn-addcart"
            onClick={() => {
              handleClose();
              handleClick();
              props.AddCart(item);
            }}
          >
            {" "}
            <img src={whiteplus} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
    isLoggedin: state._todoProduct.isLoggedin,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    AddCart: (item) => dispatch(AddCart(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerItem);
