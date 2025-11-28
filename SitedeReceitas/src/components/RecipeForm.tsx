import React, { useState, useEffect } from "react";
import { Recipe } from "../hooks/useRecipes";

interface RecipeFormProps {
  onAddRecipe: (recipe: Recipe) => void;
  onUpdateRecipe: (recipe: Recipe) => void;
  editingRecipe: Recipe | null;
  onCancel: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({
  onAddRecipe,
  onUpdateRecipe,
  editingRecipe,
  onCancel,
}) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (editingRecipe) {
      setTitle(editingRecipe.title);
      setIngredients(editingRecipe.ingredients);
      setInstructions(editingRecipe.instructions);
      setImage(editingRecipe.image || null);
    } else {
      setTitle("");
      setIngredients("");
      setInstructions("");
      setImage(null);
    }
  }, [editingRecipe]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && ingredients && instructions) {
      const recipe: Recipe = { title, ingredients, instructions, image };
      editingRecipe ? onUpdateRecipe(recipe) : onAddRecipe(recipe);
      setTitle("");
      setIngredients("");
      setInstructions("");
      setImage(null);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>{editingRecipe ? "Editar Receita" : "Nova Receita"}</h2>

      <label>Título:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Ingredientes:</label>
      <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />

      <label>Instruções:</label>
      <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />

      <label>Imagem da Receita:</label>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {image && (
        <div style={{ margin: "1rem 0" }}>
          <img src={image} alt="Prévia da receita" style={{ maxWidth: "200px", borderRadius: "8px" }} />
        </div>
      )}

      <button type="submit">{editingRecipe ? "Atualizar Receita" : "Adicionar Receita"}</button>
      {editingRecipe && <button type="button" onClick={onCancel}>Cancelar</button>}
    </form>
  );
};

export default RecipeForm;
