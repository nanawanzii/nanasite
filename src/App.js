import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Theme.css'; // 引入主题样式
import Home from './pages/Home';
import CV from './pages/CV';
import ClickIt from './pages/clickit';
import Navbar from './components/Navbar'; // 导入统一的Navbar组件

function App() {
  // 初始化主题
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Router>
      <div className="app">
        {/* 使用统一的Navbar组件，已包含ThemeToggle */}
        <Navbar />
        
        {/* 移除旧的header和nav部分 */}
        
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/clickit" element={<ClickIt />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
