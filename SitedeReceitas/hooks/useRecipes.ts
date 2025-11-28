import { useState } from "react";

export type Recipe = {
  title: string;
  ingredients: string;
  instructions: string;
};

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  const updateRecipe = (index: number, updatedRecipe: Recipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe, i) => (i === index ? updatedRecipe : recipe))
    );
  };

  const deleteRecipe = (index: number) => {
    setRecipes((prevRecipes) => prevRecipes.filter((_, i) => i !== index));
  };

  return { recipes, addRecipe, updateRecipe, deleteRecipe };
};
