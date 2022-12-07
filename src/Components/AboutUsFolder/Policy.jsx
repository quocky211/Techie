import { Component } from "react";
import React, { useState } from "react";
import "./AboutUs.css";
function Header() {
  return (
    <div className="aboutUs">
        <div className="aboutUs__main">
          <h4>CHÍNH SÁCH BẢO HÀNH TechieShop&reg; </h4>
          <p>
            Thật khó chịu khi phải làm phải đi bảo hành, đổi, trả cho những sản
            phẩm vừa mua!
            <br />
            Và cũng không mấy dễ chịu khi phải đọc những trang "Chính sách” dài
            ngoằng với đủ thứ ràng buộc và lắc léo người dùng (thường là như
            vậy). Hiểu được khó khăn đó của khách hàng, TechieShop&reg; sẽ viết
            ngắn trong 6 mục về chế độ{" "}
            <b>
              bảo hành mang tên /TECHIECARE/, lên tới 2 tháng cho tất cả sản
              phẩm và bảo hành 1 đổi 1 trong 7 ngày khi phát hiện lỗi từ nhà sản
              xuất.
            </b>
          </p>
          <h5>1. Chế độ bảo hành sản phẩm</h5>
          <h6>a. Lỗi do Nhà sản xuất (NSX).</h6>
          <p>
            - Đường dây hỗ trợ trực tuyến 24/24 để giúp khách hàng xác định lỗi
            và phương án sửa lỗi (đối với phần mềm).
          </p>
          <p>
            - Nếu lỗi phát sinh từ phần cứng, tổng đài sẽ hướng dẫn quý khách
            gửi sản phẩm về TechieShop&reg; kiểm tra và xác định. Nếu lỗi từ NSX, quý
            khách sẽ được đổi sản phẩm tương ứng hoặc sản phẩm tốt hơn trong
            trường hợp mẫu cần đổi hết hàng, sản phẩm đổi sẽ mới 100%, nguyên
            seal.
          </p>
          <p>
            - TechieShop&reg; hỗ trợ hoàn toàn phí vận chuyển bảo hành cho quý
            khách.
          </p>
          <h6>b. Đối với lỗi do người sử dụng</h6>
          <p>
            - Hỗ trợ tư vấn giải pháp sửa chữa và thỏa thuận về chi phí sửa chữa
            phát sinh.
          </p>
          <h5>2. Điều kiện bảo hành</h5>
          <p>
            - Sản phẩm được phân phối bởi TechieShop&reg;, có ghi nhận hóa đơn điện
            tử (thông tin mua hàng), trùng Series.
          </p>
          <p>
            - Sản phẩm hỏng hóc hoặc do lỗi do nhà sản xuất trong điều kiện sử
            dụng bình thường, do chuyên viên kỹ thuật của TechieShop&reg; xác định.
          </p>
          <p>
            - Sản phẩm còn nguyên tem bảo hành, chưa qua can thiệp phần cứng từ
            các bên khác.
          </p>
          <p>- Còn trong thời hạn bảo hành.</p>
          <p>
            - Không có dấu hiệu va chạm vật lý, rơi rớt, móp méo, dính keo &
            cháy nổ.
          </p>
          <h5>3. Thời gian bảo hành</h5>
          <p>
            - Đối với tất cả sản phẩm của TechieShop&reg; đều được hưởng chính sách
            bảo hành thời hạn 2 tháng, 1 đổi 1 trong 7 ngày nếu phát hiện lỗi do
            NXS.
          </p>
          <p>
            - Thời gian bảo hành được tính từ ngày mua căn cứ theo hóa đơn mua
            hàng và phiếu bảo hành.
          </p>
          <h5>4. Những trường hợp từ chối bảo hành</h5>
          <p>
            - Sản phẩm không đáp ứng đủ các điều kiện bảo hành hoặc thời gian
            được quy định.
          </p>
          <p>
            - Sản phẩm bị mất tem niêm phong hoặc tem bảo hành bị rách, có dấu
            hiệu tẩy xóa.
          </p>
          <p>
            - Thông tin mua hàng không có trong hệ thống, khách hàng không xuất
            trình được hóa đơn hay thông tin mua hàng mà TechieShop&reg; yêu cầu.
          </p>
          <p>
            - Có dấu hiệu va chạm vật lý, rơi rớt, móp méo, dính keo & cháy nổ
            và đã từng sửa chữa ở nơi khác ngoài TechieShop&reg;.
          </p>
          <p>
            - Không bảo hành Pin, trầy xước và ngoại hình của sản phẩm (những
            phần sẽ hao mòn theo thời gian sử dụng).
          </p>
          <p>
            - Sản phẩm bị ảnh hưởng bởi nước, chất lỏng hoặc nhiệt độ cao, nóng
            chảy biến dạng.
          </p>
          <h5>5. Hỗ trợ sửa chữa</h5>
          <p>
            Khách hàng vẫn sẽ được hỗ trợ sửa chữa nếu đã quá thời hạn bảo hành
            hoặc trong trường hợp quý khách có nhu cầu.
          </p>
          <p>
            Các sản phẩm sửa chữa ngoài bảo hành sẽ đều phát sinh chi phí, quá
            trình sửa sẽ được tiến hành khi mức phí và các điều kiện đáp ứng
            thỏa thuận giữa đôi bên được thông qua.
          </p>
        </div>
      </div>
  );
}

export default Header;
