import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to={"/"}>Etkinlikler</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to={"/Watched"}>Geçmiş Etkinlikler</Link>
            </li>
            <li>
              <Link to={"/Add"} className="btn">
                <i className="fas fa-plus"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
