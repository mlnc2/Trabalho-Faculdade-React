import RecipeCard from "./RecipeCard";

const PopularRecipes = ({ recipes }) => {
  return (
    <section className="popular">
      <h2>Mais procuradas</h2>
      <div className="popular-list">
        {recipes.length > 0 ? (
          recipes.map((r) => (
            <RecipeCard
              key={r.idMeal}
              idMeal={r.idMeal}
              strMeal={r.strMeal}
              strMealThumb={r.strMealThumb}
              styleType="popular"
            />
          ))
        ) : (
          <p>Carregando receitas...</p>
        )}
      </div>
    </section>
  );
};

export default PopularRecipes;
