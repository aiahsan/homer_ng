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
              <h3 className="blue-text">Personal Details</h3>
            </div>
            <div className="col-lg-8 mt-3">
              <div className="listing-inner">
                <p className="p-lg text-center bold">Here we want to know more about you</p>
                <div className="row">
                  <div className="col-lg-6 mt-4">
                    <label  className="bold">DOB</label>
                    <div className="row">
                      <div className="col-3">
                        <select  className="bold">
                          <option >DD</option>
                        </select>
                      </div>
                      <div className="col-3">
                        <select  className="bold">
                          <option >MM</option>
                        </select>
                      </div>
                      <div className="col-6">
                        <select  className="bold">
                          <option >YYYY</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <label  className="bold">Gender</label>
                    <select  className="bold">
                      <option >Male</option>
                      <option >Female</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mt-4">
                    <label  className="bold">Your NIN</label>
                    <input type="text" placeholder="Enter your NIN" />
                  </div>
                  <div className="col-12 mt-4 text-center">
                    <button  onClick={() => (location.href ="otp")}   className="site-btn px-5 py-2">Next</button>
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