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
                <p className="medium mb-2">Name</p>
                <h3 className="blue-text medium">Charles Paul</h3>
                <div className="row">
                  <div className="col-sm-6 mt-3">
                    <p className="p-lg mb-0">Gender</p>
                    <p className="blue-text mb-0">Male</p>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <p className="p-lg mb-0">DOB</p>
                    <p className="blue-text mb-0">15 - May - 1978</p>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <p className="p-lg mb-0">Phone Number</p>
                    <p className="blue-text mb-0">08001122324</p>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <p className="p-lg mb-0">E-Mail</p>
                    <p className="blue-text mb-0">oya@gmail.com</p>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <p className="p-lg mb-0">Address</p>
                    <p className="blue-text mb-0">Plot 24 Kilimanjaro Close, Ikoyi, Eti-osa Lagos</p>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <p className="p-lg mb-0">NIN</p>
                    <p className="blue-text mb-0">12345678290</p>
                  </div>
                  <div className="col-12 mt-3 text-right">
                    <button onClick={()=>location.href="edit"} className="transparent-btn ml-auto circle-btn">
                      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20H21" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg><br />
                      Edit
                    </button>
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