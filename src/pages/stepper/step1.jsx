import React from 'react';
import Nav from '../../componentes/header';
import Footer from '../../componentes/footer';
export default () => {
  return (
    <div className='body-bg'>
      <div className='inner-page'>
        <Nav />
        <section class='create-account'>
          <div class='container-fluid px-2'>
            <div class='row'>
              <div class='col-xl-11 mx-auto'>
                <div class='row'>
                  <div class='col-12 text-center'>
                    <p class='p-lg mt-lg-5 mt-4'>
                      Do you have a house in mind already or you want to select
                      from our listed homes?
                    </p>
                  </div>
                  <div class='col-lg-7 mx-auto'>
                    <div class='row mt-4 text-center'>
                      <div class='col-lg-6 mt-3'>
                        <img
                          src='/images/house-1.png'
                          alt=''
                          class='img-fluid'
                        />
                        <label
                          for='house-1'
                          class='p-3 rounded border mt-3 house-select d-block'
                        >
                          I’ve selected a Homer homes
                        </label>
                        <input
                          type='radio'
                          id='house-1'
                          class='d-block mx-auto mt-3'
                          name='house-select'
                          id=''
                        />
                      </div>
                      <div class='col-lg-6 mt-3'>
                        <img
                          src='/images/house-2.png'
                          alt=''
                          class='img-fluid'
                        />
                        <label
                          for='house-2'
                          class='p-3 rounded border mt-3 house-select d-block'
                        >
                          I’ll enter details of the home I want
                        </label>
                        <input
                          type='radio'
                          id='house-2'
                          class='d-block mx-auto mt-3'
                          name='house-select'
                          id=''
                        />
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
