document.addEventListener('DOMContentLoaded', () => {
  // 页面加载动画
  setTimeout(() => {
    const loader = document.getElementById('loader');
    const root = document.getElementById('root');
    
    // 淡出加载器
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
    
    // 显示主内容
    if (root) {
      root.classList.add('visible');
    }
  }, 2000);
  
  // 为页面添加鼠标阴影效果
  const createMouseShadow = () => {
    // 创建鼠标阴影元素
    const shadow = document.createElement('div');
    shadow.className = 'mouse-shadow';
    document.body.appendChild(shadow);
    
    // 设置阴影样式
    shadow.style.cssText = `
      position: fixed;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgba(0, 47, 167, 0.2);
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      transition: transform 0.2s ease, width 0.3s ease, height 0.3s ease;
      box-shadow: 0 0 15px rgba(0, 47, 167, 0.3);
      mix-blend-mode: screen;
      filter: blur(2px);
    `;
    
    // 添加鼠标移动监听器
    document.addEventListener('mousemove', (e) => {
      shadow.style.left = `${e.clientX}px`;
      shadow.style.top = `${e.clientY}px`;
    });
    
    // 在链接和按钮上时放大阴影
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        shadow.style.width = '40px';
        shadow.style.height = '40px';
        shadow.style.background = 'rgba(0, 47, 167, 0.3)';
      });
      
      el.addEventListener('mouseleave', () => {
        shadow.style.width = '30px';
        shadow.style.height = '30px';
        shadow.style.background = 'rgba(0, 47, 167, 0.2)';
      });
    });
  };
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    /* 新增鼠标阴影样式 */
    .mouse-shadow {
      pointer-events: none;
      transition: transform 0.2s ease;
    }
    
    /* 在深色模式下调整阴影颜色 */
    [data-theme="light"] .mouse-shadow {
      background: rgba(0, 47, 167, 0.2) !important;
      box-shadow: 0 0 15px rgba(0, 47, 167, 0.3) !important;
    }
    
    @keyframes ripple {
      to {
        width: 100px;
        height: 100px;
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // 初始化鼠标阴影效果
  createMouseShadow();
  
  // 字体加载检测
  const checkFonts = () => {
    console.log('正在检查字体加载状态...');
    
    // 使用FontFace API检测字体加载
    if ('FontFace' in window) {
      const maple = new FontFace('Maple Mono NF', 'url(%PUBLIC_URL%/fonts/MapleMonoNF-Regular.woff2)');
      const jetbrains = new FontFace('JetBrains Mono NF', 'url(%PUBLIC_URL%/fonts/JetBrainsMonoNF-Regular.woff2)');
      
      Promise.all([
        maple.load().catch(err => console.error('Maple Mono NF 字体加载失败:', err)),
        jetbrains.load().catch(err => console.error('JetBrains Mono NF 字体加载失败:', err))
      ]).then(fonts => {
        fonts.forEach(font => {
          if (font) {
            document.fonts.add(font);
            console.log(`字体 ${font.family} 已成功加载`);
          }
        });
        
        // 强制应用字体
        document.body.style.fontFamily = "'Maple Mono NF', 'JetBrains Mono NF', sans-serif";
        document.body.style.opacity = '0.99';
        setTimeout(() => {
          document.body.style.opacity = '1';
        }, 50);
      });
    } else {
      // 兼容旧浏览器的字体检测
      const testElement = document.createElement('span');
      testElement.style.fontFamily = 'sans-serif';
      testElement.style.position = 'absolute';
      testElement.style.visibility = 'hidden';
      testElement.textContent = 'Font Test';
      document.body.appendChild(testElement);
      
      const sansWidth = testElement.offsetWidth;
      testElement.style.fontFamily = "'Maple Mono NF', sans-serif";
      
      setTimeout(() => {
        const mapleWidth = testElement.offsetWidth;
        if (mapleWidth !== sansWidth) {
          console.log('Maple Mono NF 字体已加载');
        } else {
          console.warn('Maple Mono NF 字体可能未加载');
        }
        document.body.removeChild(testElement);
      }, 100);
    }
  };
  
  // 延迟检查字体，确保有足够时间加载
  setTimeout(checkFonts, 500);
});

// 页面加载完成后隐藏加载动画
window.addEventListener('load', function() {
  // 等待额外的500ms，确保React应用已经渲染
  setTimeout(function() {
    const loader = document.getElementById('loader');
    
    // 先添加透明过渡类
    loader.classList.add('loader-hidden');
    
    // 等待过渡完成后移除元素
    setTimeout(function() {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 500);
  }, 500);
});

// 如果加载时间过长，显示友好提示
setTimeout(function() {
  const loadingText = document.querySelector('.loading-text');
  if (loadingText && document.getElementById('loader')) {
    loadingText.textContent = '';
  }
}, 3000);
