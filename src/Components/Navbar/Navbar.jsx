import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("/");

  return (
    <div className="navbar">
      <NavLink to={"/"}><h1 className="text-logo">{assets.text_logo}</h1></NavLink>
      <ul>
        <NavLink to={"/"}>
          <li
            onClick={() => setMenu("/")}
            className={menu === "/" ? "active" : ""}
          >
            Home
          </li>
        </NavLink>
        <NavLink to={"/menu"}>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </li>
        </NavLink>
        <NavLink to={"/products"}>
          <li
            onClick={() => setMenu("products")}
            className={menu === "products" ? "active" : ""}
          >
            Products
          </li>
        </NavLink>
        <NavLink to={"/about-us"}>
          <li
            onClick={() => setMenu("about-us")}
            className={menu === "about-us" ? "active" : ""}
          >
            About Us
          </li>
        </NavLink>
        <NavLink to={"/contact-us"}>
          <li
            onClick={() => setMenu("contact-us")}
            className={menu === "contact-us" ? "active" : ""}
          >
            Contact Us
          </li>
        </NavLink>
      </ul>
      <div className="nav-btn">
        <button onClick={()=>setShowLogin(true)}>Login</button>
        <button>Buy Premium</button>
      </div>
    </div>
  );
};

export default Navbar;
