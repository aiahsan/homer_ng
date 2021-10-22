import React from 'react';
import Main from '../../../components/userBar'
export default () => {
    const [show,setshow]=React.useState(false)
    return <>

        <Main>
            {
                show==false?      <div className="main-body">
                <section className="listing">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <h3 className="blue-text medium">Applications</h3>
                          </div>
                          <div className="col-lg-8 mt-3">
                            <div className="listing-inner">
                              <div className="row">
                                <div className="col-12 text-center">
                                  <p className="bold">No Applications</p>
                                  <img src="/images/not-found.png" alt="" className="img-fluid d-block mx-auto" />
                                  <button onClick={()=>location.href="/user/application/apply"} className="site-btn mt-4 px-md-5 px-3 py-2">Apply Now</button>
                                  <div className="text-center">
                                <button onClick={()=>{setshow(true)}} className="site-btn mt-4 px-md-5 px-3 py-2">Show Avaible Items Page</button>

                                </div>
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
:<div className="main-body">
<section className="listing">
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h3 className="blue-text medium">Applications</h3>
          </div>
          <div className="col-lg-9 mt-3">
            <div className="listing-inner py-3">
              <div className="media d-md-flex d-block align-items-center">
                <img src="/images/customer-1.png" alt="" className="img-fluid" />
                <div className="media-body ml-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="bold">N 25, 000, 000</h3>
                    <button className="transparent-btn"><svg width={57} height={57} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={57} height={57} rx={8} fill="#6171FF" />
                        <path d="M21.8154 34.0782H9.63281L11.3471 32.3113H21.8245L21.8154 34.0782Z" fill="white" />
                        <path d="M20.5391 32.8287L31.977 21.5793L32.0118 24.1117L21.8158 34.078L20.5391 32.8287Z" fill="white" />
                        <path d="M16.8516 31.4368L27.1644 21.2935L27.1998 23.8264L19.3915 31.4368H16.8516Z" fill="white" />
                        <path d="M22.3729 23.8264L14.5751 31.437H12.0352L22.3378 21.2937L22.3729 23.8264Z" fill="white" />
                        <path d="M44.6751 34.0691L31.9766 21.5793L32.0113 24.1117L42.1437 34.078L44.6751 34.0691Z" fill="white" />
                        <path d="M29.0712 23.1689L27.1641 21.2937L27.1988 23.8267L27.8106 24.4278L29.0712 23.1689Z" fill="white" />
                        <path d="M24.2371 23.1689L22.3398 21.2937L22.3752 23.8267L22.9764 24.4278L24.2371 23.1689Z" fill="white" />
                        <path d="M31.6854 28.8591H29.9258V30.5898H31.6854V28.8591Z" fill="#FDFDFF" />
                        <path d="M33.8182 28.8591H32.0586V30.5898H33.8182V28.8591Z" fill="#FDFDFF" />
                        <path d="M31.6854 30.9304H29.9258V32.6611H31.6854V30.9304Z" fill="#FDFDFF" />
                        <path d="M33.8182 30.9304H32.0586V32.6611H33.8182V30.9304Z" fill="#FDFDFF" />
                      </svg>
                    </button>
                  </div>
                  <p className="p-xs mb-0"><i className="fas fa-map-marker-alt mr-1" />Ogombo Behind Abraham Adesanya</p>
                  <p className="mb-0 medium mt-2">Semi Detached Bungalow</p>
                  <div className="row">
                    <div className="col-xl-10 col-12">
                      <div className="d-sm-flex justify-content-between">
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg className="mr-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                              <path d="M14.5 12.5V16.5H9.5V12.5C9.5 12.2 9.5 12 9.7 11.7C9.7 11.7 9.7 11.6 9.8 11.5C10.1 10.8 10.8 10.4 11.6 10.4H12.6C13.6 10.5 14.5 11.4 14.5 12.5Z" fill="white" />
                              <path d="M3.79998 7.9L12 1.1L20.2 7.8C20.3 8 20.4 8 20.5 8C20.6 8 20.8 7.9 20.9 7.8C21.1 7.6 21 7.3 20.8 7.1L12.3 0.099997C12.1 -0.100003 11.8 -0.100003 11.7 0.099997L3.19998 7.1C2.99998 7.3 2.89998 7.6 3.09998 7.8C3.29998 8 3.59998 8.1 3.79998 7.9Z" fill="#1B1D22" />
                              <path d="M5.5 8C5.2 8 5 8.2 5 8.5V14.5C5 15.9 6.1 17 7.5 17C11.5 17 12.5 17 16.5 17C17.9 17 19 15.9 19 14.5V8.5C19 8.2 18.8 8 18.5 8C18.2 8 18 8.2 18 8.5V14.5C18 15.3 17.3 16 16.5 16H15V12.5C15 11.1 13.9 10 12.5 10H11.5C10.1 10 9 11.1 9 12.5V16H7.5C6.7 16 6 15.3 6 14.5V8.5C6 8.2 5.8 8 5.5 8ZM10 12.5C10 11.7 10.7 11 11.5 11H12.5C13.3 11 14 11.7 14 12.5V16H10V12.5Z" fill="#1B1D22" />
                              <path d="M23.9 21.1L21.9 19.1C21.7 18.9 21.4 18.9 21.2 19.1C21 19.3 21 19.6 21.2 19.8L22.3 20.9H1.70001L2.80001 19.8C3.00001 19.6 3.00001 19.3 2.80001 19.1C2.60001 18.9 2.30001 18.9 2.10001 19.1L0.100012 21.1C-0.0999878 21.3 -0.0999878 21.6 0.100012 21.8L2.10001 23.8C2.20001 24 2.40001 24 2.50001 24C2.60001 24 2.80001 24 2.90001 23.9C3.10001 23.7 3.10001 23.4 2.90001 23.2L1.70001 22H22.3L21.2 23.1C21 23.3 21 23.6 21.2 23.8C21.3 23.9 21.4 23.9 21.6 23.9C21.8 23.9 21.9 23.9 22 23.8L24 21.8C24 21.7 24 21.3 23.9 21.1Z" fill="#1B1D22" />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width={24} height={24} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="ml-2">700m2</span>
                        </div>
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5 16.5H23.5V20.5H25.5V16.5Z" fill="white" />
                            <path d="M4.5 0.5H2.5V20.5H4.5V0.5Z" fill="white" />
                            <path d="M27.5 20H26V16.5V12.5C26 10 24 8 21.5 8H8V5.5C8 4.1 6.9 3 5.5 3H5V0.5C5 0.2 4.8 0 4.5 0H2.5C2.2 0 2 0.2 2 0.5V20H0.5C0.2 20 0 20.2 0 20.5C0 20.8 0.2 21 0.5 21C11.1 21 3.6 21 27.5 21C27.8 21 28 20.8 28 20.5C28 20.2 27.8 20 27.5 20ZM25 12.5V16C19.1 16 34.3 16 5 16V9C11.2 9 15.3 9 21.5 9C23.4 9 25 10.6 25 12.5ZM5 17H23V20H5V17ZM5.5 4C6.3 4 7 4.7 7 5.5V8H5V4H5.5ZM3 20V1H4V3.5C4 6.7 4 12.4 4 20H3ZM24 20V17H25V20H24Z" fill="#1B1D22" />
                          </svg>
                          <span className="ml-2">5</span>
                        </div>
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg width={23} height={23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3947 21.7895H16.7053L14.7684 16.9474H15.1316C18.1579 16.9474 20.5789 14.5263 20.5789 11.5C20.5789 11.1368 20.3368 10.8947 19.9737 10.8947H6.05263V3.02632C6.05263 1.33158 4.72105 0 3.02632 0C2.66316 0 2.42105 0.242105 2.42105 0.605263V11.5C2.42105 11.8632 2.66316 12.1053 3.02632 12.1053C5.44737 12.1053 4.84211 12.1053 7.26316 12.1053V21.7895H0.605263C0.242105 21.7895 0 22.0316 0 22.3947C0 22.7579 0.242105 23 0.605263 23H22.3947C22.7579 23 23 22.7579 23 22.3947C23 22.0316 22.7579 21.7895 22.3947 21.7895ZM4.84211 10.8947H3.63158V1.33158C4.35789 1.57368 4.84211 2.3 4.84211 3.02632V10.8947ZM8.47368 21.7895V12.1053H19.3684C19.1263 14.1632 17.3105 15.7368 15.1316 15.7368H13.9211C13.6789 15.7368 13.5579 15.8579 13.4368 15.9789C13.3158 16.2211 13.3158 16.3421 13.3158 16.5842L15.3737 21.7895H8.47368Z" fill="#1B1D22" />
                          </svg>
                          <span className="ml-2">1</span>
                        </div>
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg width={26} height={14} viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.6 3.4L22.5 5.5H7.5L9.3 4L11.3 2.3C12.6 1.2 14.3 0.5 16 0.5C16.1 0.5 16.2 0.5 16.3 0.5H20C20.7 0.5 21.3 0.6 21.9 0.9C22 0.9 22 0.9 22.1 1C22.9 1.3 23.5 1.9 24 2.5L24.3 2.9L24.6 3.4Z" fill="white" />
                            <path d="M10.5 11.7C10.4 12.7 9.49999 13.5 8.49999 13.5C7.29999 13.5 6.39999 12.5 6.49999 11.3C6.59999 10.3 7.39999 9.5 8.49999 9.5C9.69999 9.5 10.6 10.5 10.5 11.7Z" fill="white" />
                            <path d="M19.5 13.5C20.6046 13.5 21.5 12.6046 21.5 11.5C21.5 10.3954 20.6046 9.5 19.5 9.5C18.3954 9.5 17.5 10.3954 17.5 11.5C17.5 12.6046 18.3954 13.5 19.5 13.5Z" fill="white" />
                            <path d="M8.5 9C7.1 9 6 10.1 6 11.5C6 12.9 7.1 14 8.5 14C9.9 14 11 12.9 11 11.5C11 10.1 9.9 9 8.5 9ZM8.5 13C7.7 13 7 12.3 7 11.5C7 10.7 7.7 10 8.5 10C9.3 10 10 10.7 10 11.5C10 12.3 9.3 13 8.5 13Z" fill="#1B1D22" />
                            <path d="M25.5 3.7L24.4 2.2C23.4 0.8 21.7 0 20 0H16.4C14.4 0 12.5 0.7 11 2L7.3 5H6.1C4.9 5 3.8 5.3 2.9 6C1.7 6.8 0.9 8 0.5 9.4L0 11.4C0 11.5 0 11.7 0.1 11.8C0.2 11.9 0.3 12 0.5 12H4.5C4.8 12 5 11.8 5 11.5C5 11.2 4.8 11 4.5 11H1.1L1.5 9.6C1.8 8.5 2.5 7.5 3.5 6.8C4.2 6.3 5.1 6 6.1 6C11.5 6 14.7 6 20.9 6C22 6 23.2 5.5 24 4.7L24.6 4.1L24.7 4.2C24.9 4.5 25 4.8 25 5.2V10.5C25 10.8 24.8 11 24.5 11H23.5C23.2 11 23 11.2 23 11.5C23 11.8 23.2 12 23.5 12H24.5C25.3 12 26 11.3 26 10.5V5.2C26 4.6 25.8 4.1 25.5 3.7ZM16 5H8.9L11.6 2.7C12.8 1.7 14.4 1.1 16 1V5ZM23.3 4C22.6 4.7 21.8 5 20.8 5H17V1H20C21.4 1 22.8 1.7 23.6 2.8L24 3.3L23.3 4Z" fill="#1B1D22" />
                            <path d="M19.5 9C18.1 9 17 10.1 17 11.5C17 12.9 18.1 14 19.5 14C20.9 14 22 12.9 22 11.5C22 10.1 20.9 9 19.5 9ZM19.5 13C18.7 13 18 12.3 18 11.5C18 10.7 18.7 10 19.5 10C20.3 10 21 10.7 21 11.5C21 12.3 20.3 13 19.5 13Z" fill="#1B1D22" />
                            <path d="M15.5 11H12.5C12.2 11 12 11.2 12 11.5C12 11.8 12.2 12 12.5 12H15.5C15.8 12 16 11.8 16 11.5C16 11.2 15.8 11 15.5 11Z" fill="#1B1D22" />
                            <path d="M14.5 8C14.8 8 15 7.8 15 7.5C15 7.2 14.8 7 14.5 7H13.5C13.2 7 13 7.2 13 7.5C13 7.8 13.2 8 13.5 8H14.5Z" fill="#1B1D22" />
                          </svg>
                          <span className="ml-2">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center mt-3">
                      <p className="p-sm mb-0 blue-text medium">3 Offers Received</p>
                      <p className="p-sm mb-0 blue-text medium ml-4">1 Offers Accepted</p>
                    </div>
                    <button className="site-btn mt-3 px-3 py-2">View Offer</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-inner py-3 mt-3">
              <div className="media d-md-flex d-block align-items-center">
                <img src="/images/customer-2.png" alt="" className="img-fluid" />
                <div className="media-body ml-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="bold">N 25, 000, 000</h3>
                    <button className="transparent-btn"><svg width={57} height={57} viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={57} height={57} rx={8} fill="#6171FF" />
                        <path d="M21.8154 34.0782H9.63281L11.3471 32.3113H21.8245L21.8154 34.0782Z" fill="white" />
                        <path d="M20.5391 32.8287L31.977 21.5793L32.0118 24.1117L21.8158 34.078L20.5391 32.8287Z" fill="white" />
                        <path d="M16.8516 31.4368L27.1644 21.2935L27.1998 23.8264L19.3915 31.4368H16.8516Z" fill="white" />
                        <path d="M22.3729 23.8264L14.5751 31.437H12.0352L22.3378 21.2937L22.3729 23.8264Z" fill="white" />
                        <path d="M44.6751 34.0691L31.9766 21.5793L32.0113 24.1117L42.1437 34.078L44.6751 34.0691Z" fill="white" />
                        <path d="M29.0712 23.1689L27.1641 21.2937L27.1988 23.8267L27.8106 24.4278L29.0712 23.1689Z" fill="white" />
                        <path d="M24.2371 23.1689L22.3398 21.2937L22.3752 23.8267L22.9764 24.4278L24.2371 23.1689Z" fill="white" />
                        <path d="M31.6854 28.8591H29.9258V30.5898H31.6854V28.8591Z" fill="#FDFDFF" />
                        <path d="M33.8182 28.8591H32.0586V30.5898H33.8182V28.8591Z" fill="#FDFDFF" />
                        <path d="M31.6854 30.9304H29.9258V32.6611H31.6854V30.9304Z" fill="#FDFDFF" />
                        <path d="M33.8182 30.9304H32.0586V32.6611H33.8182V30.9304Z" fill="#FDFDFF" />
                      </svg>
                    </button>
                  </div>
                  <p className="p-xs mb-0"><i className="fas fa-map-marker-alt mr-1" />Ogombo Behind Abraham Adesanya</p>
                  <p className="mb-0 medium mt-2">Semi Detached Bungalow</p>
                  <div className="row">
                    <div className="col-xl-10 col-12">
                      <div className="d-sm-flex justify-content-between">
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg className="mr-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                              <path d="M14.5 12.5V16.5H9.5V12.5C9.5 12.2 9.5 12 9.7 11.7C9.7 11.7 9.7 11.6 9.8 11.5C10.1 10.8 10.8 10.4 11.6 10.4H12.6C13.6 10.5 14.5 11.4 14.5 12.5Z" fill="white" />
                              <path d="M3.79998 7.9L12 1.1L20.2 7.8C20.3 8 20.4 8 20.5 8C20.6 8 20.8 7.9 20.9 7.8C21.1 7.6 21 7.3 20.8 7.1L12.3 0.099997C12.1 -0.100003 11.8 -0.100003 11.7 0.099997L3.19998 7.1C2.99998 7.3 2.89998 7.6 3.09998 7.8C3.29998 8 3.59998 8.1 3.79998 7.9Z" fill="#1B1D22" />
                              <path d="M5.5 8C5.2 8 5 8.2 5 8.5V14.5C5 15.9 6.1 17 7.5 17C11.5 17 12.5 17 16.5 17C17.9 17 19 15.9 19 14.5V8.5C19 8.2 18.8 8 18.5 8C18.2 8 18 8.2 18 8.5V14.5C18 15.3 17.3 16 16.5 16H15V12.5C15 11.1 13.9 10 12.5 10H11.5C10.1 10 9 11.1 9 12.5V16H7.5C6.7 16 6 15.3 6 14.5V8.5C6 8.2 5.8 8 5.5 8ZM10 12.5C10 11.7 10.7 11 11.5 11H12.5C13.3 11 14 11.7 14 12.5V16H10V12.5Z" fill="#1B1D22" />
                              <path d="M23.9 21.1L21.9 19.1C21.7 18.9 21.4 18.9 21.2 19.1C21 19.3 21 19.6 21.2 19.8L22.3 20.9H1.70001L2.80001 19.8C3.00001 19.6 3.00001 19.3 2.80001 19.1C2.60001 18.9 2.30001 18.9 2.10001 19.1L0.100012 21.1C-0.0999878 21.3 -0.0999878 21.6 0.100012 21.8L2.10001 23.8C2.20001 24 2.40001 24 2.50001 24C2.60001 24 2.80001 24 2.90001 23.9C3.10001 23.7 3.10001 23.4 2.90001 23.2L1.70001 22H22.3L21.2 23.1C21 23.3 21 23.6 21.2 23.8C21.3 23.9 21.4 23.9 21.6 23.9C21.8 23.9 21.9 23.9 22 23.8L24 21.8C24 21.7 24 21.3 23.9 21.1Z" fill="#1B1D22" />
                            </g>
                            <defs>
                              <clipPath id="clip0">
                                <rect width={24} height={24} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span className="ml-2">700m2</span>
                        </div>
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg width={28} height={21} viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.5 16.5H23.5V20.5H25.5V16.5Z" fill="white" />
                            <path d="M4.5 0.5H2.5V20.5H4.5V0.5Z" fill="white" />
                            <path d="M27.5 20H26V16.5V12.5C26 10 24 8 21.5 8H8V5.5C8 4.1 6.9 3 5.5 3H5V0.5C5 0.2 4.8 0 4.5 0H2.5C2.2 0 2 0.2 2 0.5V20H0.5C0.2 20 0 20.2 0 20.5C0 20.8 0.2 21 0.5 21C11.1 21 3.6 21 27.5 21C27.8 21 28 20.8 28 20.5C28 20.2 27.8 20 27.5 20ZM25 12.5V16C19.1 16 34.3 16 5 16V9C11.2 9 15.3 9 21.5 9C23.4 9 25 10.6 25 12.5ZM5 17H23V20H5V17ZM5.5 4C6.3 4 7 4.7 7 5.5V8H5V4H5.5ZM3 20V1H4V3.5C4 6.7 4 12.4 4 20H3ZM24 20V17H25V20H24Z" fill="#1B1D22" />
                          </svg>
                          <span className="ml-2">5</span>
                        </div>
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg width={23} height={23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3947 21.7895H16.7053L14.7684 16.9474H15.1316C18.1579 16.9474 20.5789 14.5263 20.5789 11.5C20.5789 11.1368 20.3368 10.8947 19.9737 10.8947H6.05263V3.02632C6.05263 1.33158 4.72105 0 3.02632 0C2.66316 0 2.42105 0.242105 2.42105 0.605263V11.5C2.42105 11.8632 2.66316 12.1053 3.02632 12.1053C5.44737 12.1053 4.84211 12.1053 7.26316 12.1053V21.7895H0.605263C0.242105 21.7895 0 22.0316 0 22.3947C0 22.7579 0.242105 23 0.605263 23H22.3947C22.7579 23 23 22.7579 23 22.3947C23 22.0316 22.7579 21.7895 22.3947 21.7895ZM4.84211 10.8947H3.63158V1.33158C4.35789 1.57368 4.84211 2.3 4.84211 3.02632V10.8947ZM8.47368 21.7895V12.1053H19.3684C19.1263 14.1632 17.3105 15.7368 15.1316 15.7368H13.9211C13.6789 15.7368 13.5579 15.8579 13.4368 15.9789C13.3158 16.2211 13.3158 16.3421 13.3158 16.5842L15.3737 21.7895H8.47368Z" fill="#1B1D22" />
                          </svg>
                          <span className="ml-2">1</span>
                        </div>
                        <div className="d-flex mr-sm-3 mt-3 align-items-center">
                          <svg width={26} height={14} viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.6 3.4L22.5 5.5H7.5L9.3 4L11.3 2.3C12.6 1.2 14.3 0.5 16 0.5C16.1 0.5 16.2 0.5 16.3 0.5H20C20.7 0.5 21.3 0.6 21.9 0.9C22 0.9 22 0.9 22.1 1C22.9 1.3 23.5 1.9 24 2.5L24.3 2.9L24.6 3.4Z" fill="white" />
                            <path d="M10.5 11.7C10.4 12.7 9.49999 13.5 8.49999 13.5C7.29999 13.5 6.39999 12.5 6.49999 11.3C6.59999 10.3 7.39999 9.5 8.49999 9.5C9.69999 9.5 10.6 10.5 10.5 11.7Z" fill="white" />
                            <path d="M19.5 13.5C20.6046 13.5 21.5 12.6046 21.5 11.5C21.5 10.3954 20.6046 9.5 19.5 9.5C18.3954 9.5 17.5 10.3954 17.5 11.5C17.5 12.6046 18.3954 13.5 19.5 13.5Z" fill="white" />
                            <path d="M8.5 9C7.1 9 6 10.1 6 11.5C6 12.9 7.1 14 8.5 14C9.9 14 11 12.9 11 11.5C11 10.1 9.9 9 8.5 9ZM8.5 13C7.7 13 7 12.3 7 11.5C7 10.7 7.7 10 8.5 10C9.3 10 10 10.7 10 11.5C10 12.3 9.3 13 8.5 13Z" fill="#1B1D22" />
                            <path d="M25.5 3.7L24.4 2.2C23.4 0.8 21.7 0 20 0H16.4C14.4 0 12.5 0.7 11 2L7.3 5H6.1C4.9 5 3.8 5.3 2.9 6C1.7 6.8 0.9 8 0.5 9.4L0 11.4C0 11.5 0 11.7 0.1 11.8C0.2 11.9 0.3 12 0.5 12H4.5C4.8 12 5 11.8 5 11.5C5 11.2 4.8 11 4.5 11H1.1L1.5 9.6C1.8 8.5 2.5 7.5 3.5 6.8C4.2 6.3 5.1 6 6.1 6C11.5 6 14.7 6 20.9 6C22 6 23.2 5.5 24 4.7L24.6 4.1L24.7 4.2C24.9 4.5 25 4.8 25 5.2V10.5C25 10.8 24.8 11 24.5 11H23.5C23.2 11 23 11.2 23 11.5C23 11.8 23.2 12 23.5 12H24.5C25.3 12 26 11.3 26 10.5V5.2C26 4.6 25.8 4.1 25.5 3.7ZM16 5H8.9L11.6 2.7C12.8 1.7 14.4 1.1 16 1V5ZM23.3 4C22.6 4.7 21.8 5 20.8 5H17V1H20C21.4 1 22.8 1.7 23.6 2.8L24 3.3L23.3 4Z" fill="#1B1D22" />
                            <path d="M19.5 9C18.1 9 17 10.1 17 11.5C17 12.9 18.1 14 19.5 14C20.9 14 22 12.9 22 11.5C22 10.1 20.9 9 19.5 9ZM19.5 13C18.7 13 18 12.3 18 11.5C18 10.7 18.7 10 19.5 10C20.3 10 21 10.7 21 11.5C21 12.3 20.3 13 19.5 13Z" fill="#1B1D22" />
                            <path d="M15.5 11H12.5C12.2 11 12 11.2 12 11.5C12 11.8 12.2 12 12.5 12H15.5C15.8 12 16 11.8 16 11.5C16 11.2 15.8 11 15.5 11Z" fill="#1B1D22" />
                            <path d="M14.5 8C14.8 8 15 7.8 15 7.5C15 7.2 14.8 7 14.5 7H13.5C13.2 7 13 7.2 13 7.5C13 7.8 13.2 8 13.5 8H14.5Z" fill="#1B1D22" />
                          </svg>
                          <span className="ml-2">1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-md-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center mt-3">
                      <p className="p-sm mb-0 blue-text medium">3 Offers Received</p>
                      <p className="p-sm mb-0 blue-text medium ml-4">1 Offers Accepted</p>
                    </div>
                    <button className="site-btn mt-3 px-3 py-2">View Offer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-3 listing-inner">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

            }
  

        </Main>
    </>
}