import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div className="container pb-4 footer-main-container">
          <div className="row pt-3">
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12"></div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <h2 className="mid-heading">Subscribe to our newsletter</h2>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <div className="card subscribe-form">
                <form>
                  <input
                    type="email"
                    name=""
                    className="form-control"
                    placeholder="Enter Email address"
                  />
                  <button className="btn btn-block btn-subscribe">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12"></div>
          </div>
        </div>
        <div className="container-fluid bottom-footer">
          <div className="container pb-5 bottom-footer-container">
            <div className="row pb-4">
              <div className="col-lg-4 col-md-6 col-sm-7 col-6 footer-logo-main">
                <div className="card footer-logo">
                  <a href="index.html">
                    <img src="img/logo.png" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-4 col-4 main-footer-links">
                <div className="row footer-links mt-5 pt-3">
                  <div className="col-sm-5">
                    <a href="#">About us</a>
                    <a href="#">Careers</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Press</a>
                  </div>
                  <div className="col-sm-4">
                    <a href="#">Write for us</a>
                    <a href="#">Write a review</a>
                    <a href="#">Sitemap</a>
                  </div>
                  <div className="col-sm-2"></div>
                </div>
                <div className="social-links mt-5 pb-5">
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-medium"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-1 col-2">
                <div className="to-top" id="toTop">
                  <i className="fas fa-angle-up mt-3"></i>
                  <p>Top</p>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="social-links1 mt-5 text-center">
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
