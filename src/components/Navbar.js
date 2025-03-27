import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

// 使用styled-components创建响应式的导航栏 - 添加毛玻璃效果
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme === 'dark' ? 
    'rgba(18, 18, 18, 0.7)' : // 降低不透明度以增强毛玻璃效果
    'rgba(248, 249, 250, 0.7)'};
  box-shadow: 0 4px 20px ${props => props.theme === 'dark' ? 
    'rgba(0, 0, 0, 0.3)' : 
    'rgba(0, 0, 0, 0.15)'};
  backdrop-filter: blur(10px); // 增加模糊效果
  -webkit-backdrop-filter: blur(10px); // Safari 兼容
  border-bottom: 1px solid ${props => props.theme === 'dark' ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(0, 0, 0, 0.05)'};
  transition: all 0.3s ease;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid ${props => props.theme === 'dark' ? 
    'rgba(255, 255, 255, 0.07)' : // 降低不透明度使分隔线更微妙
    'rgba(0, 0, 0, 0.05)'};
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  
  a {
    color: ${props => props.theme === 'dark' ? '#ffffff' : '#212529'};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme === 'dark' ? '#90f' : '#1a73e8'};
    }
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: ${props => props.theme === 'dark' ? 
    'rgba(10, 10, 15, 0.3)' : // 添加轻微的背景色以提高对比度
    'rgba(240, 240, 245, 0.3)'};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;
  
  a {
    color: ${props => props.theme === 'dark' ? '#e0e0e0' : '#424242'};
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    padding: 5px 0;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background: ${props => props.theme === 'dark' ? 
        'linear-gradient(90deg, #4a4ad4, #90f)' : 
        'linear-gradient(90deg, #1a73e8, #34a853)'};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${props => props.theme === 'dark' ? '#ffffff' : '#000000'};
      transform: translateY(-2px);
      
      &:after {
        width: 100%;
      }
      
      i {
        transform: translateY(-2px) scale(1.1);
      }
    }
    
    i {
      margin-right: 8px;
      transition: transform 0.3s ease;
    }
  }
`;

const NavToggle = styled.div`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  
  // 监听主题变化
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // 创建一个观察器来监听data-theme属性的变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.body.getAttribute('data-theme'));
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavContainer theme={theme}>
      <TopBar theme={theme}>
        <Logo theme={theme}>
          <Link to="/">ZI WANG</Link>
          <span 
            className="navbar-art"
            style={{
              fontSize: '0.65rem', // 稍微增大字体
              fontStyle: 'italic',
              marginLeft: '10px',
              opacity: theme === 'dark' ? 0.6 : 0, // 保持透明度为60%
              color: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 'normal',
              verticalAlign: 'middle',
              transform: 'translateY(2px)',
              fontFamily: '"Sriracha", "Brush Script MT", cursive', // 使用手写风格字体
              position: 'relative',
              display: 'inline-block',
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            Ceci n'est pas un site web
          </span>
        </Logo>
        <ThemeToggle />
      </TopBar>
      
      <BottomBar theme={theme}>
        <NavLinks className={`${menuOpen ? 'active' : ''}`} theme={theme}>
          <Link to="/" onClick={closeMenu}>
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/cv" onClick={closeMenu}>
            <i className="fas fa-file-alt"></i> Curriculum Vitae
          </Link>
          <Link to="/clickit" onClick={closeMenu}>
            <i className="fas fa-flask"></i> Click It!
          </Link>
        </NavLinks>
        
        <NavToggle onClick={toggleMenu} className="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
        </NavToggle>
      </BottomBar>
    </NavContainer>
  );
};

export default Navbar;