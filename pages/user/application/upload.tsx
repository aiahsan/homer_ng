import React from 'react';
import Main from '../../../components/userBar'
import {FaTrash,FaUpload} from 'react-icons/fa'
export default () => {
    return <>

        <Main>
        <div className="main-body">
  <section className="listing">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <h3 className="blue-text medium">Upload Documents</h3>
            </div>
            <div className="col-lg-9 mt-3">
              <div className="listing-inner">
                <div className="row">
                  <div className="col-12 text-center">
                    <p className="mb-0 medium">We Need You To Upload Copies of Your Documents <br /> To Conclude</p>
                  </div>
                  <div className="col-12">
                    <div className="table-responsive mt-3 px-3">
                      <table className="table shopping-cart-wrap m-0">
                        <thead className="border-0 w-100">
                          <tr className="w-100">
                            <th>Documents</th>
                            <th>Status</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              ID
                            </td>
                            <td>
                              <p className="green-tag">Uploaded</p>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <img src="/images/pdf.png" alt="" className="img-fluid" />
                                <label   className="ml-2 mb-0">Document.pdf</label>
                                <button className="delete-btn ml-2">
                                  <FaTrash color="white"/>
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Utility Bill
                            </td>
                            <td>
                              <p className="green-tag red-tag">Not Uploaded</p>
                            </td>
                            <td>
                              <label htmlFor="uploadcac" className="upload-file px-4 py-2 text-center">
                                
                                <i className="fas fa-upload mr-2" ><FaUpload/></i>Upload</label>
                              <div className="d-none">
                                <input type="file"   id="uploadcac" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-12 mt-lg-5 mt-4 text-center">
                    <button className="site-btn rounded grey-btn px-5 py-2" onClick={()=>location.href="offers"}>Apply</button>
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

    

        </Main>
    </>
}