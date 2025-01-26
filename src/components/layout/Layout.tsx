import React, { PropsWithChildren } from 'react';
import Navigation from './Navigation'; // Import Navigation

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      <Navigation /> {/* Use Navigation component here */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;