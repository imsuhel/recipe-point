import React, { useEffect, useState } from "react";
import PageBanner from "./SmallComponents/PageBanner";
import RecipeCard from "./SmallComponents/RecipeCard";
import CateCard from "./SmallComponents/CateCard";
import LoadingAnimation from "./SmallComponents/LoadingAnimation";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeName from "./SmallComponents/RecipeName";

function Recipes() {
  let { id } = useParams();
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [mealsAnimation, setMealsAnimation] = useState(false);
  const searchRecipe = (e) => {
    setSearch(e);
  };

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const mealsData = res.data.meals;
      setMeals(mealsData);
      setMealsAnimation(true);
    }
    getData();
  });

  return (
    <div className="page">
      {id ? <RecipeName name={"Recipes / " + id} /> : <PageBanner searchRecipe={searchRecipe} />}
      
      {id ? (
        mealsAnimation ? (
          <CateCard cateName={id} />
        ) : (
          <LoadingAnimation />
        )
      ) : mealsAnimation ? (
        <RecipeCard mealsData={meals} />
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
}

export default Recipes;
