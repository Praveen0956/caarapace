import React from 'react';
export default function Button({children, className='', ...props}){
  return (
    <button {...props} className={`btn-primary btn-spark ${className}`}>
      {children}
    </button>
  );
}
