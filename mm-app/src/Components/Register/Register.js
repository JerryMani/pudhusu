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
        <p className="parag">Already have an account? </p>
        <Link className="reg-login">
        <Login />
        </Link>
      </div>
      <div className="reg-body-cont">
        <div className="reg-form-cont">
        <h2 style={{textAlign: "center", color: "#fff", fontSize: "1.5rem"}}>A Happy marriage is the union of to good forgivers</h2>
          <form className="reg-form-content" onSubmit={handleRegister}>
            <select type="text" placeholder="Profile For" className="form-controls" >
            
                  <option disabled="disabled" selected="selected">
                    Profile for
                  </option>

                  <option value="1">Myself</option>
                  <option value="3">Daughter</option>
                  <option value="3">Son</option>

                  <option value="2">Brother</option>
                  <option value="3">Sister</option>
                  <option value="3">Relative</option>
                  <option value="3">Friend</option>
                </select>
             
                <select type="text" placeholder="Looking For" className="form-controls" >
            
            <option disabled="disabled" selected="selected">
            Looking For
            </option>

            <option value="Bride">Bride</option>
            <option value="Groom">Groom</option>
          
          </select>

           
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
