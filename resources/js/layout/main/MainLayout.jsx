import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="main-layout">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      
      <main className="main-content">
        <Navbar 
          onMenuToggle={toggleSidebar}
          sidebarOpen={sidebarOpen}
        />
        
        <div className="content-container">
          {children}
        </div>
      </main>

      {sidebarOpen && (
        <div className="overlay" onClick={closeSidebar}></div>
      )}
    </div>
  );
};

export default MainLayout;
