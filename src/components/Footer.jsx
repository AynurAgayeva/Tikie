import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <footer className="row ms-2 pt-5 row-cols-1 row-cols-sm-2 row-cols-md-5 row-cols-lg-6 py-5 my-5 border-top">
          <div className="col mb-3">
            <h6>Contact us</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  199 Amsterdam 72, Wall street, Nox 20110 NY
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  (+123) 456 789
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  tikieshopbook@domain.com
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Branch: New York, Paris, France, California, Madrid, Spain
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Open hours: 8.00 – 20.00 Mon – Fri
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3" />
          <div className="col mb-3 ">
            <h6>PRINT RESTORATION</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Bestsellers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Interviews
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Authors Story
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Book Fairs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Privacy & Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h6>SOCIAL MEDIA</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Facebook
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Dribbble
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Behance
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h6>ABOUT US</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Story
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Institute
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Gift cards
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>
              <img
                src="https://wpbingosite.com/wordpress/tikie/wp-content/uploads/2020/06/paymet-2.png"
                alt=""
          
              />
            </h5>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer