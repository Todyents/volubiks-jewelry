import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="site-header">
      <div className="brand" onClick={() => navigate('/')}>
        <div className="logo-circle">RV</div>
        <div>
          <div className="brand-title">Royal Volubiks</div>
          <div className="brand-sub">Jewelries</div>
        </div>
      </div>

      <nav className="nav">
        <Link to="/shop" className="nav-link">Shop</Link>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}
