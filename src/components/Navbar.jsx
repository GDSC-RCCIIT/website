import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../assets/dsc_logo.png";
import "./Navbar.css";
import { useDatabase } from "../contexts/Database";

export default function Navbar() {
  const { data } = useDatabase();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMoblileMenu = () => setClick(false);

  if (data["chapter-name"] === undefined) {
    return <></>;
  }

  return (
    <>
      <IconContext.Provider value={{ color: " gray" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <NavLink to="/" className="navbar-logo" onClick={closeMoblileMenu}>
              <img className="logo_img" src={logo} alt="GDSC logo" />
              {data["chapter-name"]}
            </NavLink>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/event"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/speakers"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Speakers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/team"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/contact"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
