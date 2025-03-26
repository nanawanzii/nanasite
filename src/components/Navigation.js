import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  z-index: 1000;
  padding: 0.5rem 0;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 0.5rem 0;
  }
`;

const NavList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(ScrollLink)`
  display: block;
  padding: 1rem 1.2rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;
  
  &:hover, &.active {
    color: var(--primary-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0.7rem;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
    transform: translateX(-50%);
  }
  
  &:hover::after, &.active::after {
    width: 30px;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: var(--card-bg);
  box-shadow: var(--shadow);
  padding: 5rem 1.5rem 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobileNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const MobileNavItem = styled(motion.li)`
  margin: 0.5rem 0;
  text-align: center;
`;

const MobileNavLink = styled(ScrollLink)`
  display: block;
  padding: 1rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  font-size: 1rem;
  cursor: pointer;
  
  &:hover, &.active {
    color: var(--primary-color);
    background-color: var(--light-accent);
    border-radius: 8px;
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('education');
  
  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  
  const navItems = [
    { id: 'education', label: '教育背景' },
    { id: 'awards', label: '获奖情况' },
    { id: 'research', label: '研究经历' },
    { id: 'projects', label: '在研项目' },
    { id: 'experience', label: '工作经验' },
    { id: 'skills', label: '专业技能' },
    { id: 'references', label: '推荐人' }
  ];
  
  const mobileNavVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };
  
  const mobileItemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <NavContainer>
      <div className="container">
        <NavContent>
          <NavList>
            {navItems.map(item => (
              <NavItem key={item.id}>
                <NavLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  onSetActive={() => setActiveSection(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
          
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
          
          <AnimatePresence>
            {isOpen && (
              <MobileMenu
                variants={mobileNavVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <MobileNavList>
                  {navItems.map(item => (
                    <MobileNavItem
                      key={item.id}
                      variants={mobileItemVariants}
                    >
                      <MobileNavLink
                        to={item.id}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="active"
                        onClick={() => setIsOpen(false)}
                        className={activeSection === item.id ? 'active' : ''}
                      >
                        {item.label}
                      </MobileNavLink>
                    </MobileNavItem>
                  ))}
                </MobileNavList>
              </MobileMenu>
            )}
          </AnimatePresence>
        </NavContent>
      </div>
    </NavContainer>
  );
};

export default Navigation;
