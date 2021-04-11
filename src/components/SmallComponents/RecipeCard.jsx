import React from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
  const meals = props.mealsData;
  // console.log(meals)
  return (
    <div className="container">
      <div className="row">
        {meals.map((mealsData, i) => {
          return (
            <div key={i} id={mealsData.idMeal} className="col-md-3">
              <Link exact to={"/recipe/" + mealsData.idMeal}>
                <div className="recipe_card">
                  <div className="recipe_body">
                    <img src={mealsData.strMealThumb} alt={mealsData.strTags} />
                  </div>
                  <div className="recipe_footer">
                    <p>{mealsData.strMeal}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecipeCard;
