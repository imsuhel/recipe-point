import Axios from "axios";
import React, { useEffect, useState } from "react";
import RecipeName from "./SmallComponents/RecipeName";

function Recipe(props) {
  const [viewRecipe, setViewRecipe] = useState([]);
  const recipeId = props.match.params.id;

  useEffect(() => {
    async function viewRecipe() {
      const res = await Axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const recipe = res.data.meals;
      setViewRecipe(recipe);
    }
    viewRecipe();
  },[]);

  return (
    <div className="page">
      {viewRecipe.map((recipeData) => {
        return (
          <React.Fragment key={recipeData.idMeal}>
            <RecipeName name={recipeData.strMeal} cate={recipeData.strArea} />
            <div className="container">
              <div className="single_recipe_container">
                <div className="row" key={recipeData.idMeal}>
                  <div className="col-md-6 my-auto">
                    <div className="single_recipe_img">
                      <img
                        src={recipeData.strMealThumb}
                        alt={recipeData.strArea + "Dish"}
                      />
                      <a href={recipeData.strYoutube} target="_balnk" className="youtube_link">Watch On YouTube</a>
                    </div>
                  </div>
                  <div className="col-md-6 my-auto">
                    <div className="single_recipe_ingredient">
                      <h4>Ingredients</h4>
                      <div className="d-flex justify-content-around">
                        <ul className="ingredients">
                          <li>
                            <span>{recipeData.strIngredient1}</span>
                            <span>{recipeData.strMeasure1}</span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient2}</span>
                            <span> {recipeData.strMeasure2} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient3}</span>
                            <span> {recipeData.strMeasure3} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient4}</span>
                            <span> {recipeData.strMeasure4} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient5}</span>
                            <span> {recipeData.strMeasure5} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient6}</span>
                            <span> {recipeData.strMeasure6} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient7}</span>
                            <span> {recipeData.strMeasure7} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient8}</span>
                            <span> {recipeData.strMeasure8} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient9}</span>
                            <span> {recipeData.strMeasure9} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient10}</span>
                            <span> {recipeData.strMeasure10} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient11}</span>
                            <span> {recipeData.strMeasure11} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient12}</span>
                            <span> {recipeData.strMeasure12} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient13}</span>
                            <span> {recipeData.strMeasure13} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient14}</span>
                            <span> {recipeData.strMeasure14} </span>
                          </li>
                          <li>
                            <span>{recipeData.strIngredient15}</span>
                            <span> {recipeData.strMeasure15} </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="single_recipe_content">
                      <h4>Instructions</h4>
                      <p className="text-justify">
                        {recipeData.strInstructions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Recipe;
