import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PageFooter from '../components/PageFooter';

const Contact = () => {
  return (
    <div className="page-container">
      <h2>Contact</h2>
      
      <div className="contact-info">
        <h3><FontAwesomeIcon icon={faEnvelope} /> Email</h3>
        <p>zi.wang.prince@hotmail.com</p>
        
        <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</h3>
        <p>Beijing, China</p>
        <p>Post Number: 100000</p>
        
        <h3><FontAwesomeIcon icon={faEnvelope} /> Media</h3>
        <p>
          <a href="https://github.com/nanawanzii" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </p>
      </div>
      
      {/* 添加共享的Footer */}
      <PageFooter />
    </div>
  );
};

export default Contact;
