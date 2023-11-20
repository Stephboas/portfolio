import React, { useRef, useEffect, useState } from 'react';
import myPhoto from '../../assets/images/photo_2023-10-19_18-12-38.jpg';

const SobreMim = ({ sobreMimRef }) => {
  const textoCurto = `
    <p>Minha jornada no mundo da tecnologia começou nas profundezas do back-end, onde me aprofundei em linguagens como Java, C# e explorei o vasto território dos bancos de dados. Essa imersão me permitiu criar soluções back-end escaláveis e eficientes, solidificando minha compreensão dos sistemas complexos.</p>
    <br>
    <p>Entretanto, foi no front-end que meu coração encontrou seu verdadeiro lar. Explorei um mundo de linguagens e frameworks, dominando tecnologias essenciais que se tornaram a base da minha abordagem criativa. Minha incursão na programação front-end não foi apenas um interesse, mas uma grande vontade que me impulsionou a aprimorar minhas habilidades de design para aplicá-las neste campo. Minha jornada foi mais do que uma transição de carreira; foi uma busca incessante por excelência, uma fusão harmoniosa de disciplinas distintas.</p>
    <br>
  `;

  const textoCompleto = `
    <p>Minha experiência anterior em vendas enriqueceu meu perfil, desenvolvendo minha empatia e habilidade para enxergar histórias através de diversas perspectivas, habilidades cruciais em UX Design.</p>
    <br>
    <p>Minha trajetória me conduziu à Union, onde assumi desafios como Designer UI/UX. Nesse ambiente dinâmico, resolvi problemas tangíveis, liderei equipes e entreguei projetos de alta qualidade pontualmente. Utilizei metodologias ágeis como Scrum e ferramentas como Figma, Adobe Illustrator e Photoshop para criar experiências de usuário que não apenas encantam, mas também solucionam desafios complexos.</p>
    <br>
    <p>Além do meu amor pelo design, minha fascinação pela animação adicionou uma dimensão extra ao meu trabalho, trazendo movimento e vida às minhas criações.</p>
    <br>
    <p>Hoje, sou proficiente em uma variedade de tecnologias, desde HTML, CSS e JavaScript até frameworks robustos como React e Angular. Minhas habilidades não se limitam ao desenvolvimento técnico; abrangem também a liderança de equipes, orientação de colegas e gestão de projetos complexos.</p>
  `;

  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);

  useEffect(() => {
    // Scroll to the sobreMimRef element when mostrarTextoCompleto changes
    if (mostrarTextoCompleto && sobreMimRef && sobreMimRef.current) {
      sobreMimRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [mostrarTextoCompleto, sobreMimRef]);

  const toggleTextoCompleto = () => {
    setMostrarTextoCompleto(!mostrarTextoCompleto);
  };

  return (
    <div id="sobre-mim" className="sobre-mim" ref={sobreMimRef}>
      <h1 className="sobre">Sobre</h1>
      <h1 className="mim">mim</h1>
      <div className="foto-container">
        <div className="foto">
          <img src={myPhoto} alt="Minha Foto" />
          <div className="texto-digitando">
            "Tudo o que temos a decidir é o que fazer com o tempo que nos é concedido." - Gandalf, em 'A Sociedade do Anel', J.R.R. Tolkien
          </div>
        </div>
      </div>
      <div className={`descricao-sobre meu-texto ${mostrarTextoCompleto ? 'mostrar-texto-completo' : ''}`}>
        {/* Texto Curto */}
        <div className={`texto-curto ${!mostrarTextoCompleto ? 'mostrar' : 'ocultar'}`} dangerouslySetInnerHTML={{ __html: textoCurto }}></div>
        {/* Texto Completo */}
        {mostrarTextoCompleto && (
          <div className={`texto-completo ${mostrarTextoCompleto ? 'mostrar' : 'ocultar'}`} dangerouslySetInnerHTML={{ __html: textoCompleto }}></div>
        )}
        {/* Botão Leia Mais/Leia Menos */}
        <button className={`mostrar-mais ${mostrarTextoCompleto ? 'rotacionar-cima' : 'rotacionar-baixo'}`} onClick={toggleTextoCompleto}>
          <span className="seta"></span>
        </button>
      </div>
    </div>
  );
};

export default SobreMim;