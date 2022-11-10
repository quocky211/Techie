import { Component } from "react";
import React, { useState } from "react";
import "./AboutUs.css";
function Header() {
  return (
    <div className="aboutUs">
        <div className="aboutUs__main">
          <h4>Phương thức thanh toán</h4>
          <p>
            Chúng tôi áp dụng 02 hình thức thanh toán: Thanh toán trả trước qua
            tài khoản ngân hàng & Thanh toán COD
          </p>
          <h5>1. Thanh toán trả trước</h5>
          <p>
            - Thanh toán chuyển khoản 100% giá trị đơn hàng gồm: giá trị đơn
            hàng & chi phí vận chuyển.
          </p>
          <p>
            <b>-Lưu ý</b>
          </p>
          <p>
            + Quý KH vui lòng không chuyển khoản trước khi nhận được xác nhận từ
            bộ phận Sale Online.
          </p>
          <p>
            + Sau khi nhận được xác nhận từ bộ phận Sale Online, quý KH vui lòng
            chuyển khoản hoàn tất đơn hàng trong vòng 24h (không tính thứ bảy,
            chủ nhật & các ngày lễ tết). Trong trường hợp quá 24h, chúng tôi
            không nhận được thanh toán hoàn tất của quý khách, đơn hàng sẽ không
            còn hiệu lực.
          </p>

          <h5>2. Thanh toán trả sau (COD)</h5>
          <p>
            - Là hình thức khách hàng thanh toán tiền mặt trực tiếp cho nhân
            viên vận chuyển khi nhận hàng.
          </p>
          <p>
            - Khi hàng được chuyển giao đến quý khách, xin vui lòng hoàn tất
            việc thanh toán và ký xác nhận với nhân viên giao hàng trước, sau đó
            quý khách nhận hàng và kiểm tra sau. Nếu sản phẩm có bất kỳ lỗi hay
            khiếm khuyết nào không đúng ý muốn, quý khách thực hiện quy trình
            đổi hàng. Quý khách vui lòng giữ lại biên lai vận chuyển để xác minh
            ngày nhận hàng và thời gian đổi hàng
          </p>
        </div>
      </div>
      
  );
}

export default Header;
