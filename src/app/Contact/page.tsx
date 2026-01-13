'use client'; // This directive is required for using useState (Form handling & Toasts)

import React, { useState } from "react";
import Faqs from "../components/Faqs";

export default function ContactPage() {
  // State to handle the Success/Notification Toast
  const [showToast, setShowToast] = useState(false);

  // State to handle Form Submission (Simulation)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents default page reload
    
    // Here you would typically send data to your API (e.g., fetch('/api/contact', ...))
    console.log("Form submitted");

    // Show the success message
    setShowToast(true);
    
    // Optional: Hide toast after 5 seconds
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <>
      {/* Breadcrumbs starts */}
      <div className="container-fluid breadcrumbs">
        <div className="row">
          <div className="col-md-12">
            <img src="./breadcrumb/contactus.jpg" className="breadcrumbs-img" alt="Contact Us" />
          </div>
          <div className="breadcrumbs-text text-center col-lg-12">
            <h1 className="bread-title">Contact us</h1>
          </div>
        </div>
      </div>
      {/* Breadcrumbs ends */}

      {/* Toast Notification (Replaces Django {% if messages %}) */}
      {showToast && (
        <div aria-live="polite" aria-atomic="true">
          <div className="toast-container position-fixed top-0 end-0 p-3">
            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <strong className="me-auto">Notification</strong>
                <small>Just now</small>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowToast(false)} // Close button logic
                  aria-label="Close"
                ></button>
              </div>
              <div className="toast-body">
                Thank you! Your message has been sent successfully.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact us */}
      <div className="contactus">
        <div className="container">
          <div className="contact col-lg-12">
            <div className="row justify-content-center mt-5">
              
              {/* Info Box 1 */}
              <div className="col-md-3 info-box text-center">
                <i className="fas fa-phone"></i>
                <p>Call to ask any question</p>
                <p>+1(512)216 4230</p>
              </div>
              
              {/* Info Box 2 */}
              <div className="col-md-3 info-box text-center">
                <i className="fas fa-envelope"></i>
                <p>Email to get free quote</p>
                <p>avinya@avinyaconstructions.com</p>
              </div>
              
              {/* Info Box 3 */}
              <div className="col-md-3 info-box text-center">
                <i className="fas fa-map-marker-alt"></i>
                <p>Visit our office</p>
                <p>1101 Satellite view, unit 204, round rock, Texas. 78665</p>
              </div>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} autoComplete="off">
              {/* Removed method='POST' and action as we handle via handleSubmit or API routes */}
              
              <div className="row justify-content-center mt-2">
                <div className="col-md-10 contact-forms">
                  
                  <div className="row form-section justify-content-center">
                    <div className="col-md-5 mt-3">
                      <input 
                        type="text" 
                        name="Name" 
                        className="form-control" 
                        autoComplete="off" 
                        placeholder="Your Name" 
                        required
                      />
                    </div>
                    <div className="col-md-5 mt-3">
                      <input 
                        type="tel" 
                        name="Number" 
                        className="form-control" 
                        autoComplete="off" 
                        placeholder="Phone Number" 
                        required
                      />
                    </div>
                  </div>

                  <div className="row form-section justify-content-center">
                    <div className="col-md-10">
                      <input 
                        type="email" 
                        name="Email" 
                        className="form-control" 
                        placeholder="Email Address" 
                        required
                      />
                    </div>
                  </div>

                  <div className="row form-section justify-content-center">
                    <div className="col-md-10">
                      <textarea 
                        className="form-control" 
                        name="Message" 
                        rows={7} 
                        placeholder="Message" 
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="row form-section justify-content-center mb-5">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="contact-readBtn">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Faqs */}
      <Faqs />  
      {/* Map Banner */}
      <div className="banner">
        <div className="container-fluid">
          <div className="banner-map">
            {/* 
              Note on Map: 
              - Removed width="" (was empty) and set it to 100% via style.
              - Changed allowfullscreen to allowFullScreen (CamelCase).
              - Changed referrerpolicy to referrerPolicy (CamelCase).
            */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.4645246815576!2d-97.66791892635743!3d30.56442953777639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d12506b6db0b%3A0x3b6c72dd938d3d80!2s1101%20Satellite%20View%2C%20Round%20Rock%2C%20TX%2078665%2C%20USA!5e0!3m2!1sen!2sin!4v1719742539940!5m2!1sen!2sin" 
              height="450" 
              style={{ border: 0, width: '100%' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}