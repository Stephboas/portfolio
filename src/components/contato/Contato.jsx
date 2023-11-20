import React, { useState } from "react";
import emailjs from "emailjs-com";
import CustomModal from "./modal"; 

import enderecoIcon from "../../assets/icons/address.svg";
import phoneIcon from "../../assets/icons/phone.svg";
import mailIcon from "../../assets/icons/mail.svg";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erroFormulario, setErroFormulario] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obrigatórios
    if (!nome || (!email && !telefone)) {
      setErroFormulario("Preencha o nome e um dos campos de contato (e-mail ou telefone).");
      return;
    }

    // Configuração para enviar o e-mail
    const serviceId = "service_mr4pi3y";
    const templateId = "template_faiv9uo";
    const userId = "EUq2nQ_WlS_FRWjMA";

    // Parâmetros para o e-mail
    const templateParams = {
      to_name: "Sthephane Boas Machado",
      from_name: nome,
      from_email: email,
      phone: telefone,
      message: mensagem,
    };

    // Envia o e-mail
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("E-mail enviado com sucesso!", response.status, response.text);
        // Lógica adicional após o envio do e-mail

        // Limpar os campos do formulário
        setNome("");
        setEmail("");
        setTelefone("");
        setMensagem("");
        setErroFormulario("");

        // Exibir modal de sucesso
        setModalIsOpen(true);
      })
      .catch((error) => {
        console.error("Erro ao enviar o e-mail:", error);
        // Lógica adicional em caso de erro no envio

        setErroFormulario("Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="contato" className="contato">
      {erroFormulario && <p className="erro-formulario">{erroFormulario}</p>}
      <h2>Entre em <span className="contato-name">Contato</span></h2>
      <div className="contato-container">
        <form onSubmit={handleSubmit}>
          {erroFormulario && <p className="erro-formulario">{erroFormulario}</p>}
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome aqui..."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@gmail.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(12)xxxxx-xxxx"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Digite sua mensagem aqui..."
              required
              maxLength={500}
              rows={4}
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="contato-info">
        <div className="contato-info-item">
          <div className="info-box">
            <img src={enderecoIcon} alt="Ícone de Endereço" />
            <div>
              <p className="address-icon">Endereço:</p>
              <p>Resende - Rio de Janeiro</p>
            </div>
          </div>
        </div>
        <div className="contato-info-item">
          <div className="info-box">
            <img src={phoneIcon} alt="Ícone de Telefone" />
            <div>
              <p className="phone-icon">Telefone:</p>
              <p>(24) 99939-5117</p>
            </div>
          </div>
        </div>
        <div className="contato-info-item">
          <div className="info-box">
            <img src={mailIcon} alt="Ícone de E-mail" />
            <div>
              <p className="email-icon">E-mail:</p>
              <p>steph.boasmachado@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Sucesso */}
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} message="Diretamente para O Condado!" />
    </section>
  );
};

export default Contato;
