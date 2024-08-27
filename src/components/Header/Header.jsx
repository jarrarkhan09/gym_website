import React from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

const nav__links = [
  {
    path: "#",
    display: "Home",
  },
  {
    path: "#",
    display: "Schedule",
  },
  {
    path: "#",
    display: "Classes",
  },
  {
    path: "#",
    display: "Pricing",
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          {/* =========== logo ==========  */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>Flexpro</h2>
          </div>

          {/* ========== navigation menu =========== */}

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <a href="{item.path}">{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============= nav right ============ */}
          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
