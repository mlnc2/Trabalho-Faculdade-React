import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useToggle } from "../hooks/useToggle";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const { value: showSearch, toggle: toggleSearch } = useToggle(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          className="logoImg"
          src="https://static.vecteezy.com/ti/vetor-gratis/p1/10482862-cozinha-chef-logo-design-vector-modelo-vetor.jpg"
          alt="Logo FrontChef"
        />
        <span className="logoText">FrontChef</span>
      </div>

      {/* Links de navegação */}
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Cadastro</Link></li>
      </ul>

      {/* Botão de busca */}
      <button className="login-icon" onClick={toggleSearch} title="Buscar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
          alt="Buscar"
        />
      </button>

      {showSearch && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(searchTerm);
          }}
        >
          <SearchBar
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            onSubmit={() => onSearch(searchTerm)}
          />
        </form>
      )}

      {/* Botão de login */}
      <button
        className="login-icon"
        onClick={() => navigate("/login")}
        title="Login"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="Login"
        />
      </button>
    </nav>
  );
};

export default Navbar;
