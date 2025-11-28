import { useEffect, useState } from "react";

export const useHome = () => {
  const [carouselRecipes, setCarouselRecipes] = useState<any[]>([]);
  const [popularRecipes, setPopularRecipes] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setCarouselRecipes(data.meals || []));
  }, []);

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      let randoms: any[] = [];
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

  return { carouselRecipes, popularRecipes, currentIndex, handleSearch };
};
