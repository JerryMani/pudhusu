import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import "./header.css";

const Header = () => {
  const [dropDown, setDropDown] = useState(false)

  return (
    <nav className="header-cont">
      <div className="header-left-cont">
        <img src={logo} alt="Tamil Matrimony" className="company-logo" />
        <ul className="header-nav-links-list">
          <li className="header-nav-links-item">
            <NavLink to="/" className="header-nav-link">
              MY HOME
            </NavLink>
          </li>
          <li className="header-nav-links-item">
            <NavLink to="/myHome" className="header-nav-link">
              SEARCH
            </NavLink>
          </li>
          <li className="header-nav-links-item" onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)}>
            <NavLink to="/matches" className="header-nav-link">
              MATCHES
            </NavLink>
            {dropDown && (
              <ul className="sub-menu">
                <li>Matches</li>
                <li>Matches</li>
                <li>Matches</li>
                <li>Matches</li>
                <li>Matches</li>
            </ul>
            )}
          </li>
          <li className="header-nav-links-item">
            <NavLink to="/myHome" className="header-nav-link">
              MAILBOX
            </NavLink>
          </li>
          <li className="header-nav-links-item">
            <NavLink to="/payment/paymentoption" className="header-nav-link">
              UPGRADE NOW
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header-profile-cont">
        <IoIosNotifications size={30} color="6D778D" />
        <div className="header-profile">
          <CgProfile size={40} color="6D778D" />
          <MdKeyboardDoubleArrowDown size={25} color="6D778D" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
