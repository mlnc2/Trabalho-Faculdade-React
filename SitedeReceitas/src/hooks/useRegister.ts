import { useState } from "react";

export const useRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Senha:", password);
    // lógica de cadastro futura
  };

  return { name, setName, email, setEmail, password, setPassword, handleRegister };
};
