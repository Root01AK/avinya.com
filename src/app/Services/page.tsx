
import { Metadata } from "next";
import React from "react";
import CTA from "../components/CTA";
import ServiceHeroCard from "../components/ServiceHeroCard";
// Next.js Metadata Configuration
// This replaces the <head> section from your HTML
export const metadata: Metadata = {
  title: "Avinya Constructions | Our Services",
  description: "Avinya Construction Management - Delivering top-tier construction solutions with innovation and precision.",
  keywords: "construction, architecture, project management, Avinya",
};

export default function ServicesPage() {
  return (
    <>

      {/* Service Hero Card starts */}
      <ServiceHeroCard />
      {/* Service Hero Card ends */}  
      {/* Services starts */}
      <section className="services">
        <div className="container col-lg-12">
          <div className="row">
            
            {/* Service Box 1: Pre-Construction */}
            <div className="col-md-4">
              <div className="service-box">
                <img 
                  src="./services/preconstruction.jpg" 
                  className="wow animate__animated animate__fadeInDown" 
                  data-wow-duration="3s" 
                  alt="Pre-Construction Services" 
                />
                <h2 className="service-text text-center">Pre-Construction Services</h2>
                <ul className="service-item">
                  <li>Site Evaluation.</li>
                  <li>Feasibility Studies.</li>
                  <li>Budgeting and Estimating.</li>
                </ul>
              </div>
            </div>

            {/* Service Box 2: Design and Engineering */}
            <div className="col-md-4">
              <div className="service-box">
                <img
                  src="./services/design.jpg"
                  className="wow animate__animated animate__fadeInDown"
                  data-wow-duration="3s"
                  alt="Design and Engineering"
                />
                <h2 className="service-text text-center">Design and Engineering</h2>
                <ul className="service-item">
                  <li>Architectural Design.</li>
                  <li>Interior Design.</li>
                  <li>Structural Engineering.</li>
                  <li>MEP Engineering.</li>
                </ul>
              </div>
            </div>

            {/* Service Box 3: Construction Management */}
            <div className="col-md-4">
              <div className="service-box">
                <img
                  src="./services/construction.jpg"
                  className="wow animate__animated animate__fadeInDown"
                  data-wow-duration="3s"
                  alt="Construction Management"
                />
                <h2 className="service-text text-center">Construction Management</h2>
                <ul className="service-item">
                  <li>Project Management.</li>
                  <li>Quality Control.</li>
                  <li>Safety Management.</li>
                </ul>
              </div>
            </div>

            {/* Service Box 4: General Contracting */}
            <div className="col-md-4">
              <div className="service-box">
                <img
                  src="./services/general.jpg"
                  className="wow animate__animated animate__fadeInDown"
                  data-wow-duration="3s"
                  alt="General Contracting"
                />
                <h2 className="service-text text-center">General Contracting</h2>
                <ul className="service-item">
                  <li>Construction Execution.</li>
                  <li>Subcontractor Management.</li>
                  <li>Material Procurement.</li>
                </ul>
              </div>
            </div>

            {/* Service Box 5: Post-Construction */}
            <div className="col-md-4">
              <div className="service-box">
                <img
                  src="./services/post.jpg"
                  className="wow animate__animated animate__fadeInDown"
                  data-wow-duration="3s"
                  alt="Post-Construction Services"
                />
                <h2 className="service-text text-center">Post-Construction Services</h2>
                <ul className="service-item">
                  <li>Project Closeout.</li>
                  <li>Warranty Services.</li>
                  <li>Maintenance Services.</li>
                </ul>
              </div>
            </div>

            {/* Service Box 6: Specialty Services */}
            <div className="col-md-4">
              <div className="service-box">
                <img
                  src="./services/speciality.jpg"
                  className="wow animate__animated animate__fadeInDown"
                  data-wow-duration="3s"
                  alt="Specialty Services"
                />
                <h2 className="service-text text-center">Specialty Services</h2>
                <ul className="service-item">
                  <li>Sustainable Building.</li>
                  <li>Renovations and Remodeling.</li>
                  <li>Tenant Improvements.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <CTA />

        </div>
      </section>
    </>
  );
}