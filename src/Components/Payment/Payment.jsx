import "./Payment.css";
import React from "react";
import { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Payment() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [shipoption, setShipoption] = React.useState("bank");
  const handleRadioChange = (e) => {
    setShipoption(e);
    if (shipoption === "bank") {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const refreshPage = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const [visible, setVisible] = useState(false);
  return (
    <div className="main-container-payment">
      <div className="nav">
        <ul>
          <Link to="/Shoppingcart">
            <li>Giỏ hàng</li>
          </Link>
          &#62;
          <Link to="/ShipAddress">
            <li>Thông tin giao hàng</li>
          </Link>
          &#62;
          <li>Phương thức thanh toán </li>
        </ul>
      </div>

      <h2>Phương thức thanh toán</h2>
      <div className="form-payment-container">
        <div className="form-payment">
          <input
            checked={shipoption === "bank"}
            type="radio"
            name="payment"
            value="bank"
            onClick={(e) => handleRadioChange(e.target.value)}
          />
          Thanh toán khi nhận hàng (COD)
        </div>

        <div className="form-payment">
          <input
            checked={shipoption === "cod"}
            type="radio"
            name="payment"
            value="cod"
            onClick={(e) => handleRadioChange(e.target.value)}
          />
          Chuyển khoản
        </div>

        {visible ? (
          <div className="form-payment_bank">
            <p>Vietcombank chi nhánh HCM</p>
            <p>Số tài khoản: 1016956832</p>
            <p>Tên tài khoản: Nguyễn Quốc Kỳ</p>
            <p>Nhận viên sẽ gọi điện xác nhận sau khi nhận được chuyển khoản</p>
            <p>Cảm ơn bạn đã mua sắm tại TechIE Shop</p>
          </div>
        ) : (
          <></>
        )}
        <button
          type="submit"
          name="submit"
          onClick={() => {
            handleClick();
            refreshPage();
          }}
          className="btn-Submit"
        >
          Hoàn tất mua hàng
        </button>
        <Snackbar open={open} autoHideDuration={900} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Đặt hàng thành công!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Payment;
