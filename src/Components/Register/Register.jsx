import "./Register.css";
import React, { useState } from "react";
import logo from "../Images/logo.webp";
import { useNavigate } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const { username, fullname, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerHandle = () => {
    if (
      user.email !== "" &&
      user.fullname !== "" &&
      user.password !== "" &&
      user.username !== ""
    ) {
      navigate("/Login");
    }
  };

  return (
    <div className="regismain">
      <div className="logomain">
        <img className="logo" src={logo} alt="logo"></img>
        <p>TechieShop</p>
      </div>

      <div className="regisForm-format">
        <h3>Đăng ký</h3>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="text"
            name="fullname"
            placeholder="Họ và tên"
            value={fullname}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => handleChange(e)}
            required
          />
          <button onClick={registerHandle} type="submit" name="submit">
            Đăng ký
          </button>
        </form>
        <Link to="/Login">
          <p>Bạn đã có tài khoản? Đăng nhập ngay </p>
        </Link>
      </div>
    </div>
  );
}
export default Register;
