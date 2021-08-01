import React from 'react';
export default () => {
  return (
    <div class='l-blue-bg'>
      <nav class='navbar px-4 d-flex d-lg-none navbar-expand-lg justify-content-between navbar-light navbar-lg bg-me1'>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'>
            <i class='fas fa-ellipsis-v'></i>
          </span>
        </button>
        <a class='navbar-brand bold'>Welcome</a>
        <a href='#' class='sidebar-toggle'>
          <i class='fas fa-bars'></i>
        </a>
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
      <nav class='sidebar text-left' ss-container id='sidebar'>
        <ul class='pl-0'>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 active py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.25 22.75H22.75'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3.25 10.8333H22.75'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5.4165 6.5L12.9998 3.25L20.5832 6.5'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4.3335 10.8333V22.7499'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M21.6665 10.8333V22.7499'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.6665 15.1667V18.4167'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 15.1667V18.4167'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M17.3335 15.1667V18.4167'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Your Loans Offers
            </a>
          </li>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.5833 7.58325H5.41667C4.22005 7.58325 3.25 8.5533 3.25 9.74992V19.4999C3.25 20.6965 4.22005 21.6666 5.41667 21.6666H20.5833C21.78 21.6666 22.75 20.6965 22.75 19.4999V9.74992C22.75 8.5533 21.78 7.58325 20.5833 7.58325Z'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.6665 7.58333V5.41667C8.6665 4.84203 8.89478 4.29093 9.30111 3.8846C9.70744 3.47827 10.2585 3.25 10.8332 3.25H15.1665C15.7411 3.25 16.2922 3.47827 16.6986 3.8846C17.1049 4.29093 17.3332 4.84203 17.3332 5.41667V7.58333'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 13V13.012'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3.25 14.0833C6.27421 15.6072 9.61353 16.401 13 16.401C16.3865 16.401 19.7258 15.6072 22.75 14.0833'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Unfinished Applications
            </a>
          </li>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.25 21.6667L4.65833 17.4417C3.44115 15.6415 3.00083 13.5097 3.41924 11.4425C3.83765 9.37542 5.08632 7.51369 6.93308 6.20351C8.77985 4.89333 11.099 4.22385 13.4594 4.31956C15.8198 4.41526 18.0608 5.26963 19.7657 6.72382C21.4706 8.178 22.5234 10.133 22.7284 12.2254C22.9334 14.3178 22.2765 16.4052 20.88 18.0994C19.4835 19.7937 17.4424 20.9795 15.1361 21.4363C12.8298 21.8932 10.4154 21.5901 8.34167 20.5834L3.25 21.6667'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 13V13.0117'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.6665 13V13.0117'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M17.3335 13V13.0117'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Messages
            </a>
          </li>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.1854 4.67675C11.6469 2.77442 14.3531 2.77442 14.8146 4.67675C14.8838 4.96253 15.0196 5.22793 15.2108 5.45133C15.402 5.67474 15.6432 5.84984 15.9149 5.96239C16.1865 6.07494 16.4809 6.12176 16.7741 6.09902C17.0673 6.07629 17.3509 5.98466 17.602 5.83158C19.2736 4.81325 21.1878 6.72642 20.1695 8.39908C20.0166 8.65004 19.9252 8.93353 19.9025 9.2265C19.8798 9.51948 19.9266 9.81367 20.039 10.0852C20.1514 10.3567 20.3263 10.5978 20.5495 10.789C20.7726 10.9802 21.0377 11.116 21.3233 11.1854C23.2256 11.6469 23.2256 14.3531 21.3233 14.8146C21.0375 14.8838 20.7721 15.0196 20.5487 15.2108C20.3253 15.402 20.1502 15.6432 20.0376 15.9149C19.9251 16.1865 19.8782 16.4809 19.901 16.7741C19.9237 17.0673 20.0153 17.3509 20.1684 17.602C21.1868 19.2736 19.2736 21.1878 17.6009 20.1695C17.35 20.0166 17.0665 19.9252 16.7735 19.9025C16.4805 19.8798 16.1863 19.9266 15.9148 20.039C15.6433 20.1514 15.4022 20.3263 15.211 20.5495C15.0198 20.7726 14.884 21.0377 14.8146 21.3233C14.3531 23.2256 11.6469 23.2256 11.1854 21.3233C11.1162 21.0375 10.9804 20.7721 10.7892 20.5487C10.598 20.3253 10.3568 20.1502 10.0851 20.0376C9.81347 19.9251 9.51907 19.8782 9.2259 19.901C8.93273 19.9237 8.64907 20.0153 8.398 20.1684C6.72642 21.1868 4.81217 19.2736 5.8305 17.6009C5.98336 17.35 6.07485 17.0665 6.09752 16.7735C6.1202 16.4805 6.07343 16.1863 5.96101 15.9148C5.84859 15.6433 5.6737 15.4022 5.45055 15.211C5.22739 15.0198 4.96228 14.884 4.67675 14.8146C2.77442 14.3531 2.77442 11.6469 4.67675 11.1854C4.96253 11.1162 5.22793 10.9804 5.45133 10.7892C5.67474 10.598 5.84984 10.3568 5.96239 10.0851C6.07494 9.81347 6.12176 9.51907 6.09902 9.2259C6.07629 8.93273 5.98466 8.64907 5.83158 8.398C4.81325 6.72642 6.72642 4.81217 8.39908 5.8305C9.48242 6.48917 10.8864 5.90633 11.1854 4.67675Z'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>

      <nav class='sidebar pt-4' ss-container id='sidebar'>
        <div class='text-center'>
          <a href='index-login.php'>
            <img
              src='/images/logo-login.png'
              alt=''
              class='my-5 mr-4 img-fluid'
            />
          </a>
        </div>
        <ul class='pl-0'>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 active py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.25 22.75H22.75'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3.25 10.8333H22.75'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M5.4165 6.5L12.9998 3.25L20.5832 6.5'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M4.3335 10.8333V22.7499'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M21.6665 10.8333V22.7499'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.6665 15.1667V18.4167'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 15.1667V18.4167'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M17.3335 15.1667V18.4167'
                  stroke='white'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Your Loans Offers
            </a>
          </li>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M20.5833 7.58325H5.41667C4.22005 7.58325 3.25 8.5533 3.25 9.74992V19.4999C3.25 20.6965 4.22005 21.6666 5.41667 21.6666H20.5833C21.78 21.6666 22.75 20.6965 22.75 19.4999V9.74992C22.75 8.5533 21.78 7.58325 20.5833 7.58325Z'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.6665 7.58333V5.41667C8.6665 4.84203 8.89478 4.29093 9.30111 3.8846C9.70744 3.47827 10.2585 3.25 10.8332 3.25H15.1665C15.7411 3.25 16.2922 3.47827 16.6986 3.8846C17.1049 4.29093 17.3332 4.84203 17.3332 5.41667V7.58333'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 13V13.012'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M3.25 14.0833C6.27421 15.6072 9.61353 16.401 13 16.401C16.3865 16.401 19.7258 15.6072 22.75 14.0833'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Unfinished Applications
            </a>
          </li>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.25 21.6667L4.65833 17.4417C3.44115 15.6415 3.00083 13.5097 3.41924 11.4425C3.83765 9.37542 5.08632 7.51369 6.93308 6.20351C8.77985 4.89333 11.099 4.22385 13.4594 4.31956C15.8198 4.41526 18.0608 5.26963 19.7657 6.72382C21.4706 8.178 22.5234 10.133 22.7284 12.2254C22.9334 14.3178 22.2765 16.4052 20.88 18.0994C19.4835 19.7937 17.4424 20.9795 15.1361 21.4363C12.8298 21.8932 10.4154 21.5901 8.34167 20.5834L3.25 21.6667'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 13V13.0117'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M8.6665 13V13.0117'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M17.3335 13V13.0117'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Messages
            </a>
          </li>
          <li class='w-100'>
            <a href='#_' class='pr-0 m-0 py-3 pl-3'>
              <svg
                class='mr-3'
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.1854 4.67675C11.6469 2.77442 14.3531 2.77442 14.8146 4.67675C14.8838 4.96253 15.0196 5.22793 15.2108 5.45133C15.402 5.67474 15.6432 5.84984 15.9149 5.96239C16.1865 6.07494 16.4809 6.12176 16.7741 6.09902C17.0673 6.07629 17.3509 5.98466 17.602 5.83158C19.2736 4.81325 21.1878 6.72642 20.1695 8.39908C20.0166 8.65004 19.9252 8.93353 19.9025 9.2265C19.8798 9.51948 19.9266 9.81367 20.039 10.0852C20.1514 10.3567 20.3263 10.5978 20.5495 10.789C20.7726 10.9802 21.0377 11.116 21.3233 11.1854C23.2256 11.6469 23.2256 14.3531 21.3233 14.8146C21.0375 14.8838 20.7721 15.0196 20.5487 15.2108C20.3253 15.402 20.1502 15.6432 20.0376 15.9149C19.9251 16.1865 19.8782 16.4809 19.901 16.7741C19.9237 17.0673 20.0153 17.3509 20.1684 17.602C21.1868 19.2736 19.2736 21.1878 17.6009 20.1695C17.35 20.0166 17.0665 19.9252 16.7735 19.9025C16.4805 19.8798 16.1863 19.9266 15.9148 20.039C15.6433 20.1514 15.4022 20.3263 15.211 20.5495C15.0198 20.7726 14.884 21.0377 14.8146 21.3233C14.3531 23.2256 11.6469 23.2256 11.1854 21.3233C11.1162 21.0375 10.9804 20.7721 10.7892 20.5487C10.598 20.3253 10.3568 20.1502 10.0851 20.0376C9.81347 19.9251 9.51907 19.8782 9.2259 19.901C8.93273 19.9237 8.64907 20.0153 8.398 20.1684C6.72642 21.1868 4.81217 19.2736 5.8305 17.6009C5.98336 17.35 6.07485 17.0665 6.09752 16.7735C6.1202 16.4805 6.07343 16.1863 5.96101 15.9148C5.84859 15.6433 5.6737 15.4022 5.45055 15.211C5.22739 15.0198 4.96228 14.884 4.67675 14.8146C2.77442 14.3531 2.77442 11.6469 4.67675 11.1854C4.96253 11.1162 5.22793 10.9804 5.45133 10.7892C5.67474 10.598 5.84984 10.3568 5.96239 10.0851C6.07494 9.81347 6.12176 9.51907 6.09902 9.2259C6.07629 8.93273 5.98466 8.64907 5.83158 8.398C4.81325 6.72642 6.72642 4.81217 8.39908 5.8305C9.48242 6.48917 10.8864 5.90633 11.1854 4.67675Z'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z'
                  stroke='#82A3E4'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
