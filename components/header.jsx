import React from "react";
export default () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-11 col-12 mx-auto">
            <nav className="navbar navbar-light">
              <a className="navbar-brand mt-3" href="#">
                <img src="/images/logo.png" alt="" className="img-fluid" />
              </a>
              <ul className="navbar-nav mt-3 nav-btns ml-auto">
                <li className="nav-item">
                  <a className="nav-link site-btn border-btn px-5 py-2" href="/">
                    Back to home Page
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
