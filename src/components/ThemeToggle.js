import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// 改进的主题切换按钮设计
const ToggleContainer = styled.button`
  position: relative;
  margin: 0; // 移除边距，在导航栏中已有合适的定位
  background: ${props => props.theme === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(245, 245, 245, 0.7)'};
  color: ${props => props.theme === 'dark' ? '#fff' : '#000'};
  border: 1.5px solid ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)'};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  width: 80px;
  height: 40px;
  transition: all 0.25s ease;
  box-shadow: ${props => props.theme === 'dark' 
    ? '0 0 8px rgba(255, 255, 255, 0.07), inset 0 0 4px rgba(255, 255, 255, 0.05)' 
    : '0 0 8px rgba(0, 0, 0, 0.07), inset 0 0 4px rgba(0, 0, 0, 0.05)'};
  backdrop-filter: blur(4px);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme === 'dark' 
      ? '0 5px 15px rgba(255, 255, 255, 0.15), inset 0 0 5px rgba(255, 255, 255, 0.1)' 
      : '0 5px 15px rgba(0, 0, 0, 0.15), inset 0 0 5px rgba(0, 0, 0, 0.1)'};
  }
  
  &:focus {
    outline: none;
  }
`;

// 滑动背景轨道
const SlideTrack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
`;

// 太阳图标
const SunIcon = styled.div`
  color: #ffd700;
  font-size: 1.2rem;
  z-index: 2;
  opacity: ${({ theme }) => (theme === 'light' ? '1' : '0.5')};
  transform: ${({ theme }) => (theme === 'light' ? 'scale(1.2)' : 'scale(1)')};
  transition: all 0.3s ease;
  text-shadow: ${({ theme }) => (theme === 'light' ? '0 0 10px rgba(255, 215, 0, 0.8)' : 'none')};
  
  &:hover {
    transform: rotate(45deg) scale(1.2);
  }
`;

// 月亮图标
const MoonIcon = styled.div`
  color: #c0c0ff;
  font-size: 1.2rem;
  z-index: 2;
  opacity: ${({ theme }) => (theme === 'dark' ? '1' : '0.5')};
  transform: ${({ theme }) => (theme === 'dark' ? 'scale(1.2)' : 'scale(1)')};
  transition: all 0.3s ease;
  text-shadow: ${({ theme }) => (theme === 'dark' ? '0 0 10px rgba(192, 192, 255, 0.8)' : 'none')};
  
  &:hover {
    transform: rotate(-45deg) scale(1.2);
  }
`;

// 滑动指示器 - 改为透明带光效，不再遮挡图标
const SlideIndicator = styled.div`
  position: absolute;
  width: 28px; // 减小宽度，留出更多边距
  height: 22px; // 减小高度，避免接近边缘
  border-radius: 20px;
  background: ${props => props.theme === 'dark' 
    ? 'linear-gradient(to right, #2a2a7a, #4a4ad4)' 
    : 'linear-gradient(to right, #f9d423, #ff4e50)'};
  opacity: 0.7;
  left: ${props => props.theme === 'dark' ? '7px' : '43px'}; // 调整位置使其更居中
  top: 50%; // 垂直居中
  transform: translateY(-50%); // 垂直居中
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  z-index: 1;
  box-shadow: 0 0 3px ${props => props.theme === 'dark' ? 'rgba(72, 72, 212, 0.4)' : 'rgba(255, 217, 0, 0.4)'};
  filter: blur(0.3px);
  overflow: hidden;
`;

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');
  
  // 初始化主题
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <ToggleContainer onClick={toggleTheme} theme={theme} aria-label={`Change to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      <SlideTrack>
        <MoonIcon theme={theme}>
          <i className="fas fa-moon"></i>
        </MoonIcon>
        <SunIcon theme={theme}>
          <i className="fas fa-sun"></i>
        </SunIcon>
        <SlideIndicator theme={theme} />
      </SlideTrack>
    </ToggleContainer>
  );
};

export default ThemeToggle;
