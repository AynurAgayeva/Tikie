import React, { Component } from 'react'

 class Home extends Component {
  render() {

    return (
      <div className="home ms-4 me-2">
        <div className="row col-con row-cols-1 row-cols-lg-2   g-4 py-5">
          <div className="col col-one col-12 col-lg-6 d-none d-lg-block  ">
            <div
              className="card card1 card-cover h-90 card-cover1  overflow-hidden  rounded-5  "
              style={{
                backgroundImage:
                  'url("https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-39.png.webp")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h6 className="mb-4 pt-2 display-6 lh-1 fw-600 text-white ">
                  " WHAT I LOVE THE MOST <br /> ABOUT READING IS THE SENSATION
                  OF DISCOVERY, "
                </h6>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <h5>J.K. Rowling</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col col-two col-12 col-lg-6 d-none d-lg-block">
            <div
              className="card card-cover h-100 overflow-hidden  rounded-5"
              style={{
                backgroundImage:
                  'url("https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-40.png.webp")',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-600">
                  <span style={{ fontSize: "16px" }} className="">
                    SHOP
                  </span>{" "}
                  <br /> ART BOOK <br />
                  WEB DESIGN
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <button className="btn home-btn">SHOP NOW</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-lg-3  g-4 me-5 mt-5 mb-5">
          <div className="col short mb-5 pb-5 ">
            <div
              className="card card-cover h-70 overflow-hidden text-bg-dark rounded-5 "
              style={{
                backgroundImage:
                  'url("https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-41.png.webp")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "none",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 ms-5 mb-4 display-6 lh-1 fw-bold">
                  GET UP <br /> TO 60% <br /> AUHTHORS
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <button className="btn home-btn">SHOP NOW</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col short  ">
            <div
              className="card card-cover h-70  overflow-hidden text-bg-dark rounded-5  "
              style={{
                backgroundImage:
                  'url("https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-42.png.webp")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "none",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 ms-5 mb-4 display-6 lh-1 fw-bold">
                  SHOP <br /> BOOK <br /> CHILDREN'S
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <button className="btn home-btn">SHOP NOW</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col ">
            <div
              className="card card-cover overflow-hidden text-bg-dark rounded-5 "
              style={{
                backgroundImage:
                  'url("https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/banner-43.png.webp")',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "none",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3
                  className=" mb-4 display-6 lh-1 fw-bold"
                  style={{ fontSize: "18px" }}
                >
                  SHOP <br /> FAIRYTALE <br />
                  COLLECTION
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <button className="btn home-btn">SHOP NOW</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home