import "./Shopping.css"
import ShipAddress from "../ShipAddress/ShipAddress";
import { NavLink as Link, NavLink} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Shopping()
{
    return (

        <div className="main">
            
            <h1> Giỏ Hàng </h1>
            <div className="main-container">
                <div className="products">

                </div>
                <div className="cal-money">
                    <div className="discount">
                        <h2>Mã giảm giá</h2>
                        <div className="enter-voucher">
                            <input type="text" placeholder="Nhập mã giảm giá" />
                            <button>Sử dụng</button>
                        </div>
                    </div>
                    <div className="money">
                        <div className="sum-cost-products">
                            <p>Tạm tính: <span>1.740.000<sup>đ</sup></span></p>
                        </div>
                        <div className="ship-cost">
                            <p>Phí vận chuyển: <span>30.000<sup>đ</sup></span></p>
                        </div>
                        <hr />
                        <div className="sum-cost">
                            <p>Tổng: <span>1.770.000<sup>đ</sup></span></p>

                        </div>
                    </div>
                    <NavLink to='/ShipAddress'><button className="buy-btn">Mua hàng</button></NavLink>
                </div>
            </div>
        </div>

    );
}
export default Shopping;