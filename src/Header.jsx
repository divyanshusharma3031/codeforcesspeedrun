import logo1 from "./logo1.png";
import { Link, useLocation } from "react-router-dom";
import React from "react";
function Header() {
  let location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div id="navbar">
        <p id="websitename">Cfspeedrun</p>
        <ul id="nav">
          <li class="navitems">
            <Link
              className={`navlink ${location.pathname === "/" ? "active" : ""}`}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li class="navitems">
            <Link
              className={`navlink ${
                location.pathname === "/about" ? "active" : ""
              }`}
              aria-current="page"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
