import React from 'react';
import { motion } from 'framer-motion';

export default function PageWrapper({ children }){
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45 }}
      className="flex-grow"
    >
      {children}
    </motion.main>
  );
}
