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
              <h3 className="blue-text medium">Applications</h3>
            </div>
            <div className="col-lg-8 mt-3">
              <div className="listing-inner">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="bold">You are yet to select a home</p>
                    <p className="mt-lg-4 mt-2 blue-text mb-0">Do you want to </p>
                  </div>
                  <div className="col-xl-10 col-lg-11 mx-auto">
                    <div className="row mt-4 text-center">
                      <div className="col-lg-6 mt-3">
                        <img src="/images/house-1.png" alt="" className="img-fluid" />
                        <label onClick={()=>location.href="details"} htmlFor="house-1" className="p-3 rounded border mt-3 house-select d-block">Pick From Homer Homes</label>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <img src="/images/house-2.png" alt="" className="img-fluid" />
                        <label onClick={()=>location.href="details"}  htmlFor="house-2" className="p-3 rounded border mt-3 house-select d-block">Enter Home Details</label>
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