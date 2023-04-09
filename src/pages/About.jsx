import React, { Component } from 'react'

 class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <div className="about-text d-flex align-items-center justify-content-center">
            <h2 className="">About Us</h2>
          </div>
          <div className="about-photo ms-5 me-5">
            <img
              src="https://wpbingosite.com/wordpress/tikie/wp-content/webp-express/webp-images/uploads/2021/04/img-about.jpg.webp"
              alt=""
            />
          </div>
        </div>

        <div className=" ms-3 row g-4 py-5 row-cols-1 row-cols-md-2 row-cols-sm-2 row-cols-lg-3">
          <div className="feature col">
            <h6 className="ms-lg-5 ps-lg-4">FREE GIFT WRAP</h6>

            <div className="feature-text d-flex align-items-center justify-content-cente me-5">
              <div className="feature-img d-flex align-items-center justify-content-center">
                <img
                  src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2021/04/star-03.png"
                  alt=""
                />
              </div>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className="feature col">
            <h6 className="ms-lg-5 ps-lg-4">FREE DELIVERY WORLDWIDE</h6>

            <div className="feature-text d-flex align-items-center justify-content-cente me-5">
              <div className="feature-img d-flex align-items-center justify-content-center">
                <img
                  src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2021/04/unique-03.png"
                  alt=""
                />
              </div>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>

          <div className="feature col">
            <h6 className="ms-lg-5 ps-lg-4">ONLINE ORDERING</h6>

            <div className="feature-text d-flex align-items-center justify-content-cente me-5">
              <div className="feature-img d-flex align-items-center justify-content-center">
                <img
                  src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2021/04/quality-03.png"
                  alt=""
                />
              </div>
              <p>
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
                sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About