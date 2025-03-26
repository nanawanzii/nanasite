import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 添加全局样式对象
const globalStyles = `
  * {
    font-family: 'Maple Mono NF', 'JetBrains Mono NF', monospace;
  }
  
  body, html {
    font-family: 'Maple Mono NF', 'JetBrains Mono NF', monospace; 
  }
`;

// 创建并添加全局样式元素
const styleElement = document.createElement('style');
styleElement.innerHTML = globalStyles;
document.head.appendChild(styleElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 确保React组件加载后应用字体
window.addEventListener('load', () => {
  setTimeout(() => {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      element.style.fontFamily = "'Maple Mono NF', 'JetBrains Mono NF', monospace";
    });
  }, 100);
});
