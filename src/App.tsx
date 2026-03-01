import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Your styles
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';


declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Telegram: any;
    }
}



function App() {
  useEffect(() => {
    // Initialize Telegram WebApp once at the root
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand(); // Allow full-screen mode
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/menu" element={<MenuPage />} />
        {/* <Route path="/page2" element={<Page2 />} /> */}
        {/* <Route path="/page3" element={<Page3 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;