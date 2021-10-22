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
            <div className="col-12">
              <h3 className="blue-text medium">Your Preferences</h3>
            </div>
            <div className="col-lg-8 mt-3">
              <div className="listing-inner">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="mb-0 medium">Please Enter Your Preferred Mortgage Terms</p>
                  </div>
                  <div className="col-lg-10 col-xl-8 mt-4">
                    <div className="d-sm-flex align-items-center justify-content-between">
                      <p className="blue-text mb-1 medium">Price of the Home:</p>
                      <p className="black-text bold mb-1">N 25,000,000</p>
                    </div>
                    <p className="blue-text mt-3 mb-1 medium">Down Payment (Contribution)</p>
                    <div className="input-group input-tagg mb-3">
                      <input type="text" className="form-control" defaultValue="N 3,000,000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">20%</span>
                      </div>
                    </div>
                    <p className="blue-text mt-3 medium mb-1">Length of Loan (Tenor)</p>
                    <div className="input-group w-50 input-tagg mb-3">
                      <input type="text" className="form-control" defaultValue="5" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">Years</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <p className="blue-text medium mb-1">Loan Type</p>
                    <select  className="blue-text medium">
                      <option >Private Mortgage Bank</option>
                    </select>
                  </div>
                  <div className="col-lg-4">
                    <p className="medium blue-text mb-1">Rate</p>
                    <div className="input-group w-50 mt-2 input-tagg mb-3">
                      <input type="text" className="form-control" defaultValue={5} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">%</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="l-blue-bg white-card p-lg-4 p-3">
                      <div className="col-xl-10 col-lg-11 mx-auto col-12">
                        <div className="row">
                          <div className="col-lg-8">
                            <p className="blue-text mb-0 medium mt-3">Monthly Repayment</p>
                          </div>
                          <div className="col-lg-4">
                            <p className="mb-0 medium mt-3">N600, 000</p>
                          </div>
                          <div className="col-lg-8">
                            <p className="blue-text mb-0 medium mt-3">Typical Application Duration</p>
                          </div>
                          <div className="col-lg-4">
                            <p className="mb-0 medium mt-3">2 weeks</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-lg-5 mt-4 text-center">
                    <button onClick={()=>{
                        location.href="upload"
                    }} className="site-btn px-5 py-2">Save</button>
                  </div>
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