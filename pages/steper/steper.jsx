import React from "react";
import Nav from "../../components/header";
import Footer from "../../components/footer";
import Stepper from "react-stepper-horizontal";
import { Modal } from "react-bootstrap";
import { FaSearch, FaTrashAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useDropzone } from "react-dropzone";

const Steps = ({ step, handleFor }) => {
  const [optionSelect, setoptionSelect] = React.useState(0);
  const onDrop = React.useCallback((acceptedFiles) => {
    alert();
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [showModal, setShow] = React.useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const [select, setSelect] = React.useState(0);

  switch (step) {
    case 11: {
      return (
        <>
          <section className="create-account">
            <div className="container-fluid px-2">
              <div className="row">
                <div className="col-xl-11 mx-auto">
                  <div className="row">
                    <div className="col-12 text-center step1-top">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-center w-100">
                          {" "}
                          <p className="p-lg mt-lg-5 mt-4 fb-500">
                            Do you have a house in mind already or you want to select from our listed homes?
                          </p>
                        </div>
                        <div>
                          <p className="p-lg mt-lg-5 mt-4 fb-500">
                            1<span>/2</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 mx-auto">
                      <div className="row mt-4 text-center">
                        <div className="col-lg-6 mt-3">
                          <img src="/images/house-1.png" alt="" className="img-fluid" />
                          <label
                            onClick={() => setoptionSelect(1)}
                            className={`${
                              optionSelect == 1 ? "house-select-active" : ""
                            } p-3 rounded border mt-3 house-select  d-block`}
                          >
                            I’ve selected a Homer homes
                          </label>
                          <input
                            checked={optionSelect == 1 ? true : false}
                            onClick={() => setoptionSelect(1)}
                            type="radio"
                            id="house-1"
                            className="d-block mx-auto mt-3"
                            name="house-select"
                          />
                        </div>
                        <div className="col-lg-6 mt-3">
                          <img src="/images/house-2.png" alt="" className="img-fluid" />
                          <label
                            onClick={() => setoptionSelect(2)}
                            className={`
                            ${optionSelect == 2 ? "house-select-active" : ""}
                          p-3 rounded border mt-3 house-select d-block`}
                          >
                            I’ll enter details of the home I want
                          </label>
                          <input
                            checked={optionSelect == 2 ? true : false}
                            onClick={() => setoptionSelect(2)}
                            type="radio"
                            id="house-2"
                            className="d-block mx-auto mt-3"
                            name="house-select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-4 justify-content-center">
                    <button className="site-btn mt-3 grey-btn px-5 py-3 mr-4">Back</button>
                    <a onClick={() => handleFor(12)} className="site-btn mt-3 pilled-btn px-5 py-3">
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    case 12: {
      return (
        <section className="create-account step-two">
          <div className="container-fluid px-2">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <div className="row">
                  <div className="col-12 text-center step1-top">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex justify-content-center w-100">
                        {" "}
                        <p className="p-lg mt-lg-5 mt-4 fb-500">Please enter the details of the Home</p>
                      </div>
                      <div>
                        <p className="p-lg mt-lg-5 mt-4 fb-500">
                          2<span>/2</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-9 col-lg-11 mx-auto">
                    <div className="row mt-4">
                      <div className="col-12">
                        <label for="" className="bold">
                          What is the house address?
                        </label>
                        <input type="text" placeholder="Address" />
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          State
                        </label>
                        <select name="" id="" className="bold">
                          <option value="">Lagos</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          LGA
                        </label>
                        <select name="" id="" className="bold">
                          <option value="">Lagos</option>
                        </select>
                      </div>
                      <div className="col-12 mt-4">
                        <label for="" className="bold">
                          What kind of documentation does it have?
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-sm-flex align-items-center justify-content-between">
                          <div className="mt-3">
                            <input type="checkbox" name="" id="" />
                            <label for="" className="ml-3">
                              C of O
                            </label>
                          </div>
                          <div className="mt-3">
                            <label for="uploadfile" className="upload-file">
                              <i className="fas fa-upload mr-2"></i>Upload Copy Now
                            </label>
                            <div className="d-none">
                              <input type="file" name="" id="uploadfile" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <input type="checkbox" name="" id="" />
                        <label for="" className="ml-3">
                          R of O
                        </label>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <input type="checkbox" name="" id="" />
                        <label for="" className="ml-3">
                          Allocation Letter
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-sm-flex align-items-center justify-content-between">
                          <div className="mt-3">
                            <input type="checkbox" name="" id="" />
                            <label for="" className="ml-3">
                              Global C of O
                            </label>
                          </div>
                          <div className="mt-3 d-flex align-items-center">
                            <img src="/images/pdf.png" alt="" className="img-fluid" />
                            <label for="" className="ml-2 mb-0">
                              Document.pdf
                            </label>
                            <button className="delete-btn ml-2">
                              <FaTrashAlt />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <input type="checkbox" name="" id="" />
                        <label for="" className="ml-3">
                          Approved Building Plan
                        </label>
                      </div>
                      <div className="col-12 mt-4">
                        <label for="" className="bold">
                          Estimated Cost of the House?
                        </label>
                        <div className="position-relative">
                          <div className="left-icon">
                            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M7.76953 9H5.72461L2.70117 3.69141V9H0.644531V0.46875H2.70117L5.71875 5.77734V0.46875H7.76953V9Z"
                                fill="#153A84"
                              />
                            </svg>
                          </div>
                          <input type="text" className="pl-4" placeholder="Add Cost" />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          What Percentage Will You Like To Contribute
                        </label>
                        <select name="" id="" className="bold">
                          <option value="">20%</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          For How Long Will You Like to Pay
                        </label>
                        <select name="" id="" className="bold">
                          <option value="">14 years</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-center">
                  <a onClick={() => handleFor(12)} className="site-btn mt-3 grey-btn px-5 py-3 mr-4">
                    Back
                  </a>
                  <a onClick={() => handleFor(21)} className="site-btn mt-3 pilled-btn px-5 py-3">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    case 21: {
      return (
        <section className="create-account step-two">
          <div className="container-fluid px-2">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <div className="row">
                  <div className="col-12 text-center step1-top">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex justify-content-center w-100">
                        {" "}
                        <p className="p-lg mt-lg-5 bold mt-4">Here we want to know more about you</p>
                      </div>
                      <div>
                        <p className="p-lg mt-lg-5 mt-4 fb-500">
                          1<span>/3</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-9 col-lg-11 mx-auto">
                    <div className="row">
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          Surname
                        </label>
                        <input type="text" placeholder="Surname" />
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          First Name
                        </label>
                        <input type="text" placeholder="First Name" />
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          DOB
                        </label>
                        <div className="row">
                          <div className="col-3">
                            <select name="" id="" className="bold">
                              <option value="">DD</option>
                            </select>
                          </div>
                          <div className="col-3">
                            <select name="" id="" className="bold">
                              <option value="">MM</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select name="" id="" className="bold">
                              <option value="">YYYY</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          Gender
                        </label>
                        <select name="" id="" className="bold">
                          <option value="">Male</option>
                          <option value="">Female</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          Your NIN
                        </label>
                        <input type="text" placeholder="Enter your NIN" />
                      </div>
                      <div className="col-lg-6 mt-4">
                        <label for="" className="bold">
                          Your BVN
                        </label>
                        <input type="text" placeholder="Enter your BVN" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-center">
                  <a onClick={() => handleFor(12)} className="site-btn mt-3 grey-btn px-5 py-3 mr-4">
                    Back
                  </a>
                  <a onClick={() => handleFor(22)} className="site-btn mt-3 pilled-btn px-5 py-3">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    case 22: {
      return (
        <section className="create-account step-two">
          <div className="container-fluid px-2">
            <div className="row">
              <div className="col-12 text-center step1-top">
                <div className="d-flex justify-content-between">
                  <div className="w-100">
                    <img src="/images/message-icon.png" alt="" className="img-fluid" />
                    <p className="p-lg mt-3 bold">Confirmation Required</p>
                    <p className="p-sm mt-4 grey-text">Please confirm your NIN By Entering the OTP Send to </p>
                    <p className="p-sm mt-3 bold l-blue-text">0808*****877</p>
                  </div>
                  <div>
                    <p className="p-lg mt-lg-5 mt-4 fb-500">
                      2<span>/3</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-11 mx-auto">
                <div className="row">
                  <div className="col-xl-6 col-lg-8 text-center mx-auto">
                    <div className="row">
                      <div className="col-12"></div>
                      <div className="col">
                        <input type="number" name="" value="1" className="py-4" id="" />
                      </div>
                      <div className="col">
                        <input type="number" name="" value="1" className="py-4" id="" />
                      </div>
                      <div className="col">
                        <input type="number" name="" value="1" className="py-4" id="" />
                      </div>
                      <div className="col">
                        <input type="number" name="" value="1" className="py-4" id="" />
                      </div>
                      <div className="col">
                        <input type="number" name="" value="1" className="py-4" id="" />
                      </div>
                      <div className="col">
                        <input type="number" name="" value="1" className="py-4" id="" />
                      </div>
                      <div className="col-12 mt-4">
                        <p className="mt-0">
                          Don't Receive the OTP?{" "}
                          <a href="#_" className="bold blue-text">
                            Resend
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-center">
                  <a onClick={() => handleFor(21)} className="site-btn mt-3 grey-btn px-5 py-3 mr-4">
                    Back
                  </a>
                  <a onClick={() => handleFor(23)} className="site-btn mt-3 pilled-btn px-5 py-3">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    case 23: {
      return (
        <section className="create-account step-two">
          <div className="container-fluid px-2">
            <div className="row">
              <div className="col-xl-11 mx-auto">
                <div className="row">
                  <div className="col-12 text-center step1-top">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex justify-content-center w-100">
                        {" "}
                        <p className="p-lg mt-lg-5 mt-4 fb-500">Here we want to know more about you</p>
                      </div>
                      <div>
                        <p className="p-lg mt-lg-5 mt-4 fb-500">
                          3<span>/3</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-9 col-lg-11 mx-auto">
                    <div className="row">
                      <div className="col-12 mt-4">
                        <label for="" className="bold">
                          Enter Your Residential Address
                        </label>
                        <input type="text" placeholder="Address" />
                      </div>
                      <div className="col-12 mt-4">
                        <label {...getRootProps()} for="uploadutility" className="upload-file">
                          <i className="fas fa-upload mr-2"></i>Upload Utility Bill Copy Now
                        </label>
                        <div className="d-none">
                          <input {...getRootProps()} type="file" name="" id="uploadutility" />
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label for="" className="bold">
                          Country
                        </label>
                        <select name="" id="" className="bold">
                          <option value="">Nigeria</option>
                        </select>
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label for="" className="bold">
                          State or Province
                        </label>
                        <input type="text" placeholder="State or Province" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex mt-4 justify-content-center">
                  <a onClick={() => handleFor(22)} className="site-btn mt-3 grey-btn px-5 py-3 mr-4">
                    Back
                  </a>
                  <a onClick={() => handleFor(31)} className="site-btn mt-3 pilled-btn px-5 py-3">
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    case 31: {
      return (
        <>
          <section className="create-account step-two">
            <div className="container-fluid px-2">
              <div className="row">
                <div className="col-xl-11 mx-auto">
                  <div className="row">
                    <div className="col-12 text-center">
                      <p className="p-lg mt-lg-5 bold mt-4">Now We Need A Few Financial Details</p>
                    </div>
                    <div className="col-xl-9 col-lg-11 mx-auto">
                      <div className="row">
                        <div className="col-12 mt-4">
                          <label for="" className="bold">
                            How Much Do You Earn Monthly?
                          </label>
                          <input type="text" placeholder="Monthly Income" />
                          <p className="p-sm l-blue-text mb-0 mt-2 text-italic"> Why we need this?</p>
                        </div>
                        <div className="col-12 mt-4">
                          <label for="" className="bold">
                            What Bank Do You Use for Your Primary Earning?
                          </label>
                          <input type="text" placeholder="Enter Bank Name" />
                        </div>
                        <div className="col-12 mt-4">
                          <label for="" className="bold">
                            Your Bank Account Number
                          </label>
                          <input type="text" placeholder="IBAN or  Account number" />
                        </div>
                        <div className="col-lg-6 mt-4">
                          <div className="green-tag w-100 h-auto py-3" onClick={() => handleShow()}>
                            <svg
                              className="mr-3"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3 21H21"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M3 10H21"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M5 6L12 3L19 6"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4 10V21"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M20 10V21"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8 14V17"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M12 14V17"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16 14V17"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            Link Your Bank Account
                          </div>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <a href="#_" className="l-blue-text mt-3 d-inline-block">
                            Is this safe?
                          </a>
                        </div>
                        <div className="col-12 mt-3">
                          <label for="" className="bold">
                            OR
                          </label>
                        </div>

                        <div className="col-12 mt-4">
                          <label
                            {...getRootProps()}
                            for="uploadstatement"
                            className="upload-file d-block w-100 py-3 text-center"
                          >
                            <i className="fas fa-upload mr-2"></i>Upload you six months bank statement with Account Seal
                          </label>
                          <div className="d-none">
                            <input {...getInputProps()} type="file" name="" id="uploadstatement" />
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <div className="d-sm-flex align-items-center justify-content-between">
                            <label for="" className="bold">
                              You can skip and upload document later
                            </label>
                            <a href="#_" className="l-blue-text text-italic">
                              See Sample
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-4 justify-content-center">
                    <a onClick={() => handleFor(23)} className="site-btn mt-3 grey-btn px-5 py-3 mr-4">
                      Back
                    </a>
                    <a onClick={() => handleFor(41)} className="site-btn mt-3 pilled-btn px-5 py-3">
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Modal size="lg" show={showModal} onHide={handleClose}>
            <div className="" role="document">
              <div className="admin-modal">
                <div className="text-center">
                  <p className="p-lg bold">Link Bank</p>
                  <div className="position-relative">
                    <div className="left-icon">
                      <FaSearch />
                    </div>
                    <input type="search" name="" className="modal-input rounded-pill px-5" placeholder="Search" id="" />
                  </div>
                  <div className="d-flex align-items-center mt-4 justify-content-between">
                    <label for="" className="bold">
                      <img src="/images/bank-1.png" alt="" className="img-fluid mr-3" />
                      Access Bank
                    </label>
                    <input type="radio" name="" id="" />
                  </div>
                  <div className="d-flex align-items-center mt-4 justify-content-between">
                    <label for="" className="bold">
                      <img src="/images/bank-2.png" alt="" className="img-fluid mr-3" />
                      Fidelity Bank Plc
                    </label>
                    <input type="radio" name="" id="" />
                  </div>
                  <div className="d-flex align-items-center mt-4 justify-content-between">
                    <label for="" className="bold">
                      <img src="/images/bank-3.png" alt="" className="img-fluid mr-3" />
                      First City Monument Bank Limited.
                    </label>
                    <input type="radio" name="" id="" />
                  </div>
                  <div className="d-flex align-items-center mt-4 justify-content-between">
                    <label for="" className="bold">
                      <img src="/images/bank-4.png" alt="" className="img-fluid mr-3" />
                      First Bank of Nigeria Limited.
                    </label>
                    <input type="radio" name="" id="" />
                  </div>
                  <div className="d-flex justify-content-end mt-5">
                    <a
                      href="#_"
                      className="site-btn border-btn rounded-pill mr-3 mt-3 px-5 py-2"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Close
                    </a>
                    <a
                      href="#_"
                      className="site-btn rounded-pill mt-3 px-4 py-2"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Select &amp; Continue
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </>
      );
    }

    case 41: {
      return (
        <>
          <section className="create-account step-two">
            <div className="container-fluid px-2">
              <div className="row">
                <div className="col-xl-11 mx-auto">
                  <div className="row">
                    <div className="col-12 text-center step1-top">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-center w-100">
                          <p className="p-lg mt-lg-5 bold mt-4">Let’s Find Out a Bit About Your Job</p>
                        </div>
                        <div>
                          <p className="p-lg mt-lg-5 mt-4 fb-500">
                            1<span>/2</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-9 col-lg-11 mx-auto">
                      <div className="row">
                        <div className="col-12 mt-4">
                          <label for="" className="bold">
                            What’s is the name of the company where you work?
                          </label>
                          <input type="text" placeholder="Company Name" />
                        </div>
                        <div className="col-12 mt-4">
                          <label for="" className="bold">
                            What’s the company’s address
                          </label>
                          <input type="text" placeholder="Address" />
                        </div>
                        <div className="col-lg-6 mt-4">
                          <label for="" className="bold">
                            Country
                          </label>
                          <select name="" id="">
                            <option value="">Nigeria</option>
                          </select>
                        </div>
                        <div className="col-lg-6 mt-4">
                          <label for="" className="bold">
                            How long have you worked here
                          </label>
                          <div className="position-relative">
                            <input type="text" placeholder="Write Here" className="pl-3 pr-5" />
                            <div className="right-icon">
                              <span className="bold l-blue-text">Years</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <label for="" className="bold mt-4">
                            What’s the type of employment?
                          </label>
                          <div className="row">
                            <div className="col-md-6">
                              <input type="radio" checked={select == 0 ? true : false} onClick={() => setSelect(0)} />
                              <label for="" className="bold ml-3">
                                Paid Employment
                              </label>
                            </div>
                            <div className="col-md-6">
                              <input type="radio" checked={select == 1 ? true : false} onClick={() => setSelect(1)} />
                              <label for="" className="bold ml-3">
                                Self Employment
                              </label>
                            </div>
                          </div>
                        </div>
                        {select == 0 ? (
                          <>
                            <div className="col-12 mt-4">
                              <label for="" className="bold">
                                What’s your job title or role?
                              </label>
                              <input type="text" placeholder="Role" />
                            </div>
                            <div className="col-12 mt-4">
                              <label
                                {...getRootProps()}
                                for="uploadletter"
                                className="upload-file d-block w-100 py-3 text-center"
                              >
                                <i className="fas fa-upload mr-2"></i>Upload Letter of Employment or Promotion Letter
                              </label>
                              <div className="d-none">
                                <input {...getRootProps()} type="file" name="" id="uploadletter" />
                              </div>
                            </div>
                            <div className="col-12 mt-4">
                              <label
                                {...getRootProps()}
                                for="uploadslip"
                                className="upload-file d-block w-100 py-3 text-center"
                              >
                                <i className="fas fa-upload mr-2"></i>Upload Last Payslip
                              </label>
                              <div className="d-none">
                                <input {...getRootProps()} type="file" name="" id="uploadslip" />
                              </div>
                            </div>
                            <div className="col-12 mt-4 text-center">
                              <p className="bold">You Can Skip and Upload Documents Later</p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-12 mt-4">
                              <label for="" className="bold">
                                What’s your job title or role?
                              </label>
                              <input type="text" placeholder="Role" />
                            </div>
                            <div className="col-12 mt-4">
                              <label for="uploadcac" className="upload-file d-block w-100 py-3 text-center">
                                <i className="fas fa-upload mr-2"></i>Upload CAC documentation for your Company
                              </label>
                              <div className="d-none">
                                <input type="file" name="" id="uploadcac" />
                              </div>
                            </div>
                            <div className="col-12 mt-4 text-center">
                              <p className="bold">You Can Skip and Upload Documents Later</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-4 justify-content-center">
                    <a onClick={() => handleFor(31)} className="site-btn mt-3 grey-btn px-5 py-3 mr-4">
                      Back
                    </a>
                    <a onClick={() => handleFor(42)} className="site-btn mt-3 pilled-btn px-5 py-3">
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }

    case 42: {
      return (
        <>
          <section className="create-account step-two">
            <div className="container-fluid px-2">
              <div className="row">
                <div className="col-xl-11 mx-auto">
                  <div className="row">
                    <div className="col-12 text-center step1-top">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-center w-100">
                          <p className="p-lg mt-lg-5 bold mt-4">
                            We Need You To Upload Copies of Your Documents To Conclude
                          </p>
                        </div>
                        <div>
                          <p className="p-lg mt-lg-5 mt-4 fb-500">
                            2<span>/2</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-11 mx-auto">
                      <div className="table-responsive mt-3 px-3">
                        <table className="table shopping-cart-wrap m-0">
                          <thead className="border-0 w-100">
                            <tr className="w-100">
                              <th>Documents</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>ID</td>
                              <td>
                                <p className="green-tag">Uploaded</p>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img src="/images/pdf.png" alt="" className="img-fluid" />
                                  <label for="" className="ml-2 mb-0">
                                    Document.pdf
                                  </label>
                                  <button className="delete-btn ml-2">
                                    <FaTrashAlt />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>ID</td>
                              <td>
                                <p className="green-tag red-tag">Not Uploaded</p>
                              </td>
                              <td>
                                <label
                                  {...getRootProps()}
                                  for="uploadcac"
                                  className="upload-file px-4 py-2 text-center"
                                >
                                  <i className="fas fa-upload mr-2"></i>Upload
                                </label>
                                <div className="d-none">
                                  <input {...getRootProps()} type="file" name="" id="uploadcac" />
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="text-center mt-4">
                        <a className="site-btn mt-3 pilled-btn px-sm-5 px-4 py-3">Done, We Wait For an Offer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }

    default: {
      return <></>;
    }
  }
};
export default () => {
  const [step, setStep] = React.useState(11);
  const handleFor = (page) => {
    setStep(page);
  };
  const stepperCount = () => {
    if (step == 11 || step == 12) {
      return 0;
    } else if (step == 21 || step == 22 || step == 23) {
      return 1;
    } else if (step == 31) {
      return 2;
    }
    if (step == 41 || step == 42) {
      return 3;
    }
  };
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  });

  return (
    <div className="body-bg">
      <div className="inner-page">
        <Nav />
        <div className="stepper">
          <Stepper
            steps={
              !isMobile
                ? [
                    { title: "Home" },
                    { title: "Your Personal Details" },
                    { title: "Financial Details" },
                    { title: "Employment Details" },
                    { title: "Offers" },
                    { title: "Loan Process / Disbursement" },
                  ]
                : [{ title: "" }, { title: "" }, { title: "" }, { title: "" }, { title: "" }, { title: "" }]
            }
            size={35}
            circleFontSize={12}
            titleFontSize={12}
            completeBarColor="#C8C8C8"
            lineMarginOffset={20}
            activeStep={stepperCount()}
          />
        </div>
        <Steps handleFor={handleFor} step={step} />
      </div>
    </div>
  );
};
