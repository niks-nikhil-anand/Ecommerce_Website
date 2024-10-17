"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div className="bg-black text-white overflow-hidden w-full">
      <motion.div
        className="flex space-x-10 whitespace-nowrap py-2"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: `14`,
          ease: "linear"
        }}
      >
        <p className="text-sm md:text-2xl lg:text-3xl">🔥 Special Offer: 50% Off!</p>
        <p className="text-sm md:text-2xl lg:text-3xl">💥 Limited Time Offer: Buy 1 Get 1 Free!</p>
        <p className="text-sm md:text-2xl lg:text-3xl">✨ Exclusive Offer: Free Shipping!</p>
      </motion.div>
    </div>
  );
};

export default Marquee;
