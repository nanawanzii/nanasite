/**
 * 强制应用字体到所有元素
 */
(function() {
  // 页面加载后强制应用字体
  document.addEventListener('DOMContentLoaded', function() {
    // 创建并应用强制字体样式
    const style = document.createElement('style');
    style.textContent = `
      * {
        font-family: 'Maple Mono NF', 'JetBrains Mono NF', monospace !important;
      }
    `;
    document.head.appendChild(style);
    
    // 遍历所有元素并强制应用字体
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
      element.style.fontFamily = "'Maple Mono NF', 'JetBrains Mono NF', monospace";
    });
    
    console.log('已强制应用Maple Mono NF字体到所有元素');
  });
  
  // 在内容加载后重新应用一次，确保React组件也应用字体
  window.addEventListener('load', function() {
    setTimeout(() => {
      const allElements = document.querySelectorAll('*');
      allElements.forEach(element => {
        element.style.fontFamily = "'Maple Mono NF', 'JetBrains Mono NF', monospace";
      });
      console.log('页面加载完成后再次应用Maple Mono NF字体');
    }, 1000);
  });
})();
