import { Component } from "react";
import React, { useState } from "react";
import "./AboutUs.css";
import Infor from './Infor';
import Paymethod from './PayMethod';
import Policy from './Policy'
function Header() {
  const [active, setActive] = useState("infor")
  return (
    <div className="aboutUs">
      <div className="aboutUs__nav">
        <h4 className="aboutUs__nav-name">DANH MỤC TRANG</h4>
        <div className="aboutUs__nav-main">
          <button onClick={() => setActive("infor")}>TechieShop&reg; /SỰ KHỞI ĐẦU/</button>
          <button onClick={() => setActive("policy")}>Chính sách bảo hành</button>
          <button onClick={() => setActive("paymethod")}>Phương thức thanh toán</button>
          <a href="https://tinhte.vn/">Tinhte.vn</a>
          <a href="https://kenh14.vn/">Kenh14.vn</a>
        </div>
      </div>

      <div className="aboutUs__main">
          {active === "infor" && <Infor/>}
          {active === "paymethod" && <Paymethod/>}
          {active === "policy" && <Policy/>}
      </div>
    </div>
  );
}

export default Header;
