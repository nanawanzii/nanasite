import React from 'react';
import '../styles/Pages.css';
import PageFooter from '../components/PageFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faTools, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const Publications = () => {
  return (
    <div className="page-container">
      <div className="under-construction-container">
        <div className="construction-header">
          <FontAwesomeIcon icon={faHardHat} className="construction-icon" />
          <h2 className="construction-title">Under Construction</h2>
          <FontAwesomeIcon icon={faTools} className="construction-icon" />
        </div>
        
        <div className="construction-content">
          <p className="construction-message">
            <FontAwesomeIcon icon={faExclamationTriangle} className="warning-icon" />
            This page is currently being built and will be available soon.
          </p>
          <p className="construction-submessage">
            Please check back later for updates on this page.
          </p>
          
          <div className="construction-animation">
            <div className="loader"></div>
          </div>
        </div>
      </div>
      
      <PageFooter />
    </div>
  );
};

export default Publications;
