import RecipeCard from "./RecipeCard";

const Carousel = ({ recipes, currentIndex }) => {
  return (
    <section className="carousel">
      <h2>Receita em destaque</h2>
      {recipes.length > 0 && (
        <RecipeCard
          idMeal={recipes[currentIndex].idMeal}
          strMeal={recipes[currentIndex].strMeal}
          strMealThumb={recipes[currentIndex].strMealThumb}
          styleType="carousel"
        />
      )}
    </section>
  );
};

export default Carousel;
