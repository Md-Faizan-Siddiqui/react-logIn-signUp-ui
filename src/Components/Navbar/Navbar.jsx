import React from "react";
import { MenuItems } from "./MenuItems";
import "../Navbar/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <>
      <nav className="navbar">
        <div>
          <h1 className="navbarLogo">Logo</h1>
        </div>
        <div className="navItems">
          <ul className="ulNavbarItems">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.url}
                    className={
                      location.pathname === item.url ? "activeBtn" : item.cName
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
