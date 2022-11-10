import { Component } from "react";
import React, { useState } from "react";
import "./AboutUs.css";
function Header() {
  return (
    <div className="aboutUs">
      <div className="aboutUs__main">
      <h4>TechieShop &reg; / SỰ KHỞI ĐẦU/</h4>
        <p>Smart Stuff - Smart Life</p>
        <p>
          TechieShop&reg; cung cấp các sản phẩm phụ kiện công nghệ thông minh, chất
          lượng và thiết thực trong cuộc sống. Hành trình xây dựng thương hiệu
          được khách hàng tin chọn, ngay khi có nhu cầu tìm kiếm những phụ kiện
          công nghệ thông minh chỉ vừa bắt đầu!
        </p>
        <p>
          Với cam kết sản phẩm chất lượng, chế độ bảo hành tin cậy và đề cao
          trải nghiệm của quý khách, TechieShop&reg; hi vọng trở thành người bạn
          thân và không ngừng phục vụ, truyền cảm hứng để khách hàng "chill hết
          nấc, xài hết ga" với những sản phẩm công nghệ thông minh.
        </p>
        <p>
          1St Flagship Store: Trường Đại học Công nghệ Thông tin - ĐHQG TPHCM.
          <br />Phone Number: 0799684120
          <br />Mail: TechieShop.Corner@gmail.com
          <br />Instagram: @TechieShop.vn
        </p>
      </div>
    </div>
  );
}

export default Header;
