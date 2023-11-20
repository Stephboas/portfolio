import React, { useState, useEffect } from 'react';
import sortingHatImage from '../../assets/images/hat-selector.gif';
import calmindProject from '../../assets/images/calmind.png';

const ProjectBox = ({ projeto }) => {
  return (
    <div
      className="project-box"
      style={{ backgroundImage: `url(${projeto.imagemFundo})` }}
    >
      <h2>{projeto.nome}</h2>
      <p>{projeto.descricao}</p>
    </div>
  );
};

const Projetos = () => {
  const projetos = [
    {
      nome: 'Teste de Seleção',
      descricao: 'Um teste interativo das Seleções de casa de Hogwarts usando CSS, HTML e Javascript puro.',
      imagemFundo: sortingHatImage,
      link: 'https://github.com/Stephboas/projetoSelecaoCasas/tree/selecaoCasas',
    },
    {
      nome: 'UX/UI Calmind',
      descricao: 'Projeto de um aplicativo que promove bem-estar emocional e saúde mental com práticas de meditação.',
      imagemFundo: calmindProject,
      link: 'https://www.behance.net/gallery/140231997/Calmind-UX-UI-Case-Study',
    },
    {
      nome: 'Projeto 3',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagemFundo: 'path/to/image3.jpg',
    },
    {
      nome: 'Projeto 4',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagemFundo: 'path/to/image4.jpg',
    },
    {
      nome: 'Projeto 5',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagemFundo: 'path/to/image4.jpg',
    },
    {
      nome: 'Projeto 6',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagemFundo: 'path/to/image4.jpg',
    },
    {
      nome: 'Projeto 7',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imagemFundo: 'path/to/image4.jpg',
    },
  ];

  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const projectsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - projectsPerPage : projetos.length - projectsPerPage
    );
    setActiveDotIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Math.ceil(projetos.length / projectsPerPage) - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex < projetos.length - projectsPerPage ? prevIndex + projectsPerPage : 0
    );
    setActiveDotIndex((prevIndex) =>
      prevIndex < Math.ceil(projetos.length / projectsPerPage) - 1 ? prevIndex + 1 : 0
    );
  };

  const handleDotClick = (index) => {
    setStartIndex(index * projectsPerPage);
    setActiveDotIndex(index);
  };

  const renderProjectBoxes = () => {
    const endIndex = startIndex + projectsPerPage;
    const slicedProjetos = projetos.slice(startIndex, endIndex);
  
    // Verificar se há projetos suficientes para preencher a página
    if (slicedProjetos.length < projectsPerPage) {
      const remainingProjetos = projectsPerPage - slicedProjetos.length;
      const additionalProjetos = projetos.slice(0, remainingProjetos);
  
      return [...slicedProjetos, ...additionalProjetos].map((projeto, index) => (
        <a
          key={index}
          href={projeto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <ProjectBox projeto={projeto} />
        </a>
      ));
    }
  
    return slicedProjetos.map((projeto, index) => (
      <a
        key={index}
        href={projeto.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <ProjectBox projeto={projeto} />
      </a>
    ));
  };

  useEffect(() => {
    setActiveDotIndex(Math.floor(startIndex / projectsPerPage));
  }, [startIndex, projectsPerPage]);

  return (
    <div id="projetos" className="projetos">
      <h1>
        Meus <span className="project-title">projetos</span>
      </h1>
      <div className="projects-container">
        <button className="prev-button" onClick={handlePrev}>
          &lt;
        </button>
        {renderProjectBoxes()}
        <button className="next-button" onClick={handleNext}>
          &gt;
        </button>
        <div className="dots">
          {[...Array(Math.ceil(projetos.length / projectsPerPage))].map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeDotIndex ? 'active-dot' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
