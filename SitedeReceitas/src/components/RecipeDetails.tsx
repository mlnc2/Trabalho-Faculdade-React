import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IngredientsList from "./IngredientsList";
import RecipeVideo from "./RecipeVideo";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube?: string;
  [key: string]: any;
}

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setRecipe(data.meals ? data.meals[0] : null);
      } catch (error) {
        console.error("Erro ao buscar receita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Carregando receita...</p>;
  if (!recipe) return <p>Receita não encontrada.</p>;

  // Extrair ingredientes dinamicamente
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />

      <p><strong>Categoria:</strong> {recipe.strCategory}</p>
      <p><strong>Origem:</strong> {recipe.strArea}</p>

      {/* Componente de ingredientes */}
      <IngredientsList ingredients={ingredients} />

      <h2>Modo de preparo</h2>
      <p>{recipe.strInstructions}</p>

      {/* Componente de vídeo */}
      {recipe.strYoutube && <RecipeVideo youtubeUrl={recipe.strYoutube} />}

      <button className="back-button" onClick={() => navigate("/")}>
        Voltar ao Menu
      </button>
    </div>
  );
};

export default RecipeDetails;
