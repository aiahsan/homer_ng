import React from 'react';
import {Modal} from 'react-bootstrap'
export default ({show,handleClose})=>{
    return <>
      <Modal  show={show} onHide={handleClose}>
        
        <Modal.Body className="midaser9-ds">
            <p>You need to complete your profile to apply.</p>
            <div className="d-flex justify-content-around lnaisdfnd flex-wrap">
                   <a href="/user/profile" className="mt-4 site-btn w-100  ">Complete My Profile</a>
                   <a   className="mt-4 site-btn border-btn w-100  ">Explore Available Homes</a>
               </div>
        </Modal.Body>
         
      </Modal>
</>
}