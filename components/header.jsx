import React from "react";
import Icon from './icon'
export default () => {

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-11 col-12 mx-auto">
            <nav className="navbar navbar-light">
              <a className="navbar-brand mt-3" href="/">
                <img src="/images/logo.png" alt="" className="img-fluid" />
              </a>
              <ul className="navbar-nav mt-3 nav-btns ml-auto">
                <li className="nav-item">
                  <a className="ijdsf-esnd2  px-5 py-2 d-flex align-items-center" href="/">
                  Switch to Listings Portal
                  <div className="ml-3">
                    <Icon name="right"/>
                  </div>
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
