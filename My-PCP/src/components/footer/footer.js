import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="medicine-footer">
      <div className="container-input">
        <div className="footer-text-main">Stay up to date with Us</div>
        <div className="footer-text-extra">Get in touch</div>
        <div className="container-footer-input">
          <div type="text" className="footer-input-out">
          </div>
          <input type="text" className="footer-input" placeholder="Enter your email address"></input>
            <button className="footer-button">Join now</button>
        </div>
      </div>
      <div className="container-footer-menu-products-investors">
        <div className="container-footer-menu">
          <div className="footer-menu">Home</div>
          <div className="footer-menu">Programs</div>
          <div className="footer-menu">Why Us</div>
          <div className="footer-menu">About Us</div>
        </div>
        <div className="container-footer-products-investors">
          <div className="container-footer-products">
            <div className="footer-text-main-products">PRODUCTS</div>
            <div className="footer-text-extra-products">Generics</div>
            <div className="footer-text-extra-products">Biosimilars</div>
            <div className="footer-text-extra-products">Over-The-Counter</div>
          </div>
          <div class="container-footer-investors">
            <div className="footer-text-main-investors">INVESTORS</div>
            <div className="footer-text-extra-investors">Financials</div>
            <div className="footer-text-extra-investors">News and Events</div>
            <div className="footer-text-extra-investors">
              Reports and fillings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
