import React, { useEffect } from 'react';
import Menu from './components/menu/Menu';
import Apresentacao from './components/apresentacao/Apresentacao';
import RedesSociais from './components/redesSociais/RedesSociais';
import Services from './components/servicos/Servicos';
import SobreMim from './components/sobreMim/SobreMim';
import Habilidades from './components/habilidades/Habilidades';
import Projetos from './components/projetos/Projetos';
import Contato from './components/contato/Contato';
import Footer from './components/footer/footer';
import './components/menu/menu.css';
import './components/apresentacao/apresentacao.css';
import './components/redesSociais/redesSociais.css'
import './components/servicos/servicos.css'
import './components/sobreMim/sobreMim.css'
import './components/habilidades/habilidades.css'
import './components/projetos/projetos.css'
import './components/contato/contato.css'
import './components/footer/footer.css'
import './index.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Apresentacao />
      <RedesSociais />
      <Services />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
};

export default App;