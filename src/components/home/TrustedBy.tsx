import React from "react";
import styles from './TrustedBy.module.css';

const TrustedBy = () => {
  const logos = [
    "https://yt3.googleusercontent.com/ytc/AIdro_mVZ4AHe826kUXrFWybMD8xewxe0jxek1j2RABjppew-A=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_nN4JNqHsIvck_6leJoMUWw3PQzNSRXL97ugjAn6_TU7mA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_mDEsuYNLn6bo4gIiJEUwyu7BS6pxbyludi-60YjuCxMhY=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_kKGaEKaafkVObI-xJQPOipJ-B-W2vdD8fuv4oNEW7d894=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/jnNqrt1hvGxQYm91BO937kiUYw-UP68Lvmuo78vguXPCE8y7Xzp0DzBd0JSmaenOQ9t6brPNVA=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_nrZfnUxi_DwFSlJyuQvZN-JWkiZHkgwUaZJPhiIu-ZNLI=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/nTK6AFZrpjDHKNIHq0zqjkWCs3jm9ttQBAGOfIui0zlz_gQzeqAIOtQKfzbSUIA0Mu15HBDfCg=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_mRcYhzGr2q4ldpSH3WY6Mdcnzu0MvZAmUWJIPkVLHvYsc=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/Pu4tOoOIwq-MSZ1J1-GQuWbEaDppYESaE9uIMTaTXybQD8xFyRmCawPucKeOVuE4iN385CYn5g=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/SQHMMOa5EnZI4-RZaUi9HUKn5UsBvEidWwGU9dKoFchPBi3foSL_Z63X1bLOwzVpzqL48_diatw=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_k_k_rcU9yzx6bRJU5CMBjkxbrDY3V7zjxaVRSfDXJ7jB0=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/smpvbfd6kga9xo3rTSPe-wZt0VEejfcK9uUcFmZKAkBV8_CJgMBHSBnXn_MHx7_nF8Mul3jJ2Q=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_k3-YG_gFDPrcKP27S3C-XX9WkETUI2f4_hS04-IOZbwl8=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/QQdpkgefEAqn7BxTvqSLkd9UxIioHoy0Kuk_euUkZ3zJ79hoiIJGY702-XhQCX1H4kHpb7TDWfQ=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.googleusercontent.com/ytc/AIdro_lLS0JR3bWJDxw3HCFO45Bd3BRiPstnMavKje_qpvGea-E=s800-c-k-c0x00ffffff-no-rj"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E879F9]">
            Trusted By
          </h2>
          <p className="text-lg text-gray-400">
            Join these amazing content creators
          </p>
        </div>
        
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
          
          <div className={styles.scrollContainer}>
            <div className={styles.scrollWrapper}>
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="logo-item bg-gray-800 rounded-full flex items-center justify-center shadow-md overflow-hidden w-[70px] h-[70px] shrink-0"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;