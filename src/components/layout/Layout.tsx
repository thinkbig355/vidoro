import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import { Footer } from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/login';

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0A0A0F]">
      {!hideNavAndFooter && <Navigation />}

      {/* REMOVED the pt-XX class from this main element */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {!hideNavAndFooter && <Footer />}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() {
              var lazyloadImages = document.querySelectorAll("img.lazyload");
              lazyloadImages.forEach(image => {
                try{
                  const deObscured = atob(image.dataset.src);
                  image.src = deObscured;
                }catch(error){
                  console.error("image de-obscuring error:", error);
                }
              });
            });
          `,
        }}
      />
    </div>
  );
};

export default Layout;