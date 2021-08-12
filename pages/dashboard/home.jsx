import React from "react";
import Nav from "../../components/auth/nav";
import TopBar from "../../components/auth/topbar";
import Sidebar from "../../components/auth/sidebar";
export default () => {
  return (
    <div className="l-blue-bg">
      <Sidebar />
      <div className="main-body">
        <Nav />
        <TopBar />
        <section className="bg-white text-center p-4 pb-5 m-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 py-5">
                <img src="/images/not-found.png" alt="" className="img-fluid" />
                <p className="mt-3 p-sm">No Listings Yet. Add One Now</p>
              </div>
              <div className="mt-5 col-12">
                <a href="#_" className="site-btn rounded-pill px-5 py-2">
                  Create New Listing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
