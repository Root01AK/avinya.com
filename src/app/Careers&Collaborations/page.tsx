'use client'; // Required for handling Tabs and Form interactivity

import React, { useState } from "react";

export default function JoinUsPage() {
  // State to handle the Toggle between Collaboration and Careers
  const [activeTab, setActiveTab] = useState('collaboration');

  // State to handle the Success/Notification Toast
  const [showToast, setShowToast] = useState(false);

  // Handler for Tab Switching
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
  };

  // Handler for Form Submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted"); // Replace with API call to Strapi/Backend
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000); // Hide toast after 5 seconds
  };

  return (
    <>
      {/* Breadcrumbs starts */}
      <div className="container-fluid breadcrumbs">
        <div className="row">
          <div className="col-md-12">
            <img src="./breadcrumb/collaboration.jpg" className="breadcrumbs-img" alt="Join Us" />
          </div>
          <div className="breadcrumbs-text text-center col-lg-12">
            <h1 className="bread-title display-4 display-md-3">Join Us</h1>
          </div>
        </div>
      </div>
      {/* Breadcrumbs ends */}

      {/* Toast Notification */}
      {showToast && (
        <div aria-live="polite" aria-atomic="true">
          <div className="toast-container position-fixed top-0 end-0 p-3">
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <strong className="me-auto">Notification</strong>
                <small>Just now</small>
                <button type="button" className="btn-close" onClick={() => setShowToast(false)} aria-label="Close"></button>
              </div>
              <div className="toast-body">
                Thank you! Your submission has been received successfully.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Buttons */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <button 
              className={`toggle-btn ${activeTab === 'collaboration' ? 'active' : ''}`} 
              onClick={() => handleTabSwitch('collaboration')}
            >
              COLLABORATIONS
            </button>
            <button 
              className={`toggle-btn ${activeTab === 'careers' ? 'active' : ''}`} 
              onClick={() => handleTabSwitch('careers')}
            >
              CAREERS
            </button>
          </div>
        </div>
      </div>

      {/* --- Collaborations starts --- */}
      {activeTab === 'collaboration' && (
        <div className="container collaboration mt-5">
          <div className="row col-lg-12">
            <div className="col-md-3">
              <div className="collaboration-info">
                {/* Logo Slides (Preserved for CSS animation) */}
                <div className="collaboration-slide">
                  <img src="./clients/comfortinn.png" alt="Comfort Inn" />
                  <img src="./clients/Sangam.png" alt="Avinya Constructions" />
                  <img src="./clients/hiltoninn.svg" alt="Hilton Inn" />
                  <img src="./clients/Holidayinn.png" alt="Holiday Inn" />
                  <img src="./clients/hyatthouse.jpg" alt="Hyatt House" />
                  <img src="./clients/starbucks.png" alt="Starbucks" />
                  <img src="./clients/ups-logo.svg" alt="UPS" className="ups-img" />
                </div>
                <div className="collaboration-slide">
                  <img src="./clients/comfortinn.png" alt="Comfort Inn" />
                  <img src="./clients/Sangam.png" alt="Avinya Constructions" />
                  <img src="./clients/hiltoninn.svg" alt="Hilton Inn" />
                  <img src="./clients/Holidayinn.png" alt="Holiday Inn" />
                  <img src="./clients/hyatthouse.jpg" alt="Hyatt House" />
                  <img src="./clients/starbucks.png" alt="Starbucks" />
                  <img src="./clients/ups-logo.svg" alt="UPS" className="ups-img" />
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="form-container">
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="form row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" name="Firstname" id="firstName" placeholder="First Name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="text" name="Lastname" className="form-control" id="lastName" placeholder="Last Name" required />
                    </div>
                  </div>
                  <div className="form row">
                    <div className="form-group col-md-6">
                      <input type="email" name="Email" className="form-control" id="email" placeholder="you@yoursite.com" required />
                    </div>
                    <div className="form-group col-md-6">
                      <input type="tel" name="Phone" className="form-control" id="phone" placeholder="Phone" required />
                    </div>
                  </div>
                  <div className="form row">
                    <div className="form-group col-md-6">
                      <input type="text" name="CompanyName" className="form-control" id="companyName" placeholder="Company Name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <select id="industry" name="Industry" className="form-control">
                        <option selected>Select an Trade</option>
                        <option>Electricals</option>
                        <option>Plumbing</option>
                        <option>HVAC</option>
                        <option>Fire and safety</option>
                        <option>Kitchen hood and fire suppression</option>
                        <option>Interior finishes- painting</option>
                        <option>Interior finishes- wall covering.</option>
                        <option>Interior finishes - tile , carpet and LVT</option>
                        <option>Custom millwork and cabinets</option>
                        <option>Construction cleaning</option>
                        <option>Networking and low voltage</option>
                        <option>Kitchen appliances</option>
                        <option>Miscellaneous</option>
                      </select>
                    </div>
                  </div>
                  <div className="row form-section">
                    <div className="col-md-12">
                      <textarea className="form-control" name="Comments" rows={7} placeholder="Leave Your Comments Here..." required></textarea>
                    </div>
                  </div>
                  <div className="form-group form-check mt-3 col-md-10 justify-content-center">
                    <input type="checkbox" className="form-check-input" id="emailOptIn" />
                    <label className="form-check-label" htmlFor="emailOptIn">Yes, I would like to receive news and offers from Avinya Construction & Management via email.</label>
                  </div>
                  <div className="form-group form-check mt-3 col-md-10">
                    <input type="checkbox" className="form-check-input" id="phoneOptIn" />
                    <label className="form-check-label" htmlFor="phoneOptIn">Yes, I agree to receive phone calls from Avinya Construction & Management.</label>
                  </div>
                  <div className="row form-section justify-content-center mb-5">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="collaboration-readBtn">
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* --- Collaborations ends --- */}

      {/* --- Careers starts --- */}
      {activeTab === 'careers' && (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title text-center">Join Our Team</h3>
              <p className="career-p text-center">At <span>Avinya Construction Management</span>, we welcome driven and talented individuals to grow with us. Explore our exciting career opportunities and apply for a role that matches your passion and expertise.</p>
              
              {/* Job Card 1 */}
              <div className="col-md-12 mt-4 mb-4">
                <div className="job-card">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-2 text-center">
                      <img src="./logo.png" alt="job-icon" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Construction Administrator</h5>
                        <div className="tags">
                          <span className="badge bg-light text-dark">On-site</span>
                          <span className="badge bg-light text-dark">Project Co-ordination</span>
                          <span className="badge bg-light text-dark">project management tasks</span>
                          <span className="badge bg-light text-dark">Handling submittals</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 text-center">
                      {/* 
                         Note: 'data-bs-toggle' relies on Bootstrap JS being loaded.
                         If you do not have the JS bundle loaded, these modals will not open automatically.
                      */}
                      <button type="button" className="btn career-btn btn-primary" data-bs-toggle="modal" data-bs-target="#jobModal1">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div className="col-md-12 mt-5">
                <div className="job-card">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-2 text-center">
                      <img src="./logo.png" alt="job-icon" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Construction Superintendent</h5>
                        <div className="tags">
                          <span className="badge bg-light text-dark">On-site</span>
                          <span className="badge bg-light text-dark">Coordinating subcontractors</span>
                          <span className="badge bg-light text-dark">Managing project timelines</span>
                          <span className="badge bg-light text-dark">Adherence to safety regulations</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 text-center">
                      <button type="button" className="btn career-btn btn-primary" data-bs-toggle="modal" data-bs-target="#jobModal2">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <h5 className="general-enquiry text-center">
                  For general inquiries, please send your resume to <a href="mailto:careers@avinyaconstructions.com">careers@avinyaconstructions.com.</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* --- Careers ends --- */}

      {/* --- Modals --- */}
      {/* Modal for Job 1 */}
      <div className="modal fade" id="jobModal1" tabIndex={-1} aria-labelledby="jobModalLabel1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobModalLabel1">Construction Administrator</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6>Company Description:</h6>
              <p>Avinya Construction Management Inc. is a full-service construction management company located in Round Rock, TX...</p>
              <h6>Role Description:</h6>
              <p>This is a full-time on-site role for a Construction Administrator at Avinya Construction Management...</p>
              <h6>Qualifications:</h6>
              <ul>
                <li>Project Coordination and Project Management skills</li>
                <li>Construction Administration Services knowledge</li>
                <li>Strong communication skills</li>
                <li>Experience in handling submittals</li>
                <li>Ability to coordinate with various stakeholders</li>
                <li>Attention to detail and organizational skills</li>
                <li>Knowledge of construction processes and terminology</li>
                <li>Previous experience in construction administration or related field</li>
              </ul>
              <a href="mailto:careers@avinyaconstructions.com" className="btn btn-success">Apply Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Job 2 */}
      <div className="modal fade" id="jobModal2" tabIndex={-1} aria-labelledby="jobModalLabel2" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobModalLabel2">Construction Superintendent</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6>Company Description:</h6>
              <p>Avinya Construction Management Inc. is a full-service construction management company in Round Rock, TX...</p>
              <h6>Role Description:</h6>
              <p>This is a full-time on-site role as a Site Superintendent at Avinya Construction Management...</p>
              <h6>Qualifications:</h6>
              <ul>
                <li>Experience in construction project management, on-site supervision, and subcontractor coordination.</li>
                <li>Knowledge of safety regulations and best practices in the construction industry.</li>
                <li>Strong organizational and time management skills.</li>
                <li>Effective communication and leadership abilities.</li>
                <li>Ability to problem-solve and make decisions under pressure.</li>
                <li>Proficiency in construction management software and MS Office suite.</li>
                <li>Relevant certification or 5 year experience in Construction Management or a related field.</li>
              </ul>
              <a href="mailto:careers@avinyaconstructions.com" className="btn btn-success">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}