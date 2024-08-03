import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faSearch,
  faHome,
  faTv,
  faFilm,
  faBaseball,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [touch, setTouch] = useState(false);

  const label = (text) => {
    return (
      <>
        {touch && (
          <Fade
            style={{
              position: "absolute",
              left: "13vh",
              color: "#fff",
              fontSize: "22px",
              marginTop: "-8px",
              padding:'0px'
            }}
          >
            <span className="nav-label">{text}</span>
          </Fade>
        )}
      </>
    );
  };

  return (
    <>
      <div
        className={`header-container ${touch ? "mouse-enter" : ""}`}
        style={{ zIndex: "20" }}
      >
        <div className="row w-100 m-0 p-0">
          <div
            className="col-md-2"
            id="nav"
            style={{ height: "100vh", textAlign: "center" }}
          >
            <div
              className="d-flex flex-column align-items-center"
              onMouseEnter={() => setTouch(true)}
              onMouseLeave={() => setTouch(false)}
              style={{ height: "100%" }}
            >
              <div>
                {" "}
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: "55px",
                    marginTop: "30px",
                    marginBottom: "20px",
                    marginLeft: "30px",
                  }}
                />
              </div>
              <div
                className="nav"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <div className="nav-wrapper">
                  <Link to="/mypage" style={{ display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faCircleUser}
                      // size="sm"
                      // className="mb-5 mt-4"
                      style={{ color: "#eceff4" }}
                    />
                    {label("My Space")}
                  </Link>
                  <Link to="/search" style={{ display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      // size="sm"
                      // className="mb-5"
                      style={{ color: "#e3e7ee" }}
                    />
                    {label("Search")}
                  </Link>
                  <Link to="/" style={{ display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faHome}
                      // size="sm"
                      // className="mb-5"
                      style={{ color: "#f0f2f4" }}
                    />
                    {label("Home")}
                  </Link>
                  <Link to="/" style={{ display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faTv}
                      // size="sm"
                      // className="mb-5"
                      style={{ color: "#eaecf1" }}
                    />
                    {label("TV")}
                  </Link>
                  <Link to={"/"} style={{ display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faFilm}
                      // size="sm"
                      // className="mb-5"
                      style={{ color: "#e8eaee" }}
                    />
                    {label("Movies")}
                  </Link>
                  <Link to="/" style={{ display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faBaseball}
                      // size="sm"
                      // className="mb-5"
                      style={{ color: "#f7f7f7" }}
                    />
                    {label("Sports")}
                  </Link>
                  <Link to="/" style={{ display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faList}
                      // size="sm"
                      // className="mb-5"
                      style={{ color: "#f2f4f8" }}
                    />
                    {label("Categories")}
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;
