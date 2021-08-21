import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => {
  const [activeTab, setactiveTab] = React.useState(0);

  return (
    <>
      <Nav />
      <section className="listing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 mx-auto col-12">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 mt-2">
                      <li className="breadcrumb-item">
                        <a href="#">Homer</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Library
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="col-lg-8 mt-3">
                  <div className="listing-inner">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <img src="images/listing-icon.png" alt="" className="img-fluid" />
                        <p className="p-lg mb-0 bold ml-2">Hazara Construction and Builders </p>
                      </div>
                      <i className="far fa-heart p-lg"></i>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide mt-4" data-ride="carousel">
                      <Carousel>
                        <div className="carousel-inner">
                          <div className="carousel-item active position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-inner">
                          <div className="carousel-item active position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item position-relative">
                            <img src="images/listing-img.png" className="w-100" alt="..." />
                            <div className="listing-carousel-inner">
                              <div className="black-tag">Click Here for Full View</div>
                              <div className="d-flex">
                                <div className="black-tag mr-2 sm-tag">
                                  <i className="fas fa-camera p-lg mr-2"></i>
                                  12
                                </div>
                                <div className="green-tag">
                                  <i className="mr-2">
                                    <svg
                                      width="14"
                                      height="17"
                                      viewBox="0 0 14 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7.28117 0.04725L13.4062 2.13092C13.762 2.25108 14 2.58358 14 2.95925V7.64692C14 13.3683 7.61367 16.1484 7.34183 16.2651C7.12133 16.3584 6.8775 16.3584 6.65817 16.2651C6.38633 16.1496 0 13.3683 0 7.64692V2.95925C0 2.58358 0.238 2.25108 0.593833 2.13092L6.71883 0.04725C6.90083 -0.01575 7.09917 -0.01575 7.28117 0.04725ZM7.62533 10.6383L10.8337 6.55492C11.2327 6.04858 11.144 5.31475 10.6377 4.91808C10.1302 4.51908 9.3975 4.60892 8.99967 5.11525L6.54383 8.24075L5.42617 7.28292C4.9385 6.86408 4.20117 6.92008 3.78233 7.40892C3.36117 7.89775 3.41833 8.63509 3.90833 9.05392L5.95 10.8039C6.45167 11.2356 7.21583 11.1598 7.62533 10.6383Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </i>
                                  Verified
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>

                    <div className="details p-3">
                      <div className="row text-center">
                        <div className="col-lg-3 py-2 border-right">
                          <svg
                            className="mr-2"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0)">
                              <path
                                d="M14.5 12.5V16.5H9.5V12.5C9.5 12.2 9.5 12 9.7 11.7C9.7 11.7 9.7 11.6 9.8 11.5C10.1 10.8 10.8 10.4 11.6 10.4H12.6C13.6 10.5 14.5 11.4 14.5 12.5Z"
                                fill="white"
                              />
                              <path
                                d="M3.79998 7.9L12 1.1L20.2 7.8C20.3 8 20.4 8 20.5 8C20.6 8 20.8 7.9 20.9 7.8C21.1 7.6 21 7.3 20.8 7.1L12.3 0.099997C12.1 -0.100003 11.8 -0.100003 11.7 0.099997L3.19998 7.1C2.99998 7.3 2.89998 7.6 3.09998 7.8C3.29998 8 3.59998 8.1 3.79998 7.9Z"
                                fill="#1B1D22"
                              />
                              <path
                                d="M5.5 8C5.2 8 5 8.2 5 8.5V14.5C5 15.9 6.1 17 7.5 17C11.5 17 12.5 17 16.5 17C17.9 17 19 15.9 19 14.5V8.5C19 8.2 18.8 8 18.5 8C18.2 8 18 8.2 18 8.5V14.5C18 15.3 17.3 16 16.5 16H15V12.5C15 11.1 13.9 10 12.5 10H11.5C10.1 10 9 11.1 9 12.5V16H7.5C6.7 16 6 15.3 6 14.5V8.5C6 8.2 5.8 8 5.5 8ZM10 12.5C10 11.7 10.7 11 11.5 11H12.5C13.3 11 14 11.7 14 12.5V16H10V12.5Z"
                                fill="#1B1D22"
                              />
                              <path
                                d="M23.9 21.1L21.9 19.1C21.7 18.9 21.4 18.9 21.2 19.1C21 19.3 21 19.6 21.2 19.8L22.3 20.9H1.70001L2.80001 19.8C3.00001 19.6 3.00001 19.3 2.80001 19.1C2.60001 18.9 2.30001 18.9 2.10001 19.1L0.100012 21.1C-0.0999878 21.3 -0.0999878 21.6 0.100012 21.8L2.10001 23.8C2.20001 24 2.40001 24 2.50001 24C2.60001 24 2.80001 24 2.90001 23.9C3.10001 23.7 3.10001 23.4 2.90001 23.2L1.70001 22H22.3L21.2 23.1C21 23.3 21 23.6 21.2 23.8C21.3 23.9 21.4 23.9 21.6 23.9C21.8 23.9 21.9 23.9 22 23.8L24 21.8C24 21.7 24 21.3 23.9 21.1Z"
                                fill="#1B1D22"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <p className="mb-0">700 Sq. Meters</p>
                        </div>
                        <div className="col-lg-3 py-2 border-right">
                          <svg
                            width="28"
                            height="21"
                            viewBox="0 0 28 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M25.5 16.5H23.5V20.5H25.5V16.5Z" fill="white" />
                            <path d="M4.5 0.5H2.5V20.5H4.5V0.5Z" fill="white" />
                            <path
                              d="M27.5 20H26V16.5V12.5C26 10 24 8 21.5 8H8V5.5C8 4.1 6.9 3 5.5 3H5V0.5C5 0.2 4.8 0 4.5 0H2.5C2.2 0 2 0.2 2 0.5V20H0.5C0.2 20 0 20.2 0 20.5C0 20.8 0.2 21 0.5 21C11.1 21 3.6 21 27.5 21C27.8 21 28 20.8 28 20.5C28 20.2 27.8 20 27.5 20ZM25 12.5V16C19.1 16 34.3 16 5 16V9C11.2 9 15.3 9 21.5 9C23.4 9 25 10.6 25 12.5ZM5 17H23V20H5V17ZM5.5 4C6.3 4 7 4.7 7 5.5V8H5V4H5.5ZM3 20V1H4V3.5C4 6.7 4 12.4 4 20H3ZM24 20V17H25V20H24Z"
                              fill="#1B1D22"
                            />
                          </svg>
                          <p className="mb-0">5 Bedrooms</p>
                        </div>
                        <div className="col-lg-3 py-2 border-right">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.3947 21.7895H16.7053L14.7684 16.9474H15.1316C18.1579 16.9474 20.5789 14.5263 20.5789 11.5C20.5789 11.1368 20.3368 10.8947 19.9737 10.8947H6.05263V3.02632C6.05263 1.33158 4.72105 0 3.02632 0C2.66316 0 2.42105 0.242105 2.42105 0.605263V11.5C2.42105 11.8632 2.66316 12.1053 3.02632 12.1053C5.44737 12.1053 4.84211 12.1053 7.26316 12.1053V21.7895H0.605263C0.242105 21.7895 0 22.0316 0 22.3947C0 22.7579 0.242105 23 0.605263 23H22.3947C22.7579 23 23 22.7579 23 22.3947C23 22.0316 22.7579 21.7895 22.3947 21.7895ZM4.84211 10.8947H3.63158V1.33158C4.35789 1.57368 4.84211 2.3 4.84211 3.02632V10.8947ZM8.47368 21.7895V12.1053H19.3684C19.1263 14.1632 17.3105 15.7368 15.1316 15.7368H13.9211C13.6789 15.7368 13.5579 15.8579 13.4368 15.9789C13.3158 16.2211 13.3158 16.3421 13.3158 16.5842L15.3737 21.7895H8.47368Z"
                              fill="#1B1D22"
                            />
                          </svg>
                          <p className="mb-0">2 Bathrooms</p>
                        </div>
                        <div className="col-lg-3 py-2">
                          <svg
                            width="26"
                            height="14"
                            viewBox="0 0 26 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.6 3.4L22.5 5.5H7.5L9.3 4L11.3 2.3C12.6 1.2 14.3 0.5 16 0.5C16.1 0.5 16.2 0.5 16.3 0.5H20C20.7 0.5 21.3 0.6 21.9 0.9C22 0.9 22 0.9 22.1 1C22.9 1.3 23.5 1.9 24 2.5L24.3 2.9L24.6 3.4Z"
                              fill="white"
                            />
                            <path
                              d="M10.5 11.7C10.4 12.7 9.49999 13.5 8.49999 13.5C7.29999 13.5 6.39999 12.5 6.49999 11.3C6.59999 10.3 7.39999 9.5 8.49999 9.5C9.69999 9.5 10.6 10.5 10.5 11.7Z"
                              fill="white"
                            />
                            <path
                              d="M19.5 13.5C20.6046 13.5 21.5 12.6046 21.5 11.5C21.5 10.3954 20.6046 9.5 19.5 9.5C18.3954 9.5 17.5 10.3954 17.5 11.5C17.5 12.6046 18.3954 13.5 19.5 13.5Z"
                              fill="white"
                            />
                            <path
                              d="M8.5 9C7.1 9 6 10.1 6 11.5C6 12.9 7.1 14 8.5 14C9.9 14 11 12.9 11 11.5C11 10.1 9.9 9 8.5 9ZM8.5 13C7.7 13 7 12.3 7 11.5C7 10.7 7.7 10 8.5 10C9.3 10 10 10.7 10 11.5C10 12.3 9.3 13 8.5 13Z"
                              fill="#1B1D22"
                            />
                            <path
                              d="M25.5 3.7L24.4 2.2C23.4 0.8 21.7 0 20 0H16.4C14.4 0 12.5 0.7 11 2L7.3 5H6.1C4.9 5 3.8 5.3 2.9 6C1.7 6.8 0.9 8 0.5 9.4L0 11.4C0 11.5 0 11.7 0.1 11.8C0.2 11.9 0.3 12 0.5 12H4.5C4.8 12 5 11.8 5 11.5C5 11.2 4.8 11 4.5 11H1.1L1.5 9.6C1.8 8.5 2.5 7.5 3.5 6.8C4.2 6.3 5.1 6 6.1 6C11.5 6 14.7 6 20.9 6C22 6 23.2 5.5 24 4.7L24.6 4.1L24.7 4.2C24.9 4.5 25 4.8 25 5.2V10.5C25 10.8 24.8 11 24.5 11H23.5C23.2 11 23 11.2 23 11.5C23 11.8 23.2 12 23.5 12H24.5C25.3 12 26 11.3 26 10.5V5.2C26 4.6 25.8 4.1 25.5 3.7ZM16 5H8.9L11.6 2.7C12.8 1.7 14.4 1.1 16 1V5ZM23.3 4C22.6 4.7 21.8 5 20.8 5H17V1H20C21.4 1 22.8 1.7 23.6 2.8L24 3.3L23.3 4Z"
                              fill="#1B1D22"
                            />
                            <path
                              d="M19.5 9C18.1 9 17 10.1 17 11.5C17 12.9 18.1 14 19.5 14C20.9 14 22 12.9 22 11.5C22 10.1 20.9 9 19.5 9ZM19.5 13C18.7 13 18 12.3 18 11.5C18 10.7 18.7 10 19.5 10C20.3 10 21 10.7 21 11.5C21 12.3 20.3 13 19.5 13Z"
                              fill="#1B1D22"
                            />
                            <path
                              d="M15.5 11H12.5C12.2 11 12 11.2 12 11.5C12 11.8 12.2 12 12.5 12H15.5C15.8 12 16 11.8 16 11.5C16 11.2 15.8 11 15.5 11Z"
                              fill="#1B1D22"
                            />
                            <path
                              d="M14.5 8C14.8 8 15 7.8 15 7.5C15 7.2 14.8 7 14.5 7H13.5C13.2 7 13 7.2 13 7.5C13 7.8 13.2 8 13.5 8H14.5Z"
                              fill="#1B1D22"
                            />
                          </svg>
                          <p className="mb-0">1 Garage</p>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              id="pills-home-tab"
                              data-toggle="pill"
                              href="#pills-home"
                              role="tab"
                              aria-controls="pills-home"
                              aria-selected="true"
                              onClick={() => setactiveTab(0)}
                            >
                              Details
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="pills-profile-tab"
                              data-toggle="pill"
                              href="#pills-profile"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                              onClick={() => setactiveTab(2)}
                            >
                              Video
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-contact"
                              role="tab"
                              aria-controls="pills-contact"
                              aria-selected="false"
                              onClick={() => setactiveTab(1)}
                            >
                              Map
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-home"
                            role="tabpanel"
                            aria-labelledby="pills-home-tab"
                          >
                            {activeTab == 0 ? (
                              <div className="details px-3 py-4">
                                <p className="bold mb-1">Description</p>
                                <p className="grey-text mb-0">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa, porta auctor
                                  pretium dictumst non a. Adipiscing tortor ornare facilisis metus quis arcu dictum.
                                  Pulvinar nec, duis gravida malesuada dis vel eget neque elementum. Varius amet sem sit
                                  nulla nunc. Nam vel eget sodales tincidunt turpis pharetra volutpat nulla. Vulputate
                                  malesuada eu tellus gravida varius et nulla tincidunt. Nulla pretium commodo faucibus
                                  leo sed nibh. Scelerisque scelerisque faucibus urna enim in vel tincidunt tristique
                                  nunc. Nisl mauris auctor id sagittis aenean vestibulum. Est magnis sit egestas
                                  elementum lorem id. Vulputate ultricies vulputate sed vel tempor aliquet lacus. Sed
                                  pulvinar turpis non sollicitudin leo. Vestibulum, bibendum urna viverra proin nibh
                                  ullamcorper. Elementum amet, ac risus elementum sagittis. Massa arcu cursus nisi nulla
                                  tincidunt. Phasellus netus egestas dolor, aliquet scelerisque nec. Ullamcorper risus
                                  sapien, in leo tincidunt sed. Purus imperdiet erat mi pharetra, velit. Odio egestas
                                  posuere pellentesque nunc eget etiam imperdiet blandit fringilla. Nibh dictum eleifend
                                  neque eget magna vel. Quis fusce sed ut ultrices aliquam. Id feugiat molestie cursus
                                  vehicula integer. Odio vehicula tempor, cras pulvinar scelerisque vel neque porta.
                                  Imperdiet sit lectus adipiscing interdum tempor adipiscing senectus ullamcorper non.
                                  Pretium convallis tellus faucibus morbi. Id egestas fringilla dignissim lorem bibendum
                                  sapien felis. Massa, felis fermentum, id proin. Felis in commodo nam commodo volutpat
                                  eget feugiat. Fermentum aliquam at id nisi. Nulla lectus facilisi sem ut. Ut ut sed
                                  eget nullam. Porta sit aenean viverra posuere adipiscing. Vulputate tellus vulputate
                                  eget nunc quis habitasse arcu. Eleifend faucibus at eu fermentum donec velit etiam sit
                                  viverra. At quis consectetur eget nibh id erat urna, etiam. Risus dolor tincidunt et
                                  sed faucibus elit massa neque. Et, mus in id proin blandit sed et. Sit eget pharetra
                                  et placerat. Mauris ut ut arcu ac in enim massa eu semper. Nulla massa donec dignissim
                                  eu nisl accumsan. Nibh venenatis eros, sem mi ac ac morbi in. Semper euismod volutpat
                                  parturient imperdiet. Enim molestie commodo quis eget placerat quisque diam purus.
                                  Lorem quis est porttitor justo. Et mi fames quis at consectetur sollicitudin. Quam
                                  turpis felis vestibulum arcu ullamcorper semper sapien. Aliquam lacus, sem viverra
                                  blandit aliquam dui odio non. Eu in viverra velit sit lacinia. Suspendisse ac,
                                  molestie fusce nulla quisque orci in. Duis sagittis, suspendisse vivamus libero orci
                                  sit nulla. Ornare ut dictumst sit sem.
                                </p>
                              </div>
                            ) : (
                              <>
                                {activeTab == 1 ? (
                                  <div className="details px-3 py-4">
                                    <div style={{ width: "100%" }}>
                                      <iframe
                                        width="100%"
                                        height="600"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                      ></iframe>
                                    </div>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </>
                            )}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                          >
                            ...
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                          >
                            ...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mt-3">
                  <div className="listing-inner">
                    <h3 className="text-center mb-5 bold">N 25, 000, 000</h3>
                    <div className="details-cardd mt-5">
                      <img src="images/construction.png" alt="" className="img-fluid const-img" />
                      <p className="bold">
                        Hazara Construction <br></br> and Builders{" "}
                      </p>
                      <img src="images/phone.png" alt="" className="img-fluid mt-2" />
                      <div className="mt-3">
                        <a href="#_" className="green-text">
                          +2348023456789
                        </a>
                      </div>
                      <p className="bold mt-3">Typical Mortgage Offers</p>
                      <div className="row">
                        <div className="col-lg-4 py-2 border-right">
                          <p className="mb-0">Interest</p>
                          <p className="mb-0">10%</p>
                        </div>
                        <div className="col-lg-4 py-2 border-right">
                          <p className="mb-0">Equity</p>
                          <p className="mb-0">10%</p>
                        </div>
                        <div className="col-lg-4 py-2">
                          <p className="mb-0">Tenor</p>
                          <p className="mb-0">5 years</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <a href="#_" className="site-btn w-100 text-center py-3">
                        Apply For Finance To Buy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mortgage-calculator mt-4 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 col-12 mx-auto">
              <div className="calculator-inner py-lg-5 py-4">
                <div className="row">
                  <div className="col-lg-6 my-lg-auto mt-3">
                    <h2>Do you want to Sell a Home?</h2>
                    <p className="mt-3">
                      Leverage our large network of buyers and mortgage financiers to quickly sell your home by listing
                      it on Homer Homes
                    </p>
                    <a href="#_" className="mt-lg-5 px-5 py-3 mt-4 site-btn pilled-btn">
                      List Now
                    </a>
                  </div>
                  <div className="col-lg-6 my-lg-auto mt-3">
                    <img src="images/sell-house.png" alt="" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
