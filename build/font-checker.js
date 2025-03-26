/**
 * 字体检测助手 - 验证字体是否正确加载
 */
(function() {
  function checkFontAvailability() {
    // 检查字体文件是否存在
    const checkFontFile = (url) => {
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`字体文件不存在或无法访问: ${url}`);
          }
          return `字体文件存在: ${url}`;
        })
        .catch(error => error.message);
    };

    // 列出需要检查的字体文件
    const fontFiles = [
      '/fonts/MapleMonoNF-Regular.woff2',
      '/fonts/MapleMonoNF-Regular.woff',
      '/fonts/JetBrainsMonoNF-Regular.woff2',
      '/fonts/JetBrainsMonoNF-Regular.woff'
    ];

    // 检查所有字体文件
    Promise.all(fontFiles.map(file => checkFontFile(file)))
      .then(results => {
        console.group('字体文件检查结果:');
        results.forEach(result => console.log(result));
        console.groupEnd();
      });

    // 检查字体是否已应用
    const fontTest = (fontFamily) => {
      const testEl = document.createElement('span');
      testEl.style.position = 'absolute';
      testEl.style.visibility = 'hidden';
      testEl.style.fontFamily = 'sans-serif';
      testEl.textContent = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      document.body.appendChild(testEl);
      
      const sansWidth = testEl.offsetWidth;
      testEl.style.fontFamily = `${fontFamily}, sans-serif`;
      
      setTimeout(() => {
        const testedWidth = testEl.offsetWidth;
        const result = testedWidth !== sansWidth ? 
          `字体 "${fontFamily}" 已成功应用` : 
          `警告: 字体 "${fontFamily}" 未应用或不可用`;
        console.log(result);
        document.body.removeChild(testEl);
      }, 50);
    };

    // 测试指定字体
    setTimeout(() => {
      console.group('字体应用检查结果:');
      fontTest('Maple Mono NF');
      fontTest('JetBrains Mono NF');
      console.groupEnd();
    }, 1000);
  }

  // 在页面加载后执行检查
  window.addEventListener('load', checkFontAvailability);
})();
