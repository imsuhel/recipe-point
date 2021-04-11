import React, { useEffect, useState } from "react";
import CategoryCard from "./SmallComponents/CategoryCard";
import axios from "axios";
import LoadingAnimation from "./SmallComponents/LoadingAnimation";
import RecipeName from "./SmallComponents/RecipeName";

function Categories() {
  const [Category, setCateory] = useState([]);
  const [mealsAnimation, setMealsAnimation] = useState(false);
  useEffect(() => {
    async function getCategory() {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const categoryData = res.data.categories;
      // console.log(setMealCateory);
      setCateory(categoryData)
      setMealsAnimation(true);
    }
    getCategory();
  });

  return (
    <div className="page">
      <RecipeName name={"Recipe Categories"} />
      {mealsAnimation ? <CategoryCard category={Category} /> : <LoadingAnimation />}
      {/* <CategoryCard /> */}
    </div>
  );
}

export default Categories;
