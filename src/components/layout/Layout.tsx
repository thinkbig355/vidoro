import React, { PropsWithChildren } from 'react';
import Navigation from './Navigation'; // Import Navigation

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative">
      <Navigation /> {/* Use Navigation component here */}
      <main>{children}</main>
      {/* Add the script here, inside the main div */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function() {
              var lazyloadImages = document.querySelectorAll("img.lazyload");

              lazyloadImages.forEach(image => {
                // Decode the base64 data-src and set it as the src
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