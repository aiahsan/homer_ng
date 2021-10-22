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
                <div className="row">
                  <div className="col-12">
                    <p  className="bold p-lg text-center">Enter Your Residential Address</p>
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Address" />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label  className="bold blue-text">Country</label>
                    <select  className="bold">
                      <option >Nigeria</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label  className="bold blue-text">State</label>
                    <select  className="bold">
                      <option >Lagos</option>
                    </select>
                  </div>
                  <div className="col-12 mt-lg-5 mt-4 text-center">
                    <button  onClick={() => (location.href ="/user/profile")}  className="site-btn px-5 py-2">Save</button>
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