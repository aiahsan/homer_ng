import React from 'react';
import Main from '../../../components/userBar'
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
              <h3 className="blue-text">My Profile</h3>
            </div>
            <div className="col-lg-8 mt-3">
              <div className="listing-inner d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
                <svg className="mt-2" width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 31.5V28.5C24 26.9087 23.3679 25.3826 22.2426 24.2574C21.1174 23.1321 19.5913 22.5 18 22.5H7.5C5.9087 22.5 4.38258 23.1321 3.25736 24.2574C2.13214 25.3826 1.5 26.9087 1.5 28.5V31.5" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.75 16.5C16.0637 16.5 18.75 13.8137 18.75 10.5C18.75 7.18629 16.0637 4.5 12.75 4.5C9.43629 4.5 6.75 7.18629 6.75 10.5C6.75 13.8137 9.43629 16.5 12.75 16.5Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 12V21" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M34.5 16.5H25.5" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-2">
                  <p className="blue-text mb-0">Personal Details</p>
                  <i><p className="p-xs blue-text mb-0">Status: <span className="red-text">Incomplete</span></p></i>
                </div>
                <i><p className="blue-text mt-2 mb-0">Last Updated: <span className="black-text">Never</span></p></i>
                <div className="d-flex mt-2 align-items-center">
                  <button onClick={()=>location.href="/user/profile/details"} className="transparent-btn circle-btn mr-3">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View
                  </button>
                  <button onClick={()=>location.href="/user/profile/edit"} className="transparent-btn circle-btn">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20H21" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg><br />
                    Edit
                  </button>
                </div>
              </div>
              <div className="listing-inner mt-3 d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
                <svg className="mt-2" width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 1.5V34.5" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25.5 7.5H14.25C12.8576 7.5 11.5223 8.05312 10.5377 9.03769C9.55312 10.0223 9 11.3576 9 12.75C9 14.1424 9.55312 15.4777 10.5377 16.4623C11.5223 17.4469 12.8576 18 14.25 18H21.75C23.1424 18 24.4777 18.5531 25.4623 19.5377C26.4469 20.5223 27 21.8576 27 23.25C27 24.6424 26.4469 25.9777 25.4623 26.9623C24.4777 27.9469 23.1424 28.5 21.75 28.5H9" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-2">
                  <p className="blue-text mb-0">Financial Details</p>
                  <i><p className="p-xs blue-text mb-0">Status: <span className="red-text">Incomplete</span></p></i>
                </div>
                <i><p className="blue-text mt-2 mb-0">Last Updated: <span className="black-text">Never</span></p></i>
                <div className="d-flex mt-2 align-items-center">
                  <button onClick={()=>location.href="/user/profile/financial"} className="transparent-btn circle-btn mr-3">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View
                  </button>
                  <button onClick={()=>location.href="/user/profile/financial"} className="transparent-btn circle-btn">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20H21" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg><br />
                    Edit
                  </button>
                </div>
              </div>
              <div className="listing-inner mt-3 d-flex align-items-center justify-content-between flex-wrap flex-xl-nowrap">
                <svg className="mt-2" width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 10.5H6C4.34315 10.5 3 11.8431 3 13.5V28.5C3 30.1569 4.34315 31.5 6 31.5H30C31.6569 31.5 33 30.1569 33 28.5V13.5C33 11.8431 31.6569 10.5 30 10.5Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 31.5V7.5C24 6.70435 23.6839 5.94129 23.1213 5.37868C22.5587 4.81607 21.7956 4.5 21 4.5H15C14.2044 4.5 13.4413 4.81607 12.8787 5.37868C12.3161 5.94129 12 6.70435 12 7.5V31.5" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-2">
                  <p className="blue-text mb-0">Employment Details</p>
                  <i><p className="p-xs blue-text mb-0">Status: <span className="red-text">Incomplete</span></p></i>
                </div>
                <i><p className="blue-text mt-2 mb-0">Last Updated: <span className="black-text">Never</span></p></i>
                <div className="d-flex mt-2 align-items-center">
                  <button onClick={()=>location.href="/user/profile/employeedetails"} className="transparent-btn circle-btn mr-3">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    View
                  </button>
                  <button onClick={()=>location.href="/user/profile/employeedetails"} className="transparent-btn circle-btn">
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20H21" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z" stroke="#82A3E4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg><br />
                    Edit
                  </button>
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

        </Main>
    </>
}