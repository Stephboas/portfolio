import React from 'react';
import ReactIcon from '../../assets/icons/react.png';
import JSIcon from '../../assets/icons/js.png';
import AngularIcon from '../../assets/icons/angular.png';
import JQuery from '../../assets/icons/jquery.svg';
import VueIcon from '../../assets/icons/vue.png';
import NodeIcon from '../../assets/icons/node-js.png';
import SassIcon from '../../assets/icons/sass.png';
import MongoDBIcon from '../../assets/icons/mongodb-seeklogo.com.svg';
import MySQLIcon from '../../assets/icons/mysql.png';
import PostgreSQL from '../../assets/icons/postgresql.png';
import BootstrapIcon from '../../assets/icons/bootstrap.png';
import FigmaIcon from '../../assets/icons/figma.png';
import IllustratorIcon from '../../assets/icons/adobe-illustrator.png';
import PhotoshopIcon from '../../assets/icons/adobe-photoshop.png';
import AfterEffectsIcon from '../../assets/icons/after-effects.png';
import MohoIcon from '../../assets/icons/moho-anime-studio-logo.webp';

const Habilidades = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <span className="skills-title">Minhas</span> <span className="habilidades">habilidades</span>
      </div>

      <div className="skills-box">
        {/* React */}
        <div className="box-content">
          <div className="box-icon">
            <img src={ReactIcon} alt="React" />
          </div>
          <div className="box-text">
            <p>React</p>
          </div>
        </div>

        {/* JavaScript */}
        <div className="box-content">
          <div className="box-icon">
            <img src={JSIcon} alt="JavaScript" />
          </div>
          <div className="box-text">
            <p>JavaScript</p>
          </div>
        </div>

        {/* Angular */}
        <div className="box-content">
          <div className="box-icon">
            <img src={JQuery} alt="Angular" />
          </div>
          <div className="box-text">
            <p>JQuery</p>
          </div>
        </div>

        {/* Vue.js */}
        <div className="box-content">
          <div className="box-icon">
            <img src={VueIcon} alt="Vue.js" />
          </div>
          <div className="box-text">
            <p>Vue.js</p>
          </div>
        </div>

        {/* Node.js */}
        <div className="box-content">
          <div className="box-icon">
            <img src={NodeIcon} alt="Node.js" />
          </div>
          <div className="box-text">
            <p>Node.js</p>
          </div>
        </div>

        {/* Sass */}
        <div className="box-content">
          <div className="box-icon">
            <img src={SassIcon} alt="Sass" />
          </div>
          <div className="box-text">
            <p>Sass</p>
          </div>
        </div>

        {/* MongoDB */}
        <div className="box-content">
          <div className="box-icon">
            <img src={MongoDBIcon} alt="MongoDB" />
          </div>
          <div className="box-text">
            <p>MongoDB</p>
          </div>
        </div>

        {/* MySQL */}
        <div className="box-content">
          <div className="box-icon">
            <img src={MySQLIcon} alt="MySQL" />
          </div>
          <div className="box-text">
            <p>MySQL</p>
          </div>
        </div>

        {/* PostGreSQL */}
        <div className="box-content">
          <div className="box-icon">
            <img src={PostgreSQL} alt="MySQL" />
          </div>
          <div className="box-text">
            <p>PostgreSQL</p>
          </div>
        </div>

        {/* Bootstrap */}
        <div className="box-content">
          <div className="box-icon">
            <img src={BootstrapIcon} alt="Bootstrap" />
          </div>
          <div className="box-text">
            <p>Bootstrap</p>
          </div>
        </div>

        {/* Figma */}
        <div className="box-content">
          <div className="box-icon">
            <img src={FigmaIcon} alt="Figma" />
          </div>
          <div className="box-text">
            <p>Figma</p>
          </div>
        </div>

        {/* Adobe Illustrator */}
        <div className="box-content">
          <div className="box-icon">
            <img src={IllustratorIcon} alt="Adobe Illustrator" />
          </div>
          <div className="box-text">
            <p>Illustrator</p>
          </div>
        </div>

        {/* Adobe Photoshop */}
        <div className="box-content">
          <div className="box-icon">
            <img src={PhotoshopIcon} alt="Adobe Photoshop" />
          </div>
          <div className="box-text">
            <p>Photoshop</p>
          </div>
        </div>

        {/* After Effects */}
        <div className="box-content">
          <div className="box-icon">
            <img src={AfterEffectsIcon} alt="After Effects" />
          </div>
          <div className="box-text">
            <p>After Effects</p>
          </div>
        </div>

        {/* Moho */}
        <div className="box-content">
          <div className="box-icon">
            <img src={MohoIcon} alt="Moho" />
          </div>
          <div className="box-text">
            <p>Moho</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
