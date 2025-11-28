import RecipeForm from "../components/RecipeForm";

const AddRecipePage = () => {
  const handleAddRecipe = (recipe) => {
    // pega receitas já salvas
    const savedRecipes = localStorage.getItem("recipes");
    const recipes = savedRecipes ? JSON.parse(savedRecipes) : [];

    // adiciona nova receita
    const updated = [...recipes, recipe];
    localStorage.setItem("recipes", JSON.stringify(updated));

    // volta para Home
    window.location.href = "/";
  };

  return (
    <div className="recipe-form">
      <h1>Adicionar Receita</h1>
      <RecipeForm
        onAddRecipe={handleAddRecipe}
        onUpdateRecipe={() => {}}
        editingRecipe={null}
        onCancel={() => window.history.back()}
      />
    </div>
  );
};

export default AddRecipePage;
