import React from 'react';
import Main from '../../../components/userBar'
export default () => {
    return <>

        <Main>
        <div className="main-body">
  <section className="listing">
    <div className="container-flu">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <h3 className="blue-text">Personal Details</h3>
            </div>
            <div className="col-lg-8 mt-3">
              <div className="listing-inner">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="p-lg grey-text">Confirm Your NIN by Entering the OTP sent to</p>
                    <p className="p-sm mt-3 bold l-blue-text">0808*****877</p>
                  </div>
                  <div className="col-xl-11 mx-auto">
                    <div className="row">
                      <div className="col">
                        <input type="number" defaultValue={1} className="py-4"  />
                      </div>
                      <div className="col">
                        <input type="number" defaultValue={1} className="py-4"  />
                      </div>
                      <div className="col">
                        <input type="number" defaultValue={1} className="py-4"  />
                      </div>
                      <div className="col">
                        <input type="number" defaultValue={1} className="py-4"  />
                      </div>
                      <div className="col">
                        <input type="number" defaultValue={1} className="py-4"  />
                      </div>
                      <div className="col">
                        <input type="number" defaultValue={1} className="py-4"  />
                      </div>
                      <div className="col-12 text-center mt-4">
                        <p className="mt-0">Don't Receive the OTP? <a href="#_" className="bold blue-text">Resend</a></p>
                        <div className="d-sm-flex align-items-center justify-content-center">
                          <button onClick={() => (location.href ="edit")} className="site-btn px-5 py-2 mt-3 border-btn mr-sm-3">Back</button>
                          <button onClick={() => (location.href ="residential")} className="site-btn px-5 py-2 mt-3">Next</button>
                        </div>
                      </div>
                    </div>
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