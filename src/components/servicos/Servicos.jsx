import React from 'react';
import codingIcon from '../../assets/icons/coding.png';
import bulbIcon from '../../assets/icons/bulb.png';
import animationIcon from '../../assets/icons/animation.png';

const Services = () => {
  return (
    <div id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="color">Meus</span> <span className="servicos">serviços</span>
        </div>

        <div className="services-content">
          <div className="service service-one">
            <div className="service-img">
              <img src={codingIcon} alt="service-one" />
            </div>
            <div className="service-description">
              <h2>Desenvolvimento Web</h2>
              <p>Desenvolvimento front-end e back-end, criação de websites interativos e responsivos.</p>
            </div>
          </div>

          <div className="service service-two">
            <div className="service-img">
              <img src={bulbIcon} alt="service-two" />
            </div>
            <div className="service-description">
              <h2>UI/UX Design</h2>
              <p>Design de interfaces intuitivas, experiência do usuário, prototipagem e wireframes.</p>
            </div>
          </div>

          <div className="service service-three">
            <div className="service-img">
              <img src={animationIcon} alt="service-three" />
            </div>
            <div className="service-description">
              <h2>Design de Animação</h2>
              <p>Criação de animações dinâmicas para websites e aplicativos, adicionando um toque criativo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;