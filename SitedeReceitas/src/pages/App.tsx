import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import PopularRecipes from "../components/PopularRecipes";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

interface Recipe {
  title: string;
  ingredients: string;
  instructions: string;
  image?: string;
}

const App = () => {
  const [carouselRecipes, setCarouselRecipes] = useState([]);
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  // 🔹 Carregar receitas do localStorage ao iniciar
  useEffect(() => {
    const savedRecipes = localStorage.getItem("recipes");
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  // 🔹 Salvar receitas no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setCarouselRecipes(data.meals || []));
  }, []);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      let randoms = [];
      for (let i = 0; i < 6; i++) {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await res.json();
        if (data.meals) randoms.push(data.meals[0]);
      }
      setPopularRecipes(randoms);
    };
    fetchRandomRecipes();
  }, []);

  useEffect(() => {
    if (carouselRecipes.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselRecipes.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [carouselRecipes]);

  const handleSearch = (term: string) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => setPopularRecipes(data.meals || []));
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Carousel recipes={carouselRecipes} currentIndex={currentIndex} />
      <PopularRecipes recipes={popularRecipes} />

      {/* Botão para ir para página de adicionar receita */}
      <div className="add-recipe-container">
        <button
          onClick={() => navigate("/add-recipe")}
          className="add-recipe-button"
        >
          ➕ Adicionar Receita
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default App;
