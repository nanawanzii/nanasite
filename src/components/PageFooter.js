import React from 'react';
import '../styles/Pages.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBluesky, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const PageFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="contact-info-small">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:zi.wang.prince@hotmail.com">zi.wang.prince@hotmail.com</a>
        </p>
        <p>
          <a href="https://github.com/nanawanzii" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a> | 
          <a href="https://x.com/ZiWang23925033" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} /> X/Twitter
          </a> | 
          <a href="https://bsky.app/profile/ziwang.bsky.social" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBluesky} /> BlueSky
          </a>
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
