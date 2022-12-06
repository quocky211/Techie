import "./Payment.css"
import { useState } from "react";
import {NavLink as Link} from "react-router-dom";
// import { render } from "@testing-library/react";
function Payment()
{
    const [isShown, setIsShown] = useState(true);
    const handleClick = event => {
        setIsShown(current => !current);
      };
    return(
        <div className="main-container-payment">
            <div className="nav">
                <ul>
                    <Link to="/Shoppingcart"><li>Giỏ hàng</li></Link>&#62;
                    <Link to="/ShipAddress"><li>Thông tin giao hàng</li></Link>&#62;
                    <li>Phương thức thanh toán </li>
                </ul>
            </div>

            <h2>Phương thức thanh toán</h2>
            <div className="form-payment-container">
                <div className="form-payment">
                    <input type="radio" name="payment" value="cod" id="payment_cod"/>Thanh toán khi nhận hàng (COD)
                </div>

                <div className="form-payment">
                    <input type="radio" name="payment" value="bank" id="payment_bank" onClick={handleClick}/>Chuyển khoản
                </div>

                <div className="form-payment_bank" style={{display: isShown ? 'none' : 'block'}}>
                    <p>Vietcombank chi nhánh HCM</p>
                    <p>Số tài khoản: 1016956832</p>
                    <p>Tên tài khoản: Nguyễn Quốc Kỳ</p>
                    <p>Nhận viên sẽ gọi điện xác nhận sau khi nhận được chuyển khoản</p>
                    <p>Cảm ơn bạn đã mua sắm tại TechIE Shop</p>
                </div>
                <Link to="/"><button type="submit" name="submit" className="btn-Submit">Hoàn tất mua hàng</button></Link>
            </div>
        </div>
    )
}
export default Payment;