import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
 

const Footer = () => {
  return (
    <div className="footer-container"> 
      <footer className="footer">
        <ul className="footer-list">
          <ul style={{listStyle:"none",textAlignLast:"left"}}>
          <li className="footer-item pb-3">
            <span style={{ display: "flex", alignItems: "center" }}>
              <FaShoppingBag />
              <h4 style={{ marginLeft: "5px" }}>Mart</h4>
            </span>
          </li>
          <li>An 'Information Mart' is a <br /> database setup that is <br />used to store specific data for <br /> individual purposes, allowing,<br /> security, and flexibility   and <br />accessing the information.</li>
          </ul>
          <ul style={{listStyle:"none",textAlignLast:"left"}}> 
              <li className="footer-item fw-bold pb-3">About Us</li>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Temes & Conditions</li>
              <li>Privacy Policy</li>
          </ul>
          <ul style={{listStyle:"none",textAlignLast:"left"}}> 
              <li className="footer-item fw-bold pb-3">Customer Care</li>
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your order</li>
              <li>Corporate & Bulk <br />Purchasing</li>
              <li>Returns & Refunds</li>
          </ul>
         <ul style={{listStyle:"none",alignItems:"start",display:"flow", textAlignLast:"left"}}>
            <li className="footer-item fw-bold pb-3">Contact Us</li>
            <li>70 Washington Square</li>
            <li>South,New Yourk, NY 10012,<br />United State</li>
            <li><i>Email:</i> example@gmail.com</li>
            <li><i>Phone:</i> +1 1122 333 555</li>
          </ul>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
