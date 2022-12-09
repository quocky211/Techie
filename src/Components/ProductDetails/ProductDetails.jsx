import { Form, Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import React from "react";
import { AddCart } from "../../actions";
import { connect } from "react-redux";
import RelatedProduct from "./RelatedProduct";
const axios = require("axios");
export function ProductDetails(props) {
  const [product, setProduct] = React.useState(null);
  const { productID } = useParams();
  React.useEffect(() => {
    axios
      .get("http://demoapiiii.somee.com/api/ServiceController/GetAllSP")
      .then(function (response) {
        setProduct(response.data);
      });
  });
  if (!product) {
    return null;
  }
  var vnd = Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  var buylink = "/Login";
  if (props.isLoggedin) {
    buylink = "/ShoppingCart";
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        {product.map(
          (items) =>
            productID == items.maSp && (
              <div>
                <div className="product-detail">
                  {product.map(
                    (items) =>
                      productID == items.maSp && (
                        <div>
                          <div className="total-product">
                            <img
                              className="product-img"
                              alt=""
                              src={items.hinh}
                            />
                            <div className="product-info">
                              <h3 className="product-name">{items.name}</h3>
                              <div className="line" />
                              <p>Giá bán: {vnd.format(items.price)}</p>
                              <p>
                                Sản phẩm:{" "}
                                <span className="btn btn-success">
                                  Còn hàng
                                </span>
                              </p>
                              <h2 className="decrease-price">
                                {vnd.format(items.price - 100000)}
                              </h2>
                              <div className="btn-footer">
                                <Link className="buy-btn" to={buylink}>
                                  <button
                                    onClick={() => {
                                      props.AddCart(items);
                                    }}
                                    style={{ color: "white" }}
                                  >
                                    Mua ngay
                                  </button>
                                </Link>
                                <span
                                  className="btn btn-success add-cart"
                                  onClick={() => {
                                    props.AddCart(items);
                                  }}
                                >
                                  Thêm vào giỏ hàng
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 class="section-title">Mô tả sản phẩm</h3>
                          <div className="detail">
                            <h5>
                              <span style={{ color: "blue" }}>
                                Bàn Phím Cơ Gaming Corsair K68 RGB
                              </span>{" "}
                              - gõ cực êm với switch Cherry MX, trang bị LED RGB
                              bảy sắc cầu vồng, đi kèm tiện ích chống nước IP32
                              xóa tan nỗi lo sợ nước trên bàn phím cơ cho “dân
                              chơi” game thủ.
                            </h5>
                            <h5>
                              Thiết kế full-size tối giản, LED RGB mượt mà trong
                              từng keycap
                            </h5>
                            <p>
                              Tổng thể bàn phím này được hoàn thiện bằng nhựa mờ
                              (nhựa ABS) nhưng phản ánh ngược lại cho người dùng
                              thấy được về độ bền, sự cứng cáp và chắc chắn đến
                              từ chất lượng bên trong của “em” nó. Cảm giác đầu
                              tiên khi sờ lên K68 phải nói là thực sự rất mịn
                              tựa như được phủ lên một lớp nhung mềm mại ở hầu
                              hết các bề mặt xung quanh chiếc bàn phím vậy.
                            </p>
                            <img
                              className="img-detail"
                              src="https://cdn.tgdd.vn/Products/Images/4547/230872/ban-phim-co-co-day-gaming-corsair-k68-rgb-den-050622-114947.jpg"
                            />
                            <p>
                              Corsair thường không để chúng ta thất vọng khi nói
                              đến chất lượng và ở chiếc bàn phím này cũng không
                              ngoại lệ. Điểm hay của Corsair K68 RGB là được sử
                              dụng ngôn ngữ thiết kế tối giản, phối ghép nhiều
                              đường nét góc cạnh để tạo nên một chiếc bàn phím
                              nhìn rất lịch lãm. Bố cục của bàn phím rất hài
                              hoà, K68 chính là bản full size của K63.
                            </p>
                            <p>
                              Mọi thứ hầu như được giữ nguyên như K63, chỉ là
                              thêm cụm numpad (phím số) vô mà thôi và thanh
                              spacebar thì vẫn như vậy, được làm nổi lên bằng
                              các họa tiết đặc trưng của nhà Corsair. Vì
                              full-size có kích thước hơi lớn nên sẽ phù hợp cho
                              các bạn nào có một góc bàn làm việc hoặc chơi game
                              riêng, còn khi dùng ở văn phòng thì sẽ hơi chiếm
                              diện tích ở trên bàn làm việc một chút.{" "}
                            </p>
                            <img
                              className="img-detail"
                              src="https://cdn.tgdd.vn/Products/Images/4547/230872/ban-phim-co-co-day-gaming-corsair-k68-rgb-den-060622-125938.jpg"
                            />
                            <p>
                              Điểm thu hút của em này chính là sự hoàn thiện cao
                              đến từng chi tiết trên mỗi keycap mà nhà Corsair
                              mang lại. Đầu tiên, bên ngoài các keycap được
                              thiết kế lõm vào phần giữa cho cảm giác bấm cực kì
                              tốt và hạn chế được tình trạng bị mỏi ở đầu các
                              ngón tay. Các chữ trên keycap được xử lý bằng công
                              nghệ in phủ hai lớp hay còn gọi là Double Shot,
                              với công nghệ này từng ký tự được nổi lên rất rõ
                              và sắc nét, mình quan sát rất kỹ vẫn không thấy
                              một chi tiết thừa hay lỗi từ bàn phím.{" "}
                            </p>
                            <img
                              className="img-detail"
                              src="https://cdn.tgdd.vn/Products/Images/4547/230872/ban-phim-co-co-day-gaming-corsair-k68-rgb-den-050622-105419.jpg"
                            />
                            <p>
                              Thứ 2 là về độ dày, ban đầu khi nhìn vào mình nghĩ
                              sẽ rất mỏng nhưng khi cầm lên thì “em nó” dày vừa
                              đủ, gõ vào âm phát ra rất đầm. Thứ 3 là về độ
                              xuyên LED, mình test thử khoảng vài phút ở chế độ
                              chuyển màu RGB, thì phải công nhận là LED xuyên
                              rất mượt trên từng keycap, các màu sắc chuyển qua
                              lại nhìn rất nịnh mắt, phải nói là “mượt như
                              Sunsilk". Nếu cho mình ngồi hẳn 5 phút để ngồi
                              ngắm màu đèn của bàn phím này thì mình đồng ý
                              ngay.
                            </p>
                            <h5>
                              Red Switch gõ cực êm, “dân chơi không ngại mưa
                              rơi” với chống nước IP32
                            </h5>
                            <p>
                              Switch trên chiếc bàn phím Corsair này được sử
                              dụng của nhà Cherry MX, tất nhiên đó là Red Switch
                              nên độ nảy và hành trình phím trên “em này” khá
                              tốt. Ở độ nảy trên em này rất nhanh, gần như là nó
                              phản hồi các bạn ngay lập tức khi ấn xuống khiến
                              cho việc chơi game sướng hơn rất nhiều. Dù bạn
                              chiến Liên Minh Huyền Thoại, đá FIFA hay làm bất
                              cứ việc gì cần phải gõ bàn phím thì Corsair K68
                              RGB đều có thể đáp ứng tốt.
                            </p>
                            <img
                              className="img-detail"
                              src="https://cdn.tgdd.vn/Products/Images/4547/230872/ban-phim-co-co-day-gaming-corsair-k68-rgb-den-050622-105431.jpg"
                            />
                            <p>
                              Một trong những yếu tố làm nên tên tuổi của dòng
                              K68 đó là tiện ích chống bụi và chống nước IP32.
                              Nói rõ hơn một chút về cơ chế chống nước của
                              Corsair K68 RGB, bạn sẽ thấy rằng nhà sản xuất sử
                              dụng một lớp cao su mỏng để bảo vệ bản mạch bên
                              dưới. Lớp cao su này nhô cao lên bao bọc xung
                              quanh từng nút switch, kết hợp với nút keycaps cao
                              đóng vai trò như một chiếc nắp đậy nhằm hạn chế
                              ngăn cho nước hay các chất lỏng, bụi bẩn lọt vào
                              Switch. Nếu bạn có lỡ tay đánh đổ cốc nước của
                              mình lên bàn phím thì chính lớp cao su này sẽ cách
                              ly nước với các linh kiện điện tử khác có trong
                              bàn phím giúp nó sống sót. Tuy nhiên đừng có mà
                              dại dột đem ngâm nguyên bàn phím vào nước thì nó
                              vẫn sẽ chết bạn nhé!
                            </p>
                            <img
                              className="img-detail"
                              src="https://cdn.tgdd.vn/Products/Images/4547/230872/ban-phim-co-co-day-gaming-corsair-k68-rgb-den-050622-105956.jpg"
                            />
                            <h5>
                              Custom chế độ LED theo sở thích trên phần mềm ICUE
                            </h5>
                            <p>
                              Một trong những điểm mạnh nhất của Corsair K68 RGB
                              chính là hệ sinh thái sản phẩm mà Corsair xây dựng
                              nên. Sử dụng phần mềm Corsair ICUE, bạn có thể dễ
                              dàng đồng bộ hoá đèn của K68 RGB với những sản
                              phẩm khác của Corsair như chuột, RAM, thùng máy,
                              tản nhiệt,... Phần mềm tương đối dễ sử dụng với 5
                              mục tùy chỉnh:
                            </p>
                            <ul>
                              <li>Key Assignments: Tạo macro bàn phím</li>
                              <li>
                                Lighting Effects: Tùy chỉnh đèn LED RGB - hiệu
                                ứng ánh sáng
                              </li>
                              <li>
                                Performance: Tùy chỉnh các phím chức năng đa
                                phương tiện
                              </li>
                              <li>
                                Hardware Lighting: Tùy chỉnh hiệu ứng ánh sáng
                                không cần mở phần mềm
                              </li>
                              <li>
                                Device Settings: Tùy chỉnh cài đặt, kết nối với
                                các thiết bị Corsair
                              </li>
                            </ul>
                            <p>
                              Nhờ vào phần cao su trong suốt mà ánh sáng RGB có
                              thể xuyên qua cũng như lan tỏa ra một cách đều đặn
                              hơn rất nhiều. Toàn bộ phần nền đều được thắp sáng
                              rất đã mắt cho dù là chỉnh chế độ ánh sáng như thế
                              nào.
                            </p>
                            <img
                              className="img-detail"
                              src="https://cdn.tgdd.vn/Products/Images/4547/230872/ban-phim-co-co-day-gaming-corsair-k68-rgb-den-050622-105417.jpg"
                            />
                            <p>
                              Tóm lại, K68 là một bàn phím chơi game thuần túy,
                              do đó các tính năng không trực tiếp phục vụ cho
                              mục đích này đều được tối giản. Nếu bạn đang tìm
                              kiếm một loại bàn phím cơ với mức giá tầm trung và
                              muốn trải nghiệm khả năng chống bụi và nước hay
                              một số công nghệ như Cherry MX Red và Anti
                              Ghosting thì Corsair K68 là một sản phẩm vô cùng
                              hợp lý.
                            </p>

                            <div class="">
                              <p></p>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            )
        )}
      </div>

      <RelatedProduct />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
