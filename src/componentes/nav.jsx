import React from 'react';
export default ()=>{
    return    <header>
    <div className="container-fluid">
        <div className="row">
            <div className="col-xl-11 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src="/images/logo.png" alt="" className="img-fluid"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-linkss ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link mx-lg-2" href="#">Our Homes <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">Sell a Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">Documents Verification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-lg-2" href="#">FAQs</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav nav-btns ml-auto">
                            <li className="nav-item">
                                <a className="nav-link site-btn px-4 mr-2 py-2" href="#">Apply</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link site-btn border-btn px-4 py-2" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</header>
}