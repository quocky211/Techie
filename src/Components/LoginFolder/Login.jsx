import "./Login.css";
import { useNavigate } from "react-router-dom";
import FbIcon from "../Images/facebook.ico";
import GgIcon from "../Images/google.ico";
import logo from "../Images/logo.webp";
import { Link } from "react-router-dom";
import { Log_in } from "../../actions";
import { connect } from "react-redux";
import { useState } from "react";
import Register from "../Register/Register";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const usernamechange = (event) => {
    setUsername(event.target.value);
  };
  const passwordchange = (event) => {
    setPassword(event.target.value);
  };

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
  const handleClick = () => {
    let currentData = [];
    currentData = JSON.parse(localStorage.getItem("da_dang_ky"));
    currentData.map(item => {
      if (item.username == username && item.password == password) {
        props.Log_in();
        navigate("/MainPage");
        console.log(props.isLoggedin);
      }
    })
    
  };
  return (
    <div className="loginmain">
      <div className="logomain">
        <img className="logo" alt="" src={logo}></img>
        <p>TechieShop</p>
      </div>

      <div className="loginForm">
        <h3>Đăng nhập</h3>
        <form action="">
          <input
            value={username}
            onChange={usernamechange}
            type="text"
            name="username"
            id=""
            placeholder="Email hoặc số điện thoại"
            required
          />
          <input
            onChange={passwordchange}
            type="password"
            value={password}
            name="password"
            id=""
            placeholder="Mật khẩu"
            required
          />
          <button name="submit" type="submit" onClick={() => handleClick()}>
            Đăng nhập
          </button>
        </form>
        <br></br>
        <Link to="/Register">
          <p>Bạn chưa có tài khoản? Đăng ký ngay</p>
        </Link>
        <p>Hoặc đăng nhập bằng</p>
        <div className="loginForm-icon">
          <button onClick={fbLogin}>
            <img src={FbIcon} alt="facebook icon" />
            Facebook
          </button>
          <button onClick={googleLogin}>
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
  };
};

function mapDispatchToProps(dispatch) {
  return {
    Log_in: () => dispatch(Log_in()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
