import React from "react";
  import ListingCard from "../../components/listingCard";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FaFilter } from "react-icons/fa";
import Main from '../../components/userBar'
export default ()=>{
    const [slider, setslider] = React.useState("50");
    const [downpayment, setdownpayment] = React.useState("N 3,000,000");
    const [lengthloan, setlengthloan] = React.useState("5");
    const [lengthrate, setlengthrate] = React.useState("5");
    return <>
    
<Main>
<div className="main-body">

<section className="listing">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-12">
              <div className="row">
        
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
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      </div>
 </Main>
    </>
}