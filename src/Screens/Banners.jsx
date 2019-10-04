import React from "react";

const Banner1 = () => {
  return (
    <div className="container ads-banner mb-5 mt-5">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <img src="img/homepage/home10.png" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

const Banner2 = () => {
  return (
    <div className="container ads-banner mb-5">
      <div className="row">
        <div className="col-xl-9 col-lg-9 col-md-8 col-sm-6 mb-3">
          <img src="img/homepage/home10.png" className="img-fluid" />
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-3">
          <img src="img/homepage/home11.png" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export { Banner1, Banner2 };
