// src/components/InteractiveCard.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function InteractiveCard({ title, text, index, isActive, onActivate, image }) {
  return (
    <div
      onClick={() => onActivate(index)}
      className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${
        isActive
          ? 'bg-gradient-to-br from-red-500 to-rose-600 border-red-600 shadow-2xl scale-105'
          : 'bg-gradient-to-br from-white to-red-50 border-red-200 hover:border-red-400 hover:shadow-xl hover:scale-105'
      }`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      <div className="relative">
        <h4 className={`text-xl font-bold mb-3 transition-colors ${
          isActive ? 'text-white' : 'text-gray-900 group-hover:text-red-600'
        }`}>
          {title}
        </h4>
        
        <p className={`text-sm leading-relaxed mb-4 ${
          isActive ? 'text-red-50' : 'text-gray-600'
        }`}>
          {text}
        </p>
        
        <div className={`flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all ${
          isActive ? 'text-white' : 'text-red-600'
        }`}>
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  );
}