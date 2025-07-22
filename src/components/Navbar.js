import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const getActiveClass = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            DailyNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={getActiveClass("/home")}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getActiveClass("/business")} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getActiveClass("/entertainment")} to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getActiveClass("/general")} to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getActiveClass("/health")} to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getActiveClass("/science")} to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getActiveClass("/sports")} to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={getActiveClass("/technology")} to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;