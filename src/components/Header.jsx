import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-first navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid top-nav">
              <a className="navbar-brand phone ">
                HOTLINE: +84-(007)-1996-5432
              </a>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <a className="nav-link " href="#">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a className="nav-link" href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a className="nav-link" href="#">
                    <i class="fa-solid fa-basketball"></i>
                  </a>
                  <a className="nav-link" href="#">
                    <i class="fa-brands fa-behance"></i>
                  </a>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <nav className="navbar bg-nav navbar-expand-lg bg-body-tertiary pt-4 pb-4  ">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <img
                src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/05/logo-white.png.webp"
                alt=""
              />
            </a>
            <div className="">
              <form
                className="d-flex my-auto mt-3  ms-lg-5 ps-lg-5 bg-light "
                style={{ borderRadius: "30px" }}
                role="search"
              >
                <input
                  className="form-control "
                  style={{
                    width: "300px",
                    overflow: "hidden",
                    background: "none",
                    border: "none",
                  }}
                  type="search"
                  placeholder="Search for books by keyword"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <i class="fa-solid fa-magnifying-glass bg-light"></i>
                </button>
              </form>

              {/* <div
                className="inner-div d-flex ms-5 form-wrap"
                style={{ background: "white", width: "350px" }}
              >
                <form action="" style={{ background: "white", width: "350px" }}>
                  <input
                    type="text"
                    placeholder="Search for books by keyword"
                    className="search-box"
                  />
                  <button
                    type="submit"
                    className="search-button"
                    style={{ border: "none", background: "none" }}
                  >
                    <i class="fa-solid fa-magnifying-glass bg-light"></i>
                  </button>
                </form>
              </div> */}
            </div>

            <div className="collapse navbar-collapse mx-auto ">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link  active fw-bold"
                    aria-current="page"
                    href="#"
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        color: "#fff",
                        fontSize: "14px",
                      }}
                    >
                      <div className="d-flex">
                        <i class="fa-solid right-icon  fa-user me-3 mt-1  "></i>
                        <div className="icons">
                          <li>Sign in</li>
                          <li>My account</li>
                        </div>
                      </div>
                    </ul>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-bold" href="#">
                    <ul
                      style={{
                        listStyle: "none",
                        color: "#fff",
                        fontSize: "14px",
                      }}
                    >
                      <div className=" d-flex">
                        <i class="fa-solid right-icon    fa-cart-shopping  me-3 mt-1"></i>
                        <div className="icons">
                          <li>My Cart</li>
                          <li>$0.00</li>
                        </div>
                      </div>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar middle-nav bg-nav navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">
                    Shop
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </div>
              <div className="ms-auto d-lg-block d-none " style={{color:"#fff", fontSize :"11px", letterSpacing:"3px"}} >
                <p>FREE SHIPING FOR ORDERS OVER $25</p>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header













