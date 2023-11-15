import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faBehanceSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const RedesSociais = () => {
  return (
    <div className="redes-sociais">
      <a href="https://github.com/Stephboas" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a href="https://www.behance.net/stephboas" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faBehanceSquare} size='2x' />
      </a>
      <a href="https://www.linkedin.com/in/steph-boas/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
    </div>
  );
};

export default RedesSociais;
