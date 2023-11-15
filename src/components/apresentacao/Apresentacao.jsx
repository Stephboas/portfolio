import React, { useEffect } from 'react';
import bruxinhaStephVideo from '../../assets/images/bruxinha_steph.webm';

const Apresentacao = () => {
  useEffect(() => {
    const video = document.querySelector('.video-background');
    const txtRotateContainer = document.querySelector('.txt-rotate');
    const carouselText = [
      { text: 'Desenvolvedora Full Stack', color: '#3399ff' },
      { text: 'Designer UX/UI', color: '#3399ff' },
      { text: 'Animadora', color: '#3399ff' },
    ];

    async function typeAndReset(text, eleRef, color, delay = 100) {
      eleRef.style.color = color;
      for (let i = 0; i < text.length; i++) {
        await waitForMs(delay);
        eleRef.textContent = text.substring(0, i + 1);
      }

      await waitForMs(1000);
      for (let i = text.length; i >= 0; i--) {
        await waitForMs(delay);
        eleRef.textContent = text.substring(0, i);
      }
    }

    function waitForMs(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function startTextAnimation() {
      let index = 0;

      while (true) {
        const { text, color } = carouselText[index];
        await typeAndReset(text, txtRotateContainer, color);
        await waitForMs(1500);
        index = (index + 1) % carouselText.length;
      }
    }

    video.addEventListener('ended', function () {
      video.classList.add('fade-out');
      setTimeout(function () {
        video.classList.remove('fade-out');
        video.play(); // Inicia o próximo loop do vídeo
      }, 5000); // Aguarde 1 segundo (tempo da transição) antes de iniciar o próximo loop
    });

    startTextAnimation();

    // Cleanup
    return () => {
      video.removeEventListener('ended', function () {
        video.classList.add('fade-out');
        setTimeout(function () {
          video.classList.remove('fade-out');
          video.play(); // Inicia o próximo loop do vídeo
        }, 5000); // Aguarde 1 segundo (tempo da transição) antes de iniciar o próximo loop
      });
    };
  }, []); // O array vazio [] como segundo argumento garante que useEffect será executado apenas uma vez após a montagem do componente
  
  return (
    <div id="presentation" className="presentation">
      <div className="container">
        <div className="conteudo-esquerda">
          <h1 className="titulo-descricao">
            <div className="nome">
              <span className="sthephane">Sthephane</span>
              <span className="boas">Boas</span>
            </div>
            <br />
            <div className="eu-sou-container">
              <span className="eu-sou">
                Eu sou <span className="txt-rotate"></span>
                <span className="slash">|</span>
              </span>
              <span className="txt-rotate-container">
                <span className="desenvolvedora" id="titulo-desenvolvedor"></span>
                <br />
                <span className="designer" id="titulo-designer"></span>
                <br />
                <span className="animadora" id="titulo-animadora"></span>
              </span>
            </div>
          </h1>
          <div className="descricao">
            <p id="texto-descricao">
              Apaixonada por criar experiências digitais impactantes. Equilibro habilidades técnicas robustas no back-end e front-end, garantindo aplicativos web atraentes, envolventes e intuitivas. Dou vida a conceitos através de animações dinâmicas. Estou sempre buscando desafios criativos para unir tecnologia, design e animação, criando experiências digitais memoráveis.
            </p>
          </div>
          <div className="cta-buttons">
            <button className='btn-contrate'>Contrate-me</button>
            <a href="caminho/para/seu/cv.pdf" download>
              <button className='btn-cv'>Download CV</button>
            </a>
          </div>
        </div>
        <div className="conteudo-direita">
          <video className="video-background" autoPlay loop muted>
            <source src={bruxinhaStephVideo} type="video/webm" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Apresentacao;
