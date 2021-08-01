import React from 'react';
export default () => {
  return (
    <nav class='navbar d-none d-lg-flex navbar-expand-lg navbar-light pt-3'>
      <a class='navbar-brand bold'>Welcome</a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>
      <div class='collapse navbar-collapse' id='navbarNav'>
        <ul class='navbar-nav ml-auto'>
          <li class='nav-item'>
            <div class='position-relative mt-1'>
              <div class='left-icon'>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M9.16667 15.5833C12.7105 15.5833 15.5833 12.7105 15.5833 9.16667C15.5833 5.62284 12.7105 2.75 9.16667 2.75C5.62284 2.75 2.75 5.62284 2.75 9.16667C2.75 12.7105 5.62284 15.5833 9.16667 15.5833Z'
                    stroke='#153A84'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M19.25 19.25L13.75 13.75'
                    stroke='#153A84'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </div>
              <input
                type='text'
                class='site-input rounded-pill py-2 px-5'
                placeholder='Search'
              />
            </div>
          </li>
          <li class='nav-item mx-3 mt-2'>
            <div class='dropdown'>
              <button
                class='transparent-btn'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <svg
                  width='20'
                  height='25'
                  viewBox='0 0 20 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0)'>
                    <path
                      d='M9 24.9999C8.73988 25.0006 8.48252 24.9467 8.24448 24.8418C8.00645 24.7369 7.79304 24.5833 7.618 24.3909C7.43202 24.207 7.28438 23.9881 7.18361 23.7467C7.08285 23.5054 7.03098 23.2464 7.031 22.9849H10.968C10.9682 23.2464 10.9165 23.5053 10.8159 23.7466C10.7153 23.988 10.5678 24.207 10.382 24.3909C10.207 24.5833 9.99355 24.7369 9.75552 24.8418C9.51748 24.9467 9.26012 25.0006 9 24.9999ZM18 21.9999H0V20.9219L2.11 18.8119V12.9999C2.10106 11.4401 2.63091 9.92513 3.61 8.71091C4.55304 7.48651 5.89685 6.633 7.406 6.29991V5.59991C7.40275 5.38935 7.44269 5.18035 7.52335 4.98583C7.60402 4.7913 7.72369 4.61538 7.875 4.46891C8.02227 4.32033 8.1975 4.2024 8.39059 4.12192C8.58369 4.04144 8.79081 4 9 4C9.20919 4 9.41631 4.04144 9.60941 4.12192C9.8025 4.2024 9.97773 4.32033 10.125 4.46891C10.2756 4.61468 10.3948 4.78963 10.4755 4.98307C10.5561 5.1765 10.5964 5.38435 10.594 5.59391V6.29391C12.105 6.62691 13.4504 7.4816 14.394 8.70791C15.3723 9.92347 15.9008 11.4396 15.89 12.9999V18.8119L18 20.9219V21.9999Z'
                      fill='#527DD2'
                    />
                    <path
                      d='M18 4C19.1046 4 20 3.10457 20 2C20 0.89543 19.1046 0 18 0C16.8954 0 16 0.89543 16 2C16 3.10457 16.8954 4 18 4Z'
                      fill='#E95060'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0'>
                      <rect width='20' height='25' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </div>
          </li>
          <li class='nav-item'>
            <div class='dropdown'>
              <button
                class='transparent-btn d-flex align-items-center'
                type='button'
                id='dropdownMenuButton'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                <img
                  src='/images/avatar.png'
                  alt=''
                  class='img-fluid mr-2 avatar'
                />{' '}
                Ahmed <i class='fas ml-2 fa-caret-down'></i>
              </button>
              <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                <a class='dropdown-item' href='#'>
                  Action
                </a>
                <a class='dropdown-item' href='#'>
                  Another action
                </a>
                <a class='dropdown-item' href='#'>
                  Something else here
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
