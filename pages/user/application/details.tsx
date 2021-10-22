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
              <h3 className="blue-text medium">Home Details</h3>
            </div>
            <div className="col-lg-8 mt-3">
              <div className="listing-inner">
                <div className="row">
                  <div className="col-12">
                    <p  className="bold p-lg text-center">Please Enter the details of the Home</p>
                  </div>
                  <div className="col-12">
                    <label  className="bold blue-text">What is the address of the house</label>
                    <input type="text" placeholder="Enter the address of the house for the mortgage" />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label  className="bold blue-text">State</label>
                    <select className="bold">
                      <option >Lagos</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label  className="bold blue-text">LGA</label>
                    <select className="bold">
                      <option >Eti-Osa</option>
                    </select>
                  </div>
                  <div className="col-12 mt-3">
                    <label  className="bold blue-text mb-0">What kind of documentation does it have?</label>
                    <div className="row">
                      <div className="col-md-6 mt-3">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" name="documentation" />
                          <p className="p-xs black-text mb-0 ml-4 medium">C of O</p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" name="documentation" />
                          <p className="p-xs black-text mb-0 ml-4 medium">R of O</p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" name="documentation" />
                          <p className="p-xs black-text mb-0 ml-4 medium">Allocation Letter</p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" name="documentation" />
                          <p className="p-xs black-text mb-0 ml-4 medium">Global C of O</p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-3">
                        <div className="d-flex align-items-center">
                          <input type="checkbox" name="documentation" />
                          <p className="p-xs black-text mb-0 ml-4 medium">Approved Building Plan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 mt-4">
                    <label  className="bold blue-text">Estimated Cost of The House</label>
                    <div className="d-flex align-items-center">
                      <h3 className="medium mr-2 blue-text">N</h3>
                      <input type="text" placeholder="Enter Cost of The House" />
                    </div>
                  </div>
                  <div className="col-12 mt-lg-5 mt-4 text-center">
                    <button className="site-btn px-5 py-2" onClick={()=>location.href="preferences"}>Save</button>
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