import { useState, useEffect } from "react";

export interface Recipe {
  title: string;
  ingredients: string;
  instructions: string;
  image?: string;
}

export const useAddRecipe = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("recipes");
    if (saved) setRecipes(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe: Recipe) => {
    setRecipes((prev) => [...prev, recipe]);
  };

  const deleteRecipe = (index: number) => {
    setRecipes((prev) => prev.filter((_, i) => i !== index));
  };

  return { recipes, addRecipe, deleteRecipe };
};
