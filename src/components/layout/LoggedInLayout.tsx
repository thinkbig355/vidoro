import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation2 from './Navigation2';
import ScrollToTop from './ScrollToTop'; // Assuming you still want this

const LoggedInLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Start expanded

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const mainContentMargin = isSidebarCollapsed ? 'ml-20' : 'ml-64'; // Matches sidebar widths

  return (
    <div className="flex min-h-screen bg-[#0A0A0F]"> {/* Base background */}
      <ScrollToTop />
      <Navigation2
        isCollapsed={isSidebarCollapsed}
        toggleCollapse={toggleSidebarCollapse}
      />
      {/* Main Content Area */}
      <main
        className={`flex-grow transition-margin duration-300 ease-in-out ${mainContentMargin}`}
      >
         {/* You might want a minimal top bar here eventually, or just content */}
        <div className="pt-4 md:pt-6 lg:pt-8 px-4 md:px-6 lg:px-8"> {/* Add padding */}
           <Outlet /> {/* This is where the routed page component will be rendered */}
        </div>
      </main>
    </div>
  );
};

export default LoggedInLayout;