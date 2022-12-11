import "./Login.css";
import { useNavigate } from "react-router-dom";
import FbIcon from "../Images/facebook.ico";
import GgIcon from "../Images/google.ico";
import logo from "../Images/logo.webp";
import { Link } from "react-router-dom";
import { Log_in, SetUserFullName } from "../../actions";
import { connect } from "react-redux";
import { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fbLogin = () => {
    window.open(
      "https://www.facebook.com/login/",
      "_blank",
      "toolbar=0,location=0,menubar=0"
    );
  };
  const googleLogin = () => {
    window.open(
      "https://accounts.google.com/ServiceLogin",
      "_blank",
      "toolbar=0,location=0,menubar=0"
    );
  };
  const handleLogin = (e) => {
    e.preventDefault();
    let currentData = JSON.parse(localStorage.getItem("da_dang_ky"));
    if (currentData !== null) {
      currentData.map((item) => {
        if (item.username == username && item.password == password) {
          props.SetUserFullName(item.fullname);
          props.Log_in();
          navigate("/MainPage");
        }
      });
    }
  };
  return (
    <div className="loginmain">
      <div className="logomain">
        <img className="logo" alt="" src={logo}></img>
        <p>TechieShop</p>
      </div>

      <div className="loginForm">
        <h3>Đăng nhập</h3>
        <form onSubmit={handleLogin}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Email hoặc số điện thoại"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            name="password"
            placeholder="Mật khẩu"
            required
          />
          <button name="submit" type="submit">
            Đăng nhập
          </button>
        </form>
        <br></br>
        <Link to="/Register">
          <p>Bạn chưa có tài khoản? Đăng ký ngay</p>
        </Link>
        <p>Hoặc đăng nhập bằng</p>
        <div className="loginForm-icon">
          <button type="button" onClick={() => fbLogin}>
            <img src={FbIcon} alt="facebook icon" />
            Facebook
          </button>
          <button type="button" onClick={() => googleLogin}>
            <img src={GgIcon} alt="facebook icon" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedin: state._todoProduct.isLoggedin,
    userFullname: state._todoProduct.userFullname,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    Log_in: () => dispatch(Log_in()),
    SetUserFullName: (payload) => dispatch(SetUserFullName(payload)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
