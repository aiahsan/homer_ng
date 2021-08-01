import React from 'react';
import Nav from '../componentes/header';
import Footer from '../componentes/footer';
export default () => {
  return (
    <div className='body-bg'>
      <div className='inner-page'>
        <Nav />

        <section class='create-account step-two'>
          <div class='container-fluid px-2'>
            <div class='row'>
              <div class='col-xl-11 mx-auto'>
                <div class='row'>
                  <div class='col-xl-6 col-lg-8 text-center mx-auto'>
                    <div class='row'>
                      <div class='col-12'>
                        <img
                          src='/images/message-icon.png'
                          alt=''
                          class='img-fluid'
                        />
                        <p class='p-lg mt-3 bold'>Confirmation Required</p>
                        <p class='p-sm mt-4 grey-text'>
                          Please confirm your NIN By Entering the OTP Send to{' '}
                        </p>
                        <p class='p-sm mt-3 bold l-blue-text'>0808*****877</p>
                      </div>
                      <div class='col'>
                        <input
                          type='number'
                          name=''
                          value='1'
                          class='py-4'
                          id=''
                        />
                      </div>
                      <div class='col'>
                        <input
                          type='number'
                          name=''
                          value='1'
                          class='py-4'
                          id=''
                        />
                      </div>
                      <div class='col'>
                        <input
                          type='number'
                          name=''
                          value='1'
                          class='py-4'
                          id=''
                        />
                      </div>
                      <div class='col'>
                        <input
                          type='number'
                          name=''
                          value='1'
                          class='py-4'
                          id=''
                        />
                      </div>
                      <div class='col'>
                        <input
                          type='number'
                          name=''
                          value='1'
                          class='py-4'
                          id=''
                        />
                      </div>
                      <div class='col'>
                        <input
                          type='number'
                          name=''
                          value='1'
                          class='py-4'
                          id=''
                        />
                      </div>
                      <div class='col-12 mt-4'>
                        <p class='mt-0'>
                          Don't Receive the OTP?{' '}
                          <a href='#_' class='bold blue-text'>
                            Resend
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='d-flex mt-4 justify-content-center'>
                  <a href='#_' class='site-btn mt-3 grey-btn px-5 py-3 mr-4'>
                    Back
                  </a>
                  <a href='#_' class='site-btn mt-3 pilled-btn px-5 py-3'>
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
