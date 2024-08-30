import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/dumble.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="footer__logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>FlexPro</h2>
            </div>
            <p>
              "Fitbody – Connect with us for support, follow our updates, and
              find fitness tips. Let’s reach your goals together!
            </p>
          </div>
          <div className="footer__box">
            <div className="footer__title">Company</div>
            <ul className="footer__links">
              <li>
                <a href="#">Our program</a>
              </li>
              <li>
                <a href="#">Our plan</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <div className="footer__title">Quick Links</div>
            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <div className="footer__title">Quick Links</div>
            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright - {year} developed by Jarrar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
