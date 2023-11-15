import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StephBoas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
