import React from 'react';
import Nav from '../componentes/header';
import Footer from '../componentes/footer';
export default () => {
  return (
    <div className='body-bg'>
      <div className='inner-page'>
        <Nav />
        <section className='create-account'>
          <div className='container-fluid px-2'>
            <div className='row'>
              <div className='col-xl-11 mx-auto'>
                <div className='row'>
                  <div className='col-12 text-center'>
                    <h3>Create an Account with Us</h3>
                    <p className='p-sm l-blue-text'>
                      Your journey to new Home starts here. All you need to
                      proceed is here.
                    </p>
                  </div>
                  <div className='col-xl-10 mx-auto col-lg-11 col-12 mt-3 py-4 px-3 create-card'>
                    <ul>
                      <li className='mt-3'>The process takes 6 easy steps.</li>
                      <li className='mt-3'>
                        Don’t worry, we will guide you through the process.
                      </li>
                      <li className='mt-3'>
                        You will be notified of all progress, changes and
                        blocker if any to your application.
                      </li>
                      <li className='mt-3'>
                        You will need the following documentation to complete
                        your application.
                        <ul>
                          <li className='mt-3'>BVN</li>
                          <li className='mt-3'>
                            ID card (National ID, Driver’s License,
                            International Passport or Voter’s ID is fine)
                          </li>
                          <li className='mt-3'>
                            Evidence of current address (Utility Bill, Tenancy
                            Agreement or C of O)
                          </li>
                          <li className='mt-3'>
                            If employed, Evidence of Employment i.e. Employment
                            Letter, Promotion Letter and Payslip.
                          </li>
                          <li className='mt-3'>
                            Self-employed? Not an issue, send evidence of
                            registration of your company
                          </li>
                          <li className='mt-3'>Statement of Account</li>
                          <li className='mt-3'>
                            Documentation for the property if it is not a Homer
                            Home.
                          </li>
                        </ul>
                      </li>
                      <li className='mt-3'>
                        Tired? Don’t worry, you can save your application and
                        continue at any point.
                      </li>
                    </ul>
                    <div className='mt-5 text-center'>
                      <a href='#_' className='site-btn px-5 py-2'>
                        Let's Do It Now
                      </a>
                      <p className='mt-3'>
                        Have any concerns or want more information?{' '}
                        <a href='#_' className='blue-text bold'>
                          {' '}
                          Reach Us Now
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
