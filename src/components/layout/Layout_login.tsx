import React from 'react';
import NavigationLogin from './Navigation_login';

const LayoutLogin = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <NavigationLogin />
    <main className="flex-1 ml-64 p-6">{children}</main>
  </div>
);

export default LayoutLogin;