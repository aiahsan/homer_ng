import React from 'react';
import Nav from '../../componentes/auth/nav';
import TopBar from '../../componentes/auth/topbar';
import Sidebar from '../../componentes/auth/sidebar';
export default () => {
  return (
    <div className='l-blue-bg'>
      <Sidebar />
      <div class='main-body'>
        <Nav />
        <TopBar />
        <section class='bg-white text-center p-4 pb-5 m-4'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-12 py-5'>
                <img src='/images/not-found.png' alt='' class='img-fluid' />
                <p class='mt-3 p-sm'>No Listings Yet. Add One Now</p>
              </div>
              <div class='mt-5 col-12'>
                <a href='#_' class='site-btn rounded-pill px-5 py-2'>
                  Create New Listing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
