// EducationAccordion.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EducationAccordion.css"; // Import your custom CSS file

const EducationAccordion = () => {
  return (
    <div className="accordion" id="educationAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="educationHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#educationCollapse"
            aria-expanded="false"
            aria-controls="educationCollapse"
          >
            EDUCATION
          </button>
        </h2>
        <div
          id="educationCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="educationHeading"
        >
          <div className="accordion-body">
            <div className="accordion-item custom-card">
              <h2 className="accordion-header" id="matricHeading">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#matricCollapse"
                  aria-expanded="false"
                  aria-controls="matricCollapse"
                >
                  Matric
                </button>
              </h2>
              <div
                id="matricCollapse"
                className="accordion-collapse collapse"
                aria-labelledby="matricHeading"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <strong>Subject:</strong> BIO
                    </li>
                    <li>
                      <strong>Grade:</strong> A1
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item custom-card">
              <h2 className="accordion-header" id="intermediateHeading">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#intermediateCollapse"
                  aria-expanded="false"
                  aria-controls="intermediateCollapse"
                >
                  Intermediate
                </button>
              </h2>
              <div
                id="intermediateCollapse"
                className="accordion-collapse collapse"
                aria-labelledby="intermediateHeading"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <strong>Subject:</strong> Pre-Engineering
                    </li>
                    <li>
                      <strong>Grade:</strong> A
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item custom-card">
              <h2 className="accordion-header" id="undergraduateHeading">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#undergraduateCollapse"
                  aria-expanded="false"
                  aria-controls="undergraduateCollapse"
                >
                  Undergraduate
                </button>
              </h2>
              <div
                id="undergraduateCollapse"
                className="accordion-collapse collapse"
                aria-labelledby="undergraduateHeading"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <strong>Subject:</strong> Software engineering
                    </li>
                    <li>
                      <strong>CGPA:</strong> 3.65
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAccordion;
