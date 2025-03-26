import React from 'react';
import '../styles/Pages.css';
import PageFooter from '../components/PageFooter';
// 引入FontAwesome组件和图标
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faFileCode, faSpinner, faBriefcase, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faRProject, faPython } from '@fortawesome/free-brands-svg-icons';
// 暂时注释掉KaTeX相关导入，直到安装完成
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';

const CV = () => {
  return (
    <div className="page-container">
      <h2 className="page-heading">Curriculum Vitae</h2>
      
      <section className="cv-section">
        <h3 className="section-subheading">Education</h3>
        <div className="cv-item">
          <div className="cv-timeline">2021-2024</div>
          <div className="cv-content">
            <h4>Renmin University of China</h4>
            <p>M.A. in Political Science</p>
            <p>GPA: 3.74/4.00</p>
          </div>
        </div>
        <div className="cv-item">
          <div className="cv-timeline">2022-2023</div>
          <div className="cv-content">
            <h4>Vrije Universiteit Brussel </h4>
            <p>M.A. in Digital Media in Europe</p>
            <p>with Distinction</p>
          </div>
        </div>
        <div className="cv-item">
          <div className="cv-timeline">2017-2021</div>
          <div className="cv-content">
            <h4>Xiamen University</h4>
            <p>B.A. in Political Science</p>
            <p>GPA: 3.80/4.00</p>
          </div>
        </div>
      </section>
      

      
      <section className="cv-section ongoing-research">
        <h3 className="section-subheading">
          <FontAwesomeIcon icon={faSpinner} spin className="progress-icon" /> 
          Current Research (Working in Progress)
        </h3>
        <div className="cv-item">
          <div className="cv-timeline progress">Current</div>
          <div className="cv-content">
            <h4>Look Back: How does the Adjustment of Covid Policies Affect the Political Trust?</h4>
            <p>I independently collected an original dataset, including online comments under the post of Li Wenliang (a whistle blower for the pandemic) with more than 1.4 million, covid policies since 2020.07.29, daily confirmed and death cases per day from the commencement, and protests pertinent to covid policy. With analyzing the data, I have been trying to find out how attitudes to the regime and political trust are changed with the adjustment of covid policy in China. With the data I collected, I have made the most of LLM and AI-powered tools to measure and recode the political attitudes, which empower the contribution for the adoption of methods.</p>
          </div>
        </div>
        
        <div className="cv-item">
          <div className="cv-timeline progress">Current</div>
          <div className="cv-content">
            <h4>Domestic Repressions, Protests, and Mega Sports Events in China</h4>
            <p>I have collected conflict data from ACLED and strike data from CLB (China Labour Bulletin) associated with other datasets to explore the causal effects that the focal time and places, like mega sports events, are primary causes to repression and protests in autocratic regimes. I raise a unique theoretical framework to interpret how temporal and spatial pattern affect repression and dissents in China, which when it comes to politically sensitive times (i.e. historical protest events, massive festivals, and national political events), the authority would enhance security to maintain political survival and stability, while protesters would adopt specific strategies to claim themselves.</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h3 className="section-subheading">Research Experience</h3>
        <div className="cv-item">
          <div className="cv-timeline">2021</div>
          <div className="cv-content">
            <h4>Spatial Effects and the Law Enforcement of Traffic Police in China</h4>
            <p>This study examines why traffic police in the same region and department behave differently, focusing on the influence of spatiality and spatial power. Through qualitative methods and data from 59 traffic police in a northern Chinese city, it argues that urban and social spaces significantly shape their law enforcement work.</p>
          </div>
        </div>
        <div className="cv-item">
          <div className="cv-timeline">2018</div>
          <div className="cv-content">
            <h4>New Social Space as a Mobilization Resource: The Collective Action of Taxi Drivers in Xiamen</h4>
            <p>The study explores the "new social space" formed among taxi drivers over their careers. Through interviews with 30 Xiamen drivers and a literature review, it argues this space emerges through professionalization, not marketization, and explores its role in mobilizing collective action, contributing to social movement theory and qualitative research.</p>
          </div>
        </div>
      </section>

      <section className="cv-section">
        <h3 className="section-subheading">
          <FontAwesomeIcon icon={faBriefcase} className="section-icon" /> 
          Professional Experience
        </h3>
        <div className="cv-item">
          <div className="cv-timeline">2022-2023</div>
          <div className="cv-content">
            <h4>Internship, Europe - Asia Center, Brussels</h4>
            <p>I engaged with EU officials, media, and academics, contributing to international cooperation projects. I was responsible for proposing recent journals on the events and ensuring their smooth execution, including The Light of Civilization exhibition in Brussels and Beauty of Harmony – Picturesque Zhejiang 2022.</p>
          </div>
        </div>
      </section>
      
      <section className="cv-section">
        <h3 className="section-subheading">Awards & Honors</h3>
        <div className="cv-item">
          <div className="cv-timeline">2021</div>
          <div className="cv-content">
            <h4> National Scholarship of China, $1200</h4>
          </div>
        </div>
        <div className="cv-item">
          <div className="cv-timeline">2022</div>
          <div className="cv-content">
            <h4>Ministry of Education (China) MA Scholarship, €1250 per month </h4>
            <p></p>
          </div>
        </div>
        <div className="cv-item">
          <div className="cv-timeline">2021-2022</div>
          <div className="cv-content">
            <h4>Academic Second Prize Scholarship, $1373 per year </h4>
            <p></p>
          </div>
        </div>
      </section>

      

      
      <section className="cv-section">
        <h3 className="section-subheading">Skills</h3>
        <ul className="skills-list">
          <li>Research Methods: Qualitative and Quantitative Analysis</li>
          <li className="software-skills">
            Software: 
            <span className="skill-item">
              <FontAwesomeIcon icon={faRProject} title="R" /> R
            </span>
            <span className="skill-item">
              <FontAwesomeIcon icon={faPython} title="Python" /> Python
            </span>
            <span className="skill-item">
              <FontAwesomeIcon icon={faFileCode} title="LaTeX" /> L<sup>A</sup>T<sub>E</sub>X
            </span>
            <span className="skill-item">
              <FontAwesomeIcon icon={faCalculator} title="Julia" /> Julia
            </span>
          </li>
          <li>Languages: Mandarin (Native), English (Fluent)</li>
        </ul>
      </section>
      
      <section className="cv-section references-section">
        <h3 className="section-subheading">
          <FontAwesomeIcon icon={faUserTie} className="section-icon" />
          References
        </h3>
        <div className="references-list">
          <div className="reference-item">
            <h4>Chen Chao</h4>
            <p>Professor, Shanghai Jiao Tong University</p>
            <p><i className="fas fa-envelope"></i> ccsjtu@sjtu.edu.cn</p>
          </div>
          
          <div className="reference-item">
            <h4>Donglin Han</h4>
            <p>Professor, Renmin University of China</p>
            <p><i className="fas fa-envelope"></i> donglin2006@gmail.com</p>
          </div>
          
          <div className="reference-item">
            <h4>Yuyi Zhuang</h4>
            <p>Professor, Xiamen University</p>
            <p><i className="fas fa-envelope"></i> yuyizhuang@foxmail.com</p>
          </div>
        </div>
      </section>
      
      {/* 添加共享的Footer */}
      <PageFooter />
    </div>
  );
};

export default CV;
