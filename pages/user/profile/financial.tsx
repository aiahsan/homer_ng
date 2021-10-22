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
              <h3 className="blue-text">Financial Details</h3>
            </div>
            <div className="col-lg-8 mt-3">
              <div className="listing-inner">
                <p className="medium text-center">We need a few of your personal financial details</p>
                <div className="row">
                  <div className="col-xl-6 col-lg-8">
                    <div className="row">
                      <div className="col-12 mt-3">
                        <label  className="blue-text medium">How Much Do you Earn Monthly?</label>
                        <input type="text" placeholder="Enter your NIN" />
                      </div>
                      <div className="col-12 mt-3">
                        <label  className="blue-text medium">How Much Do you Earn Net Annually?</label>
                        <input type="text" placeholder="Enter your NIN" />
                      </div>
                      <div className="col-12 mt-3">
                        <label  className="blue-text medium">What’s Your BVN?</label>
                        <input type="text" placeholder="Enter your NIN" />
                      </div>
                      <div className="col-12 mt-3">
                        <label  className="blue-text medium">What Bank Do You Use for Your Primary Earnings?</label>
                        <input type="text" placeholder="Enter your NIN" />
                      </div>
                      <div className="col-12 mt-3">
                        <label  className="blue-text medium">Please Enter Your Account Number</label>
                        <input type="text" placeholder="Enter your NIN" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-lg-5 mt-4 text-center">
                    <button onClick={()=>location.href="linkbank"} className="site-btn px-5 py-2">Save</button>
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