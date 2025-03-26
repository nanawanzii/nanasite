import React, { useEffect } from 'react';

// 高阶组件，用于确保页面组件使用正确的字体
const withFontEnforcer = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      // 组件挂载时应用字体
      const applyFonts = () => {
        const pageElements = document.querySelector('.page-container')?.querySelectorAll('*');
        if (pageElements) {
          pageElements.forEach(element => {
            element.style.fontFamily = "'Maple Mono NF', 'JetBrains Mono NF', monospace";
          });
        }
      };
      
      // 应用字体
      applyFonts();
      
      // 创建MutationObserver确保动态内容也应用字体
      const observer = new MutationObserver(applyFonts);
      const container = document.querySelector('.page-container');
      
      if (container) {
        observer.observe(container, { 
          childList: true, 
          subtree: true 
        });
      }
      
      // 清理函数
      return () => observer.disconnect();
    }, []);
    
    return <WrappedComponent {...props} />;
  };
};

export default withFontEnforcer;
