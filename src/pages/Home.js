import React from 'react';
import '../styles/Pages.css';
import PageFooter from '../components/PageFooter';
// 导入FontAwesome组件
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="page-container">
      <section className="profile-section">
        <img 
          src='/IMG_4990.png' 
          alt="王子个人照片" 
          className="profile-image" 
        />
        <div className="profile-content">
          <p>
            Hello, my name is Wang Zi 王子 (/wɑːŋ tsɨ/). Welcome to my personal website. I have been looking for a PhD position or predoctoral position in the field of political science.
          </p>
      
          <p>
            My master thesis focuses on how spatial effects impact street bureaucrats in China.
          </p>

          <p>
            I am interested in authoritarianism studies, political sociology, and political polarization.
          </p>

          <p>
            You can find my CV, research experience, and some other interesting things (perhaps) in this website!
          </p>
          
          <a 
            href="https://www.dropbox.com/preview/Zi%20Wang%20CV.pdf?context=content_suggestions&preview=Zi+Wang+CV.pdf&role=personal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cv-button"
          >
            <FontAwesomeIcon icon={faDownload} className="cv-icon" /> Download CV
          </a>
        </div>
      </section>
      
      {/* 使用共享的Footer组件 */}
      <PageFooter />
    </div>
  );
};

export default Home;