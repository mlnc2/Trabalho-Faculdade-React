import React from "react";
import { useNavigate } from "react-router-dom";

interface RecipeCardProps {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  styleType?: "carousel" | "popular";
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  idMeal,
  strMeal,
  strMealThumb,
  styleType = "popular",
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styleType === "carousel" ? "carousel-card" : "popular-item"}
      onClick={() => navigate(`/recipe/${idMeal}`)}
    >
      <img src={strMealThumb} alt={strMeal} />
      <p>{strMeal}</p>
    </div>
  );
};

export default RecipeCard;
