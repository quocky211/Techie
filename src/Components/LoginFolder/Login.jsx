import "./Login.css";
import FbIcon from "../Images/facebook.ico";
import GgIcon from "../Images/google.ico";
import logo from "../Images/logo.webp";
import { Link } from "react-router-dom";
import { Log_in } from "../../actions";
import { connect } from "react-redux";

function Login(props) {
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
    props.Log_in();
    console.log(props.isLoggedin);
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
            type="text"
            name=""
            id=""
            placeholder="Email hoặc số điện thoại"
          />
          <input type="text" name="" id="" placeholder="Mật khẩu" />
          <Link to="/MainPage">
            <button onClick={handleClick}>Đăng nhập</button>
          </Link>
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
