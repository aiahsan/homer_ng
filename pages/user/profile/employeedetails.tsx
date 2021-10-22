import React from 'react';
import Main from '../../../components/userBar';
import EmployeeModal from '../../../components/modals/employModal'
export default () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return <>

    <Main>
      <div className="main-body">
        <section className="listing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <h3 className="blue-text medium">Employement Details</h3>
                  </div>
                  <div className="col-lg-8 mt-3">
                    <div className="listing-inner">
                      <div className="row">
                        <div className="col-12">
                          <p className="bold p-lg text-center">Let’s Find Out a Bit More About Your Job</p>
                        </div>
                        <div className="col-12">
                          <label className="bold blue-text">Name Of the Company</label>
                          <input type="text" placeholder="Company Name" />
                        </div>
                        <div className="col-12 mt-3">
                          <label className="bold blue-text">Company Address</label>
                          <input type="text" placeholder="Address" />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label className="bold blue-text">Country</label>
                          <select className="bold">
                            <option >Nigeria</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label className="bold blue-text">State</label>
                          <select className="bold">
                            <option >Lagos</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mt-3">
                          <label className="bold blue-text">When did you start working there</label>
                          <div className="row">
                            <div className="col-3">
                              <select className="bold">
                                <option >DD</option>
                              </select>
                            </div>
                            <div className="col-3">
                              <select className="bold">
                                <option >MM</option>
                              </select>
                            </div>
                            <div className="col-6">
                              <select className="bold">
                                <option >YYYY</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <label className="bold blue-text">What’s your job title or role?</label>
                          <div className="d-flex align-items-center">
                            <input type="radio" />
                            <p className="p-xs black-text mb-0 ml-4 medium">Paid Employment</p>
                          </div>
                          <div className="d-flex align-items-center mt-2">
                            <input type="radio" />
                            <p className="p-xs black-text mb-0 ml-4 medium">Self Employment</p>
                          </div>
                        </div>
                        <div className="col-lg-7 mt-3">
                          <label className="bold blue-text">What’s your job title or role?</label>
                          <input type="text" placeholder="Enter your job title " />
                        </div>
                        <div className="col-12 mt-lg-5 mt-4 text-center">
                          <button onClick={()=>handleShow()} className="site-btn px-5 py-2">Save</button>
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



      <EmployeeModal show={show} handleClose={handleClose} />

    </Main>
  </>
}