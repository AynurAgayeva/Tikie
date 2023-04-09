import React, { Component } from 'react'

 class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact mt-5">
          <div className="contact-text d-flex align-items-center justify-content-center mb-5">
            <h2 className="">Contact</h2>
          </div>
          <div className="contact-menu">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1675020266105!5m2!1sru!2s"
              width={"100%"}
              height={500}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="cards-con">
              <div className="cards">
                <div className="cards ps-5 ">
                  <div className="row g-5  mx-auto  py-5  px-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
                    <div className="feature col py-5 text-light  ">
                      <div className="contact-icon d-inline-flex align-items-center justify-content-center text-light fs-2 mb-3">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <h5 className="contact-head ">Adress</h5>
                      <p>807 Mize Cemetery Rd, Somerset KY, 42503</p>
                    </div>
                    <div className="feature col py-5  text-light  ">
                      <div className="contact-icon d-inline-flex align-items-center justify-content-center text-light fs-2 mb-3">
                        <i class="fa-solid fa-phone"></i>
                      </div>
                      <h5 className="contact-head ">Phone</h5>
                      <p>+84 (007) 1996-5432</p>
                    </div>

                    <div className="feature col py-5 text-light ">
                      <div className="contact-icon d-inline-flex align-items-center justify-content-center text-light fs-2 mb-3">
                        <i class="fa-solid fa-envelope"></i>
                      </div>
                      <h5 className="contact-head ">Email</h5>
                      <p>sayhello@tikie.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-form">
              <div className="form-con row py-5 px-5">
                <div className="col-12 col-lg-6"> </div>
                <div className="col-12 col-lg-6">
                  <h1>SEND US A MESSAGE</h1>
                  <form>
                    <div className="mb-3 d-flex align-items-center justify-content-around ">
                      <input
                        type="email"
                        className="form-control me-2 "
                        placeholder="Your name"
                        aria-describedby="emailHelp"
                      />
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        type="password"
                        className="form-control"
                        rows={10}
                        placeholder="Your message"
                      />
                    </div>

                    <button
                      style={{ width: "100%", padding: "10px" }}
                      type="submit"
                      className="btn btn-dark"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact