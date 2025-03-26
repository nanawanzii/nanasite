/**
 * 强制应用字体到文本元素，但排除图标字体
 */
(function() {
  // 动态加载字体文件
  const loadFonts = () => {
    // 添加Maple Mono NF字体
    const mapleMonoStyle = document.createElement('style');
    mapleMonoStyle.textContent = `
      @font-face {
        font-family: 'Maple Mono NF';
        src: url('/fonts/MapleMonoNF-Regular.woff2') format('woff2'),
             url('/fonts/MapleMonoNF-Regular.woff') format('woff'),
             url('/fonts/MapleMonoNF-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'JetBrains Mono NF';
        src: url('/fonts/JetBrainsMonoNF-Regular.woff2') format('woff2'),
             url('/fonts/JetBrainsMonoNF-Regular.woff') format('woff'),
             url('/fonts/JetBrainsMonoNF-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `;
    document.head.appendChild(mapleMonoStyle);
    
    // 添加后备字体加载
    const fallbackFonts = document.createElement('link');
    fallbackFonts.rel = 'stylesheet';
    fallbackFonts.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Roboto+Mono&display=swap';
    document.head.appendChild(fallbackFonts);
  };

  // 页面加载后强制应用字体
  document.addEventListener('DOMContentLoaded', function() {
    // 先加载字体文件
    loadFonts();
    
    // 创建并应用强制字体样式，但明确排除图标元素
    const style = document.createElement('style');
    style.textContent = `
      /* 应用字体到文本元素 */
      body, p, h1, h2, h3, h4, h5, h6, div:not([class*="fa"]):not([class*="icon"]), 
      span:not([class*="fa"]):not([class*="icon"]), button, input, select, textarea, label, a {
        font-family: 'Maple Mono NF', 'JetBrains Mono NF', 'JetBrains Mono', 'Roboto Mono', 'Courier New', monospace !important;
      }
      
      /* 确保图标字体正常显示 */
      i.fa, i.fas, i.far, i.fab, i.fal, i.fad,
      span.fa, span.fas, span.far, span.fab, span.fal, span.fad,
      i[class*="fa-"], span[class*="fa-"], *[class*="fa-icon"], 
      svg[class*="fa-"], *[class*="icon"] {
        font-family: "Font Awesome 6 Free", "Font Awesome 6 Brands", "FontAwesome", sans-serif !important;
      }
      
      /* 移除当前页面上所有元素的内联 font-family 样式 */
      [style*="font-family"] {
        font-family: inherit !important;
      }
    `;
    document.head.appendChild(style);
    
    // 添加Font Awesome字体链接(如果尚未添加)
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const fontAwesomeLink = document.createElement('link');
      fontAwesomeLink.rel = 'stylesheet';
      fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      fontAwesomeLink.integrity = 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==';
      fontAwesomeLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontAwesomeLink);
    }
    
    // 清除已经设置的内联font-family样式
    const clearInlineFontStyles = () => {
      document.querySelectorAll('*[style*="font-family"]').forEach(element => {
        // 检查是否为图标元素
        if (element.classList.toString().includes('fa') || 
            element.tagName.toLowerCase() === 'i' || 
            element.classList.toString().includes('icon')) {
          // 对于图标元素，只移除内联样式，让CSS规则生效
          element.style.removeProperty('font-family');
        } else {
          // 对于文本元素，也移除内联样式，让CSS规则生效
          element.style.removeProperty('font-family');
        }
      });
    };
    
    // 执行清除
    clearInlineFontStyles();
    
    // 监听DOM变化，对新添加的元素应用处理
    const observer = new MutationObserver((mutations) => {
      let needsUpdate = false;
      
      // 检查是否有新增元素或样式变化
      mutations.forEach(mutation => {
        if (mutation.type === 'childList' || 
            (mutation.type === 'attributes' && mutation.attributeName === 'style')) {
          needsUpdate = true;
        }
      });
      
      if (needsUpdate) {
        clearInlineFontStyles();
      }
    });
    
    // 配置观察器
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style']
    });
  });
  
  // 在页面完全加载后再次确保样式正确
  window.addEventListener('load', function() {
    setTimeout(() => {
      // 重新执行清除内联样式
      document.querySelectorAll('*[style*="font-family"]').forEach(element => {
        element.style.removeProperty('font-family');
      });
    }, 1000);
  });
})();
