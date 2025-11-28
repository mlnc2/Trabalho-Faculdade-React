import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = () => {
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ff8c00",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <span
            style={{
              display: "inline-block",
              backgroundColor: "#ff8c00",
              borderRadius: "50%",
              padding: "15px",
              fontSize: "24px",
            }}
          >
            🔒
          </span>
        </div>

        <h2 style={{ marginBottom: "30px", color: "#333" }}>Cadastro</h2>

        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <button
            type="button"
            onClick={handleRegister}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              backgroundColor: "#ff8c00",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Cadastrar
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Link
            to="/login"
            style={{
              color: "#ff8c00",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Já tem uma conta? Faça login
          </Link>
        </div>
        <button
          onClick={() => navigate("/")}
          className="back-menu-button"
        >
          ⬅ Voltar ao Menu
        </button>
      </div>
    </div>
  );
};

export default Register;
