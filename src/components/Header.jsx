import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';

export default function Header(){
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="max-w-[var(--max-w-site)] mx-auto px-6 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6 text-sm items-center">
          <NavLink to="/" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-slate-700'}>Home</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-slate-700'}>Services</NavLink>
          <NavLink to="/cdeck" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-slate-700'}>C-Deck</NavLink>
          <NavLink to="/pulse" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-slate-700'}>Pulse</NavLink>
          <NavLink to="/careers" className={({isActive})=> isActive ? 'text-brand-600 font-medium' : 'text-slate-700'}>Careers</NavLink>
        </nav>

        <div className="md:hidden">
          <button aria-label="mobile menu" className="p-2 rounded border">☰</button>
        </div>
      </div>
    </header>
  );
}
