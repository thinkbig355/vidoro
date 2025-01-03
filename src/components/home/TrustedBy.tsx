import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const logos = [
    "https://yt3.ggpht.com/ytc/AIdro_kwW7uBHNuJln3mwjAD39KvwvTbVKtoTONHGwiaAp3Njw=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ATJuCH36wHPiFwumVBm423ouLVGQtq2pkPMOlSCclqqXErazOWyl4n07MRmbFnSJTL5P02Fq=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/ytc/AIdro_kKGaEKaafkVObI-xJQPOipJ-B-W2vdD8fuv4oNEW7d894=s800-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/jnNqrt1hvGxQYm91BO937kiUYw-UP68Lvmuo78vguXPCE8y7Xzp0DzBd0JSmaenOQ9t6brPNVA=s800-c-k-c0x00ffffff-no-rj"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Content Creators</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 10,
                delay: index * 0.1 
              }}
              className="bg-gray-50 rounded-full aspect-square flex items-center justify-center shadow-md overflow-hidden"
            >
              <img 
                 src={logo}
                 alt={`Logo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-5xl font-bold text-red-600 mb-4">
            2000+
          </div>
          <p className="text-xl text-gray-600">Translated Videos</p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;