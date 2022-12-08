import "./ShipAddress.css"
import {NavLink as Link} from "react-router-dom";
import $ from 'jquery'; 
import axios from "axios";

function ShipAddress()
{   
    const host = "https://provinces.open-api.vn/api/";
var callAPI = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data, "province");
        });
}
callAPI('https://provinces.open-api.vn/api/?depth=1');
var callApiDistrict = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data.districts, "district");
        });
}
var callApiWard = (api) => {
    return axios.get(api)
        .then((response) => {
            renderData(response.data.wards, "ward");
        });
}

var renderData = (array, select) => {
    let row = ' <option disable value="">chọn</option>';
    array.forEach(element => {
        row += `<option value="${element.code}">${element.name}</option>`
    });
    document.querySelector("#" + select).innerHTML = row
}

// function myFunctionProvince()
// {
//     callApiDistrict(host + "p/" + $("#province").val() + "?depth=2");
//     printResult();
// }
// function myFunctionDistrict()
// {
//     callApiWard(host + "d/" + $("#district").val() + "?depth=2");
//     printResult();
// }
// function myFunctionWard()
// {
//     printResult();
// }

$("#province").on("change",function() {
    callApiDistrict(host + "p/" + $("#province").val() + "?depth=2");
    printResult();
});
$("#district").on("change",function() {
    callApiWard(host + "d/" + $("#district").val() + "?depth=2");
    printResult();
});
$("#ward").on("change",function() {
    printResult();
})

var printResult = () => {
    if ($("#district").val() !== "" && $("#province").val() !== "" &&
        $("#ward").val() !== "") {
            let result = $("#province option:selected").text() +
                " | " + $("#district option:selected").text() +
                " | " + $("#ward option:selected").text();
            $("#result").text(result)
        }
}
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
            <div className="form-address-container">
                <form action="/Payment" className="form-address">
                    <input type="text" placeholder="Họ và tên" required/>
                    <div className="mail-phone">
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Số điện thoại" pattern="[0]{1}[1-9]{1}[0-9]{8}" required/>
                    </div>
                    <input type="text" placeholder="Địa chỉ" required/>
                    <div className="detail-address">
                        <select name="" id="province">
                            <option  value="-1">Chọn Tỉnh</option>
                        </select>
                        <select name="" id="district">
                            <option  value="-1">Chọn Quận</option>
                        </select>
                        <select name="" id="ward">
                            <option  value="-1">Chọn Phường</option>
                        </select>
                    </div>
                    <textarea placeholder="Ghi chú" rows="4"></textarea>
                    <button type="submit" name="submit" className="btn-Submit">Tiếp tục</button>
                </form>
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.26.1/axios.min.js" integrity="sha512-bPh3uwgU5qEMipS/VOmRqynnMXGGSRv+72H/N260MQeXZIK4PG48401Bsby9Nq5P5fz7hy5UGNmC/W1Z51h2GQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    {/* <script src="./index.js"></script> */}
        </div>
    );
}
export default ShipAddress;