import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  const logos = [
    "https://yt3.googleusercontent.com/ytc/AIdro_mVZ4AHe826kUXrFWybMD8xewxe0jxek1j2RABjppew-A=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_nN4JNqHsIvck_6leJoMUWw3PQzNSRXL97ugjAn6_TU7mA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_mDEsuYNLn6bo4gIiJEUwyu7BS6pxbyludi-60YjuCxMhY=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_kKGaEKaafkVObI-xJQPOipJ-B-W2vdD8fuv4oNEW7d894=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/jnNqrt1hvGxQYm91BO937kiUYw-UP68Lvmuo78vguXPCE8y7Xzp0DzBd0JSmaenOQ9t6brPNVA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_mVZ4AHe826kUXrFWybMD8xewxe0jxek1j2RABjppew-A=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_nN4JNqHsIvck_6leJoMUWw3PQzNSRXL97ugjAn6_TU7mA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_mDEsuYNLn6bo4gIiJEUwyu7BS6pxbyludi-60YjuCxMhY=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_kKGaEKaafkVObI-xJQPOipJ-B-W2vdD8fuv4oNEW7d894=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/jnNqrt1hvGxQYm91BO937kiUYw-UP68Lvmuo78vguXPCE8y7Xzp0DzBd0JSmaenOQ9t6brPNVA=s800-c-k-c0x00ffffff-no-rj",
  ];

  return (
    <section className="py-20 px-4 bg-black"> {/* Changed background to black */}
      <div className="container mx-auto text-center">
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["0%", `-${100 * (logos.length / (logos.length * 2))}%`],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 rounded-full flex items-center justify-center shadow-md overflow-hidden w-[70px] h-[70px] shrink-0"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            {/* Duplicate logos for seamless looping */}
            {logos.map((logo, index) => (
              <motion.div
                key={`duplicate-${index}`}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 rounded-full flex items-center justify-center shadow-md overflow-hidden w-[70px] h-[70px] shrink-0"
              >
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;