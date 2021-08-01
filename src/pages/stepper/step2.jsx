import React from 'react';
import Nav from '../../componentes/header';
import Footer from '../../componentes/footer';
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
                  <div class='col-xl-9 col-lg-11 mx-auto'>
                    <div class='row mt-4'>
                      <div class='col-12'>
                        <label for='' class='bold'>
                          What is the house address?
                        </label>
                        <input type='text' placeholder='Address' />
                      </div>
                      <div class='col-lg-6 mt-4'>
                        <label for='' class='bold'>
                          State
                        </label>
                        <select name='' id='' class='bold'>
                          <option value=''>Lagos</option>
                        </select>
                      </div>
                      <div class='col-lg-6 mt-4'>
                        <label for='' class='bold'>
                          LGA
                        </label>
                        <select name='' id='' class='bold'>
                          <option value=''>Lagos</option>
                        </select>
                      </div>
                      <div class='col-12 mt-4'>
                        <label for='' class='bold'>
                          What kind of documentation does it have?
                        </label>
                      </div>
                      <div class='col-lg-6'>
                        <div class='d-sm-flex align-items-center justify-content-between'>
                          <div class='mt-3'>
                            <input type='checkbox' name='' id='' />
                            <label for='' class='ml-3'>
                              C of O
                            </label>
                          </div>
                          <div class='mt-3'>
                            <label for='uploadfile' class='upload-file'>
                              <i class='fas fa-upload mr-2'></i>Upload Copy Now
                            </label>
                            <div class='d-none'>
                              <input type='file' name='' id='uploadfile' />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6 mt-4'>
                        <input type='checkbox' name='' id='' />
                        <label for='' class='ml-3'>
                          R of O
                        </label>
                      </div>
                      <div class='col-lg-6 mt-4'>
                        <input type='checkbox' name='' id='' />
                        <label for='' class='ml-3'>
                          Allocation Letter
                        </label>
                      </div>
                      <div class='col-lg-6'>
                        <div class='d-sm-flex align-items-center justify-content-between'>
                          <div class='mt-3'>
                            <input type='checkbox' name='' id='' />
                            <label for='' class='ml-3'>
                              Global C of O
                            </label>
                          </div>
                          <div class='mt-3 d-flex align-items-center'>
                            <img
                              src='/images/pdf.png'
                              alt=''
                              class='img-fluid'
                            />
                            <label for='' class='ml-2 mb-0'>
                              Document.pdf
                            </label>
                            <button class='delete-btn ml-2'>
                              <i class='fas fa-trash-alt'></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class='col-lg-6 mt-4'>
                        <input type='checkbox' name='' id='' />
                        <label for='' class='ml-3'>
                          Approved Building Plan
                        </label>
                      </div>
                      <div class='col-12 mt-4'>
                        <label for='' class='bold'>
                          Estimated Cost of the House?
                        </label>
                        <div class='position-relative'>
                          <div class='left-icon'>
                            <svg
                              width='8'
                              height='9'
                              viewBox='0 0 8 9'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.76953 9H5.72461L2.70117 3.69141V9H0.644531V0.46875H2.70117L5.71875 5.77734V0.46875H7.76953V9Z'
                                fill='#153A84'
                              />
                            </svg>
                          </div>
                          <input
                            type='text'
                            class='pl-4'
                            placeholder='Add Cost'
                          />
                        </div>
                      </div>
                      <div class='col-lg-6 mt-4'>
                        <label for='' class='bold'>
                          What Percentage Will You Like To Contribute
                        </label>
                        <select name='' id='' class='bold'>
                          <option value=''>20%</option>
                        </select>
                      </div>
                      <div class='col-lg-6 mt-4'>
                        <label for='' class='bold'>
                          For How Long Will You Like to Pay
                        </label>
                        <select name='' id='' class='bold'>
                          <option value=''>14 years</option>
                        </select>
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
