import React from 'react';
import {Modal} from 'react-bootstrap'
export default ({show,handleClose})=>{
    return <>
      <Modal size="lg"  show={show} onHide={handleClose}>
        
        <Modal.Body className="midaser9-ds">
          <h1>Hurray</h1>
            <p>Your profile is completed! We now know you enough to proceed with an application to get the financing for a new home.</p>
            <p>Do you want to</p>
            <div className="d-flex justify-content-around lnaisdfnd flex-wrap">
                   <a href="/user/profile" className="mt-4 site-btn w-100  ">Continue Application</a>
                   <a  href="/user/profile"  className="mt-4 site-btn border-btn w-100  ">Continue Exploring</a>
               </div>
        </Modal.Body>
         
      </Modal>
</>
}