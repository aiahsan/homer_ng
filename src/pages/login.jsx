import React from 'react';
import Nav from '../componentes/header';
import Footer from '../componentes/footer';
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
                  <div class='col-lg-6 mt-3'>
                    <img
                      src='/images/login-left-1.png'
                      alt=''
                      class='img-fluid h-100 d-none d-lg-block w-100'
                    />
                  </div>
                  <div class='col-lg-6 mt-3 listing-inner'>
                    <p class='p-lg bold text-center'>Login</p>
                    <form action='#_'>
                      <div class='position-relative'>
                        <div class='left-icon'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
                              stroke='#527DD2'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M3 7L12 13L21 7'
                              stroke='#527DD2'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </div>
                        <input
                          type='email'
                          placeholder='Email'
                          class='px-5 site-input py-3'
                        />
                      </div>
                      <div class='position-relative mt-4'>
                        <div class='left-icon'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M17 11H7C5.89543 11 5 11.8954 5 13V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V13C19 11.8954 18.1046 11 17 11Z'
                              stroke='#527DD2'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z'
                              stroke='#527DD2'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11'
                              stroke='#527DD2'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </div>
                        <input
                          type='password'
                          placeholder='Password'
                          class='px-5 site-input py-3'
                        />
                        <div class='right-icon'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M3 3L21 21'
                              stroke='#D9D9D9'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M10.584 10.587C10.2087 10.962 9.99775 11.4708 9.99756 12.0013C9.99737 12.5318 10.2079 13.0407 10.583 13.416C10.958 13.7913 11.4667 14.0022 11.9973 14.0024C12.5278 14.0026 13.0367 13.792 13.412 13.417'
                              stroke='#D9D9D9'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                            <path
                              d='M17.357 17.349C15.726 18.449 13.942 19 12 19C8 19 4.667 16.667 2 12C3.369 9.605 4.913 7.825 6.632 6.659M9.363 5.365C10.2204 5.11972 11.1082 4.99684 12 5C16 5 19.333 7.333 22 12C21.222 13.361 20.388 14.524 19.497 15.488L9.363 5.365Z'
                              stroke='#D9D9D9'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                      <div class='mt-2 text-right'>
                        <a href='#_' class='blue-text'>
                          Forget your password?
                        </a>
                      </div>
                      <button class='mt-4 site-btn w-100 py-3'>Sign In</button>
                      <p class='mt-3 text-center'>
                        Not registered yet?{' '}
                        <a href='#_' class='blue-text'>
                          Create an account
                        </a>
                      </p>
                    </form>
                    <p class='p-lg bold text-center'>Or</p>
                    <div class='row justify-content-center'>
                      <div class='col-lg-4 col-sm-6 mt-3'>
                        <a href='#_'>
                          <span class='social-link h-auto py-4'>
                            <svg
                              width='37'
                              height='37'
                              viewBox='0 0 37 37'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M8.79818 22.4598L7.55724 27.0936L3.02151 27.1852C1.65047 24.6306 0.922147 21.7806 0.899472 18.8814C0.876797 15.9822 1.56046 13.1211 2.89136 10.5453V10.5453L6.92944 11.2859L8.69828 15.2992C7.90302 17.6259 7.93832 20.1562 8.79818 22.4598Z'
                                fill='#FBBB00'
                              />
                              <path
                                d='M36.2353 15.4128C36.4432 16.5105 36.5475 17.6253 36.5469 18.7425C36.549 19.9932 36.4197 21.2407 36.1611 22.4644C35.3028 26.4793 33.0846 30.0748 29.8812 32.643L24.7965 32.3818L24.0771 27.8909C26.1768 26.659 27.7897 24.7433 28.6458 22.4644H19.1143V15.4128H36.2353Z'
                                fill='#518EF8'
                              />
                              <path
                                d='M29.8804 32.642C26.7188 35.1877 22.7802 36.5728 18.7211 36.5665C15.5014 36.5674 12.3416 35.6961 9.5775 34.0451C6.81335 32.3941 4.5481 30.0251 3.02246 27.1898L8.79638 22.4616C9.55463 24.4816 10.9113 26.222 12.6851 27.4502C14.4589 28.6785 16.5654 29.3362 18.7229 29.3353C20.6045 29.3384 22.4526 28.8378 24.0753 27.8854L29.8804 32.642Z'
                                fill='#28B446'
                              />
                              <path
                                d='M30.1 5.02162L24.3261 9.74891C22.9734 8.9065 21.4482 8.37995 19.8639 8.20842C18.2796 8.03689 16.677 8.22481 15.1754 8.75817C13.6737 9.29154 12.3117 10.1566 11.1906 11.2891C10.0694 12.4216 9.21809 13.7923 8.69986 15.2992L2.89111 10.5417C4.11637 8.17731 5.85575 6.11747 7.98146 4.51347C10.1072 2.90947 12.5652 1.80206 15.175 1.27259C17.7849 0.74312 20.4801 0.805041 23.0629 1.45381C25.6456 2.10257 28.0502 3.32169 30.1 5.02162Z'
                                fill='#F14336'
                              />
                            </svg>
                            <p class='bold p-lg mt-3'>Google</p>
                          </span>
                        </a>
                      </div>
                      <div class='col-lg-4 col-sm-6 mt-3'>
                        <a href='#_'>
                          <span class='social-link h-auto py-4'>
                            <svg
                              width='19'
                              height='34'
                              viewBox='0 0 19 34'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M18.9592 0.984004H13.8942C11.6803 0.959464 9.54727 1.8152 7.96417 3.36304C6.38108 4.91089 5.47753 7.0241 5.45221 9.238V14.191H0.387207V20.791H5.45221V34.001H12.2062V20.794H17.2712L18.9592 14.194H12.2062V9.238C12.2083 9.01852 12.2536 8.80161 12.3396 8.59966C12.4256 8.39772 12.5506 8.2147 12.7073 8.06109C12.8641 7.90747 13.0496 7.78626 13.2533 7.7044C13.4569 7.62254 13.6747 7.58163 13.8942 7.584H18.9592V0.984004Z'
                                fill='#095AB2'
                              />
                            </svg>
                            <p class='bold p-lg mt-3'>Facebook</p>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
      </div>
    </div>
  );
};
