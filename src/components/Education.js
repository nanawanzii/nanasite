import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import PageFooter from './PageFooter';

const EducationSection = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--dark-accent);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  }
`;

const EduContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EduCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: var(--transition);
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  }
`;

const EduContent = styled.div`
  padding: 2rem;
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
`;

const Degree = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Year = styled.p`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: var(--light-accent);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const educationData = [
    {
      id: 1,
      school: "布鲁塞尔自由大学",
      degree: "欧洲数字媒体硕士",
      details: "优异成绩毕业",
      year: "2023",
    },
    {
      id: 2,
      school: "中国人民大学",
      degree: "政治学硕士",
      details: "GPA: 3.74/4.00",
      year: "2021-2024",
    },
    {
      id: 3,
      school: "厦门大学",
      degree: "政治学学士",
      details: "GPA: 3.80/4.00",
      year: "2021",
    },
  ];

  return (
    <EducationSection id="education" ref={ref}>
      <div className="container">
        <SectionTitle className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          教育背景
        </SectionTitle>
        
        <EduContainer
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationData.map((edu) => (
            <EduCard className="card" key={edu.id} variants={itemVariants}>
              <EduContent>
                <SchoolName>{edu.school}</SchoolName>
                <Degree>{edu.degree}</Degree>
                <p>{edu.details}</p>
                <Year>{edu.year}</Year>
              </EduContent>
            </EduCard>
          ))}
        </EduContainer>
      </div>
      
      {/* 添加共享的Footer */}
      <PageFooter />
    </EducationSection>
  );
};

export default Education;
