import React from "react";
import "./Footer.css";
import logo from "../Images/logo.webp";


function Header() {
  return (
    <div className="footer">
        <div className="footer_infor">
            <div className="footer__infor-introduce">
                <div className="footer__infor-introduce-name name">Giới thiệu</div>
                <div className="footer__infor-introduce-infor infor">TechieShop&reg; 
                    là trang mua sắm của thương hiệu TechieShop&reg;, 
                    chuyên cung cấp các phụ kiện công nghệ tiện lợi và chất lượng, 
                    giúp bạn tận hưởng và đơn giản hóa cuộc sống thường nhật!</div>
            </div>

            <div className="footer__infor-link">
                <div className="footer__infor-introduce-name name">Liên kết</div>
                    <div className="footer__infor-introduce-infor infor">
                        TechieShop&reg; /SỰ KHỞI ĐẦU/CHÍNH SÁCH BẢO HÀNH<br/>
                        Phương thức thanh toán<br/>
                        <a href="https://tinhte.vn/">Tinhte.vn</a>
                        <a href="https://kenh14.vn/">Kenh14.vn</a>
                    </div>
            </div>

            <div className="footer__infor-contact">
                <div className="footer__infor-introduce-name name">Thông tin liên hệ</div>
                <div className="footer__infor-introduce-infor infor">Trường Đại học Công nghệ 
                    Thông tin- ĐHQG TPHCM<br/><b>Số điện thoại:</b> 0799684120<br/><b>Email:</b> TechieShop.Corner@gmail.com</div>
            </div>

            <div className="footer__infor-logo">
                    <div className="logo-footer">
                        <a href="#">
                            <img src={logo} alt="logo" />
                            <h2>TechieShop</h2>
                        </a>
                    </div>
                <div className="name">Đăng ký nhận tin</div>
                <form action="">
                    <input type="Email" placeholder="Nhập Email của bạn"/>
                    <button>Đăng ký</button>
                </form>
            </div>
        </div>

        <div className="footer_copyright">
            <p>Copyright &copy; 2022 TechieShop&reg;. Powered by TechieShop</p>
        </div>
    </div>
  );
}

export default Header;
