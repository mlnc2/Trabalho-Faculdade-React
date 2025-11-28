import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
    // lógica de autenticação futura
  };

  return { email, setEmail, password, setPassword, handleLogin };
};
