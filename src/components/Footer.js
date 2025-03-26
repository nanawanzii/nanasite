import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaTwitter, FaGoogleScholar, FaResearchgate } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  padding: 50px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #3498db;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #34495e;
  color: #fff;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3498db;
    transform: translateY(-3px);
  }
  
  svg {
    font-size: 1.3rem;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
  
  a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #3498db;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #34495e;
  color: #bdc3c7;
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterSection id="contact">
      <Container>
        <FooterContent>
          <FooterColumn>
            <FooterTitle>关于我</FooterTitle>
            <p>王子，政治学副教授，研究领域为政治传播、数字媒体与公民参与。致力于理解数字时代政治传播的新特点及其社会影响。</p>
            <SocialLinks>
              <SocialLink href="https://twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://scholar.google.com" target="_blank" aria-label="Google Scholar">
                <FaGoogleScholar />
              </SocialLink>
              <SocialLink href="https://www.researchgate.net" target="_blank" aria-label="ResearchGate">
                <FaResearchgate />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>联系方式</FooterTitle>
            <ContactInfo>
              <FaEnvelope />
              <p>ziwang@pku.edu.cn</p>
            </ContactInfo>
            <ContactInfo>
              <FaPhone />
              <p>+86 10 6275 xxxx</p>
            </ContactInfo>
            <p>北京大学新闻与传播学院<br />北京市海淀区颐和园路5号<br />100871</p>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>快速链接</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#research">研究成果</a></FooterLink>
              <FooterLink><a href="#projects">研究项目</a></FooterLink>
              <FooterLink><a href="#experience">学术经历</a></FooterLink>
              <FooterLink><a href="#skills">专业技能</a></FooterLink>
              <FooterLink><a href="#awards">奖项与荣誉</a></FooterLink>
              <FooterLink><a href="#references">同行评价</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          &copy; {currentYear} 王子 | 政治传播与数字媒体研究者 | 版权所有
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
