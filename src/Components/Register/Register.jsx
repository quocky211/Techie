import "./Register.css";
import React, { useState } from "react";
import logo from "../Images/logo.webp";
import { useNavigate } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
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

  const registerHandle = (e) => {
    e.preventDefault();
    let registered = {
      email: email,
      fullname: fullname,
      password: password,
      username: username,
    };
    let storageArray = [];

    if (localStorage.getItem("da_dang_ky") !== null)
      storageArray = JSON.parse(localStorage.getItem("da_dang_ky"));

    storageArray.push(registered);

    localStorage.setItem("da_dang_ky", JSON.stringify(storageArray));
    navigate("/Login");
  };

  return (
    <div className="regismain">
      <div className="logomain">
        <img className="logo" src={logo} alt="logo"></img>
        <p>TechieShop</p>
      </div>

      <div className="regisForm-format">
        <h3>Đăng ký</h3>
        <form onSubmit={registerHandle}>
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
          <button type="submit" name="submit">
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
