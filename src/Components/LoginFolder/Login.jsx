import "./Login.css";
import FbIcon from "../Images/facebook.ico";
import GgIcon from "../Images/google.ico";
import logo from "../Images/logo.webp";

function Login() {
  return (
    <div className="loginmain">
      <div className="logomain">
        <img className="logo" src={logo}></img>
        <p>TechieShop</p>
      </div>

      <div className="loginForm">
        <h3>Đăng nhập</h3>
        <form action="">
          <input type="text" name="" id="" placeholder="Email hoặc số điện thoại"/>
          <input type="text" name="" id="" placeholder="Mật khẩu" />
          <button>Đăng nhập</button>
        </form>
        <a href="#">Quên mật khẩu</a>
        <p>Bạn chưa có tài khoản? <a href="#">Đăng ký ngay</a></p>
        <p>Hoặc đăng nhập bằng</p>
        <div className="loginForm-icon">
          <button>
            <img src={FbIcon} alt="facebook icon" />
            Facebook
          </button>
          <button>
            <img src={GgIcon} alt="facebook icon" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
