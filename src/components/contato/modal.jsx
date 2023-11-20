import React from "react";
import TheShireImage from "../../assets/images/the_shire.jpg";

const CustomModal = ({ isOpen, onClose, message }) => {
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modal: {
      backgroundColor: "#1a1a1a",
      padding: "40px",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 0 10px rgba(255, 92, 250, 0.218)",
      color: "#fff",
      position: "relative",
    },
    title: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    message: {
      fontSize: "18px",
      marginBottom: "20px",
    },
    button: {
      backgroundColor: "#007BFF",
      color: "#fff",
      padding: "15px 30px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    leakImageContainer: {
      position: "absolute",
      top: "15px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "120px",
      height: "90px",
      borderRadius: "25%", // Para criar uma forma circular
      overflow: "hidden", // Para esconder partes da imagem fora do contorno
    },
    leakImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // Para garantir que a imagem cubra completamente o contorno
    },
  };

  return (
    isOpen && (
      <div style={styles.overlay} onClick={onClose}>
        <div style={styles.modal}>
          <div style={styles.leakImageContainer}>
            <img
              style={styles.leakImage}
              src={TheShireImage}
              alt="The Shire"
            />
          </div>
          <h2 style={styles.title}>Mensagem Enviada com Sucesso!</h2>
          <p style={styles.message}>{message}</p>
          <button style={styles.button} onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    )
  );
};

export default CustomModal;
