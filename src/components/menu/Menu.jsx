import React, { useRef, useEffect, useState } from 'react';

const Menu = ({ scrollToRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className={`menu ${menuOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="menu-items">
        <div className={`nome-principal ${menuOpen ? 'hidden' : ''}`}>
          StephBoas
        </div>
        <nav>
          <ul>
            <li><a href="#presentation" onClick={() => scrollToSection(scrollToRef)}>Home</a></li>
            <li><a href="#sobre-mim" onClick={() => scrollToSection(scrollToRef)}>Sobre Mim</a></li>
            <li><a href="#projetos" onClick={() => scrollToSection(scrollToRef)}>Projetos</a></li>
            <li><a href="#contato" onClick={() => scrollToSection(scrollToRef)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;