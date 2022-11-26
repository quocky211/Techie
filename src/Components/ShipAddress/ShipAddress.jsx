import "./ShipAddress.css"
import {NavLink as Link} from "react-router-dom";
function ShipAddress()
{
    return (
        <div className="main-container-ship">
            <div className="nav">
                <ul>
                    <Link to="/Shoppingcart"><li>Giỏ hàng</li></Link>&#62;
                    <li>Thông tin giao hàng </li>&#62;
                    <li>Phương thức thanh toán </li>
                </ul>
            </div>
            <h2>Thông tin giao hàng</h2>
            <div className="form-address">
                <form>
                    <input type="text" placeholder="Họ và tên" />
                    <div className="mail-phone">
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Số điện thoại" />
                    </div>
                    <select>
                        <option>Chọn Tỉnh/Thành phố</option>
                        <option value="">Hồ Chí Minh</option>
                        <option value="">Hà Nội</option>
                        <option value="">Đà Nẵng</option>
                        <option value="">An Giang</option>
                        <option value="">Bà Rịa – Vũng Tàu</option>
                        <option value="">Bạc Liêu</option>
                        <option value="">Bắc Giang</option>
                        <option value="">Bắc Kạn</option>
                        <option value="">Bắc Ninh</option>
                        <option value="">Bến Tre</option>
                        <option value="">Bình Dương</option>
                        <option value="">Bình Định</option>
                        <option value="">Bình Phước</option>
                        <option value="">Bình Thuận</option>
                        <option value="">Cà Mau</option>
                        <option value="">Cao Bằng</option>
                        <option value="">Cần Thơ</option>
                        <option value="">Đắk Lắk</option>
                        <option value="">Đắk Nông</option>
                        <option value="">Điện Biên</option>
                        <option value="">Đồng Nai</option>
                        <option value="">Đồng Tháp</option>
                        <option value="">Gia Lai</option>
                        <option value="">Hà Giang</option>
                        <option value="">Hà Nam</option>
                        <option value="">Hà Tĩnh</option>
                        <option value="">Hải Dương</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </form>
            </div>
        </div>
    );
}
export default ShipAddress;