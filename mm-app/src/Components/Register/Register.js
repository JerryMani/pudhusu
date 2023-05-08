import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import regImg from "../../assets/reg.jpg";
import Login from "../Login/Login";

import "./register.css";
import RegContent from "./RegContent";
import SS from "../SS/SS";
import CardList from "../Cards/Cards";

const Register = () => {
  const navigate = useNavigate()
  const handleRegister = (event) => {
    event.preventDefault()
    navigate("/basic-info")
  }

  return (
    <div className="reg-cont">
      <div className="reg-nav">
        <Link className="logo-link-img">
          <img src={logo} alt="Tamil Matrimony" />
        </Link>
        <Link className="reg-login">
          <Login />
        </Link>
      </div>
      <div className="reg-body-cont">
        <div className="reg-form-cont">
        <h2 style={{textAlign: "center", color: "#fff", fontSize: "1.5rem"}}>A Happy marriage is the union of to good forgivers</h2>
          <form className="reg-form-content" onSubmit={handleRegister}>
            <input type="text" placeholder="Name" className="form-controls" />
            {/* <select className="form-controls">
              <option>Profile for</option>
              <option value="Myself">Myself</option>
            </select>
            <select className="form-controls">
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select> */}
            <input type="date" className="form-controls" />
            <input
              type="tel"
              placeholder="Mobile"
              className="form-controls"
            />
            {/* <input type="text" placeholder="Email" className="form-controls" /> */}
            <input
              type="password"
              placeholder="password"
              className="form-controls"
            />
            <button type="submit" className="btn btn-primary reg-btn">
              Register
            </button>
          </form>
        </div>
        <div className="reg-body-form-img-cont">
          <img
            src={regImg}
            alt="Tamil Matrimony"
            className="reg-body-form-img"
          />
        </div>
      </div>
      <RegContent/>
      <CardList/>
      <SS/>
    </div>
  );
};

export default Register;
