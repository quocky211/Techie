import "./Login.css";
import { useNavigate } from "react-router-dom";
import FbIcon from "../Images/facebook.ico";
import GgIcon from "../Images/google.ico";
import logo from "../Images/logo.webp";
import { Link } from "react-router-dom";
import { Log_in, SetUserFullName } from "../../actions";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { Form, Button } from "semantic-ui-react";
import { useState } from "react";

function Login(props) {

  const [isLoginSuccess, setisLoginSuccess] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


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

  const onLogin = (data) => {
    let userData = JSON.parse(localStorage.getItem("da_dang_ky"));
    if (userData !== null) {
      for (const user of userData) {
        if (
          user.username === data.username &&
          user.password === data.password
        ) {
          props.SetUserFullName(user.fullname);
          props.Log_in();
          navigate("/MainPage");
          setisLoginSuccess(true);
          break;
        }
      }

    }
    setisLoginSuccess(false);
  };
  return (
    <div className="loginmain">
      <div className="logomain">
        <img className="logo" alt="" src={logo}></img>
        <p>TechieShop</p>
      </div>

      <div className="loginForm">
        <h3>Đăng nhập</h3>

        {isLoginSuccess ? (
          <></>
        ) : (
          <p className="formInputError">Tài khoản hoặc mật khẩu không chính xác</p>
        )}

        <Form onSubmit={handleSubmit(onLogin)}>
          <Form.Field className="formInput">
            <input
              style={{ borderRadius: "100px" }}
              {...register("username", { required: true })}
              placeholder="Tên người dùng"
              type="text"
            />
          </Form.Field>
          {errors.username && (
            <p className="formInputError">Tài khoản không hợp lệ</p>
          )}
          <Form.Field className="formInput">
            <input
              style={{ borderRadius: "100px" }}
              {...register("password", { required: true })}
              placeholder="Mật khẩu"
              type="password"
            />
          </Form.Field>
          {errors.password && (
            <p className="formInputError">Mật khẩu không hợp lệ</p>
          )}
          <Button className="formButton" name="submit" type="submit">
            Đăng nhập
          </Button>
        </Form>
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
