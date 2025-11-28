import React from "react";
import { Recipe } from "../hooks/useRecipes";

interface RecipeListProps {
  recipes: Recipe[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onEdit, onDelete }) => {
  return (
    <div className="recipe-list">
      <h2>Receitas Adicionadas</h2>
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          {recipe.image && <img src={recipe.image} alt={recipe.title} style={{ width: "150px", borderRadius: "8px" }} />}
          <h3>{recipe.title}</h3>
          <p><strong>Ingredientes:</strong> {recipe.ingredients}</p>
          <p><strong>Instruções:</strong> {recipe.instructions}</p>
          <button onClick={() => onEdit(index)}>Editar</button>
          <button onClick={() => onDelete(index)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
