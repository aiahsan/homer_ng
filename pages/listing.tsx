import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ListingCard from "../components/listingCard";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaFilter } from "react-icons/fa";

export default () => {
  const [slider, setslider] = React.useState("50");
  const [downpayment, setdownpayment] = React.useState("N 3,000,000");
  const [lengthloan, setlengthloan] = React.useState("5");
  const [lengthrate, setlengthrate] = React.useState("5");

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
                <div className="container-fluid listing-inner-dsb-none">
                  <Accordion allowZeroExpanded={true}>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <div className="d-flex justify-content-between mx-2 ">
                            <p className="p-lg bold" style={{ color: "#153a84" }}>
                              Filter
                            </p>{" "}
                            <FaFilter color="#153a84" />
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="">
                          <div className="listing-inner">
                            <p className="p-lg bold">Filter</p>
                            <form action="#_" className="mt-3">
                              <div>
                                <label className="bold">Location</label>
                                <input type="text" name="" placeholder="State, Local Govt, Address" id="" />
                              </div>
                              <label className="bold mt-4">Type of House</label>
                              <select className="bold">
                                <option value="Semi-Detached">Semi-Detached</option>
                              </select>
                              <div className="row">
                                <div className="col-lg-6">
                                  <label className="bold mt-4">Bedrooms</label>
                                  <select className="bold">
                                    <option value="Semi-Detached">Select</option>
                                  </select>
                                </div>
                                <div className="col-lg-6">
                                  <label className="bold mt-4">Bathroom</label>
                                  <select className="bold">
                                    <option value="Semi-Detached">Select</option>
                                  </select>
                                </div>
                                <div className="col-lg-6">
                                  <label className="bold mt-4">Min Price</label>
                                  <input type="number" name="" placeholder="From" id="" />
                                </div>
                                <div className="col-lg-6">
                                  <label className="bold mt-4">Max Price</label>
                                  <input type="number" name="" placeholder="To" id="" />
                                </div>
                                <div className="col-12">
                                  <label className="bold mt-4">Developer</label>
                                  <input type="text" name="" placeholder="State, Local Govt, Address" id="" />
                                </div>
                                <div className="col-12 mt-5">
                                  <button className="w-100 site-btn py-3">Search</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="col-lg-8 mt-3">
                  {Array.from({ length: 5 }, () => (
                    <ListingCard isUser={true} />
                  ))}
                </div>
                <div className="col-lg-4 mt-3">
                  <div className="listing-inner listing-inner-dsb">
                    <p className="p-lg bold">Filter</p>
                    <form action="#_" className="mt-3">
                      <div>
                        <label className="bold">Location</label>
                        <input type="text" name="" placeholder="State, Local Govt, Address" id="" />
                      </div>
                      <label className="bold mt-4">Type of House</label>
                      <select className="bold">
                        <option value="Semi-Detached">Semi-Detached</option>
                      </select>
                      <div className="row">
                        <div className="col-lg-6">
                          <label className="bold mt-4">Bedrooms</label>
                          <select className="bold">
                            <option value="Semi-Detached">Select</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <label className="bold mt-4">Bathroom</label>
                          <select className="bold">
                            <option value="Semi-Detached">Select</option>
                          </select>
                        </div>
                        <div className="col-lg-6">
                          <label className="bold mt-4">Min Price</label>
                          <input type="number" name="" placeholder="From" id="" />
                        </div>
                        <div className="col-lg-6">
                          <label className="bold mt-4">Max Price</label>
                          <input type="number" name="" placeholder="To" id="" />
                        </div>
                        <div className="col-12">
                          <label className="bold mt-4">Developer</label>
                          <input type="text" name="" placeholder="State, Local Govt, Address" id="" />
                        </div>
                        <div className="col-12 mt-5">
                          <button className="w-100 site-btn py-3">Search</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="mortgage-calculator mt-3">
                    <div className="row">
                      <div className="col-12">
                        <div className="calculator-inner px-3 py-4">
                          <div className="row">
                            <div className="col-12 text-left">
                              <h3 className="mb-0 bold">Mortgage Calculator</h3>
                            </div>
                            <div className="col-12 mt-4">
                              <p className="p-lg l-blue-text mb-1">Home Price</p>
                              <h4 className="blue-text bold">N 3,000,000</h4>
                              <div className="slidecontainer">
                                <input
                                  type="range"
                                  min="1"
                                  max="100"
                                  value={slider}
                                  onChange={(e) => setslider(e.currentTarget.value)}
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <p className="p-lg mb-0">N 60,000</p>
                                <svg
                                  width="21"
                                  height="11"
                                  viewBox="0 0 21 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8.411 2.724C7.8375 2.15085 7.10695 1.7606 6.31169 1.6026C5.51644 1.4446 4.69219 1.52593 3.94315 1.83633C3.19412 2.14672 2.55393 2.67222 2.10352 3.34641C1.65312 4.0206 1.41272 4.8132 1.41272 5.624C1.41272 6.4348 1.65312 7.22739 2.10352 7.90158C2.55393 8.57577 3.19412 9.10128 3.94315 9.41167C4.69219 9.72206 5.51644 9.8034 6.31169 9.6454C7.10695 9.4874 7.8375 9.09715 8.411 8.524C9.3205 7.69852 10.0742 6.71623 10.636 5.624C11.1978 4.53177 11.9515 3.54947 12.861 2.724C13.4341 2.15 14.1647 1.75891 14.9602 1.60022C15.7557 1.44153 16.5803 1.52237 17.3299 1.83251C18.0794 2.14265 18.7201 2.66816 19.1709 3.34253C19.6217 4.0169 19.8623 4.80984 19.8623 5.621C19.8623 6.43216 19.6217 7.22509 19.1709 7.89946C18.7201 8.57384 18.0794 9.09934 17.3299 9.40948C16.5803 9.71962 15.7557 9.80046 14.9602 9.64178C14.1647 9.48309 13.4341 9.092 12.861 8.518C11.9515 7.69252 11.1978 6.71022 10.636 5.618C10.0736 4.52791 9.31993 3.54769 8.411 2.724Z"
                                    stroke="#1B1D22"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                              <p className="p-lg l-blue-text mt-3 mb-1">Down Payment (Contribution)</p>
                              <div className="input-group input-tagg mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={downpayment}
                                  onChange={(e) => setdownpayment(e.currentTarget.value)}
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text" id="basic-addon2">
                                    20%
                                  </span>
                                </div>
                              </div>
                              <p className="p-lg l-blue-text mt-3 mb-1">Length of Loan (Tenor)</p>
                              <div className="input-group w-50 input-tagg mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={lengthloan}
                                  onChange={(e) => setlengthloan(e.currentTarget.value)}
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text" id="basic-addon2">
                                    Years
                                  </span>
                                </div>
                              </div>
                              <p className="p-lg l-blue-text mt-3 mb-1">Rate</p>
                              <p className="p-lg mt-1 mb-1">FMBN rate is 6%. PMB rates are between 18 to 24%</p>
                              <div className="input-group w-50 mt-2 input-tagg mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  value={lengthrate}
                                  onChange={(e) => setlengthrate(e.currentTarget.value)}
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text" id="basic-addon2">
                                    %
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mt-4">
                              <div className="mortgage-calc-card pb-5 p-sm-4 py-4 px-3">
                                <p className="p-lg mt-3">Monthly Repayment</p>
                                <h2 className="bold pb-5">N 80,000.00</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                    <img src="/images/sell-house.png" alt="" className="img-fluid w-100" />
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
