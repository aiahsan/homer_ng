import React from "react";
export default () => {
  return (
    <div className="dash-cards">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 mt-3 col-lg-4 col-md-6">
            <div className="bg-white p-4 d-flex justify-content-between">
              <div>
                <img src="/images/dash-icon-1.png" alt="" className="img-fluid" />
                <p className="p-sm mt-2 mb-0">Total Listing</p>
              </div>
              <h3 className="bold">2</h3>
            </div>
          </div>
          <div className="col-xl-3 mt-3 col-lg-4 col-md-6">
            <div className="bg-white p-4 d-flex justify-content-between">
              <div>
                <img src="/images/dash-icon-2.png" alt="" className="img-fluid" />
                <p className="p-sm mt-2 mb-0">Total User Views</p>
              </div>
              <h3 className="bold">100</h3>
            </div>
          </div>
          <div className="col-xl-3 mt-3 col-lg-4 col-md-6">
            <div className="bg-white p-4 d-flex justify-content-between">
              <div>
                <img src="/images/dash-icon-3.png" alt="" className="img-fluid" />
                <p className="p-sm mt-2 mb-0">Total Offers Made</p>
              </div>
              <h3 className="bold">32</h3>
            </div>
          </div>
          <div className="col-xl-3 mt-3 col-lg-4 col-md-6">
            <div className="bg-white p-4 d-flex justify-content-between">
              <div>
                <img src="/images/dash-icon-4.png" alt="" className="img-fluid" />
                <p className="p-sm mt-2 mb-0">Total Deals Closed</p>
              </div>
              <h3 className="bold">32</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
