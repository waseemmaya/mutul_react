import React, { Component } from "react";

class Body3 extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <h2 className="mid-heading text-center">Study Abroad Destinations</h2>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-5">
            <div className="top-main-items">
              <img src="img/homepage/home2.png" className="img-fluid" />
              <h6>The Azores, Portugal</h6>
              <p>lorem ipsum set emit, constecuter adispoting elit</p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-5">
            <div className="top-main-items">
              <img src="img/homepage/home1.png" className="img-fluid" />
              <h6>The Azores, Portugal</h6>
              <p>lorem ipsum set emit, constecuter adispoting elit</p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-5">
            <div className="top-main-items">
              <img src="img/homepage/home3.png" className="img-fluid" />
              <h6>The Azores, Portugal</h6>
              <p>lorem ipsum set emit, constecuter adispoting elit</p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 mb-5">
            <div className="top-main-items">
              <img src="img/homepage/home8.png" className="img-fluid" />
              <h6>The Azores, Portugal</h6>
              <p>lorem ipsum set emit, constecuter adispoting elit</p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div className="text-center show-more mt-2 mb-5">
          <a href="" className="btn">
            Show More
          </a>
        </div>
      </div>
    );
  }
}

export default Body3;
