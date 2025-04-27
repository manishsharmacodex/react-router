import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("/");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h1 className="text-logo" onClick={()=>navigate("/")}>{assets.text_logo}</h1>
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
        <NavLink to={"/about"}>
          <li
            onClick={() => setMenu("about")}
            className={menu === "about" ? "active" : ""}
          >
            About
          </li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact
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
