import React from 'react';

const Topbar = () => {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-3 topcontact">
              <a className="text-body px-2" href="tel:+15122164230">
                {/* Note: Ensure FontAwesome CSS is loaded in your layout for these icons to show */}
                <i className="fa fa-phone-alt me-2" style={{ color: '#F4BA1A' }}></i>+1(512)216 4230
              </a>
              <a className="text-body px-2" href="mailto:sanjai@avinyaconstructions.com">
                <i className="fa fa-envelope-open me-2" style={{ color: '#F4BA1A' }}></i>avinya@avinyaconstructions.com
              </a>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center me-2 topcontact">
              <a className="text-body px-2" href="/TP/T&C.pdf" target="_blank" rel="noopener noreferrer">
                Terms
              </a>
              <a className="text-body px-2" href="/TP/privacy.pdf" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a 
                className="btn btn-sm-square btn-outline-body me-1" 
                href="https://www.facebook.com/share/hHHivUrN6gxDypFH/?mibextid=LQQJ4d" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                className="btn btn-sm-square btn-outline-body me-1" 
                href="https://www.linkedin.com/in/avinya-construction-management-b21053324/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                className="btn btn-sm-square btn-outline-body me-0" 
                href="https://www.instagram.com/avinya.constructions?igsh=MXMzOG8zOG5taWZ6Zg%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
};

export default Topbar;