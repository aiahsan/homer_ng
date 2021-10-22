import React from 'react';
import Main from '../../../components/userBar'
export default () => {
    return <>

        <Main>
        <div className="main-body">
  <section className="listing">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-lg-8 mt-3">
              <div className="listing-inner l-blue-bg">
                <p className="p-lg text-center bold">Link Bank</p>
                <div className="position-relative">
                  <div className="left-icon"><i className="fas fa-search" /></div>
                  <input type="search"  className="modal-input rounded-pill px-5" placeholder="Search" />
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between">
                  <label  className="bold"><img src="/images/bank-1.png" alt="" className="img-fluid mr-3" />Access Bank</label>
                  <input type="radio"  />
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between">
                  <label  className="bold"><img src="/images/bank-2.png" alt="" className="img-fluid mr-3" />Fidelity Bank Plc</label>
                  <input type="radio"  />
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between">
                  <label  className="bold"><img src="/images/bank-3.png" alt="" className="img-fluid mr-3" />First City Monument Bank Limited.</label>
                  <input type="radio"  />
                </div>
                <div className="d-flex align-items-center mt-4 justify-content-between">
                  <label  className="bold"><img src="/images/bank-4.png" alt="" className="img-fluid mr-3" />First Bank of Nigeria Limited.</label>
                  <input type="radio"  />
                </div>
                <div className="d-sm-flex justify-content-end mt-5">
                  <a href="/user/profile" className="site-btn mt-3 mr-sm-3 px-5 py-2">Continue</a>
                  <a href="/user/profile" className="site-btn border-btn mt-3 px-5 py-2">Close</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 listing-inner">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



        </Main>
    </>
}