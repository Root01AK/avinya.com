import React from 'react';

// 1. Metadata for SEO (Replaces the <head> section)
export const metadata = {
  title: "Avinya Constructions | Our Projects",
  description: "Avinya Construction Management - Delivering top-tier construction solutions with innovation and precision.",
  keywords: "construction, architecture, project management, Avinya",
  viewport: "width=device-width, initial-scale=1.0",
};

// 2. Data Array for Projects (Replacing repetitive HTML blocks)
const projectsData = [
  {
    id: 1,
    imageSrc: "./clients/Sangam.png", // Path should be inside your 'public' folder
    title: "Sangam Indian Cuisine, Leander",
    description: "New built. 4600SF restaurant and bar with 180 seating capacity. Scope of work: Pre-construction management, design management, procurement, general contracting.",
    link: "https://www.instagram.com/avinya.constructions?igsh=MXMzOG8zOG5taWZ6Zg%3D%3D&utm_source=qr"
  },
  {
    id: 2,
    imageSrc: "/img/icecream.jpg",
    title: "The Alley, Dripping Springs",
    description: "Renovation of second gen restaurant. Scope of work: general contractor.",
    link: "https://www.instagram.com/avinya.constructions?igsh=MXMzOG8zOG5taWZ6Zg%3D%3D&utm_source=qr"
  },
  {
    id: 5,
    imageSrc: "/img/logo/AV NYA.jpg",
    title: "Bakery, Leander.",
    description: "New built 4200SF. restaurant and bar with 170 seating capacity. Scope of work: Pre-construction management, design management, procurement, general contracting.",
    link: "https://www.instagram.com/avinya.constructions?igsh=MXMzOG8zOG5taWZ6Zg%3D%3D&utm_source=qr"
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Breadcrumbs starts */}
      <section className="breadcrumb-hero">
        <p className="breadcrumb-subtitle">
          Built with precision & trust
        </p>

        <h1 className="breadcrumb-title">
          LATEST <span>PROJECTS</span>
        </h1>
      </section>
      {/* Breadcrumbs ends */}

            {/* Project Description starts */}
      <div className="interior-card">
      <div className="card-content">
        <div className="highlight">★</div>
        <h2 className="main-title">
          We specialize in turning interior
          <br />
          <span className="highlight-line">design dreams into Reality</span>
        </h2>
        <p className="description">
          With bespoke designs tailored to your unique style and needs. From concept development to project management, we transform every space into a masterpiece of form and function.
        </p>
        <button className="explore-button">EXPLORE MORE →</button>
      </div>
    </div>
      {/* Project Description Ends*/}

      {/* Latest projects starts */}
      <div className="container mt-5">
        <h1 className="text-center font-weight-bold ongopro-heading title mb-5">EXPLORE ON-GOING PROJECTS</h1>
        
        <div className="row mt-4">
          {projectsData.map((project) => (
            <div key={project.id} className="col-lg-6 col-md-6 col-sm-12 mb-4 wow animate__animated animate__bounceInUp" data-wow-duration="3s">
              <div className="project-container">
                <img src={project.imageSrc} alt={`${project.title}-pic`} className="project-img" />
                
                <a href={project.link} target="_blank" rel="noreferrer">
                  <p className="connect-insta">
                    <i className="fa fa-instagram"></i> Click Here for Current Updates.
                  </p>
                </a>
                
                {/* Static external arrow image */}
                <img src="https://themexriver.com/wp/builta/wp-content/uploads/2024/05/p-1-arrow.webp" alt="Avinya Constructions" className="project-loading-img" />
                
                <div className="project-content">
                  <h3>0{project.id}</h3>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Latest projects ends */}
    </>
  );
}