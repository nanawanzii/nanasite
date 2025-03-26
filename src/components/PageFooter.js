import React from 'react';
import '../styles/Pages.css';

const PageFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-info-small">
        <p>
          <i className="fas fa-envelope"></i> <a href="mailto:zi.wang.prince@hotmail.com">zi.wang.prince@hotmail.com</a>
        </p>
        <p>
          <a href="https://github.com/nanawanzii" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a> | 
          <a href="https://x.com/ZiWang23925033" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
