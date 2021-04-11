import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CateCard(props) {
  const [cateItems, setCateItems] = useState([]);
  const cateName = props.cateName;
  useEffect(() => {
    async function getCategory() {
      const resCate = await Axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cateName}`
      );
      const cateData = resCate.data.meals;
      setCateItems(cateData);
    }
    getCategory();
  });

  return (
    <div className="container">
      <div className="row">
        {cateItems.map((cateData, i) => {
          return (
            <div key={i} id={cateData.idMeal} className="col-md-3">
              <Link exact to={"/recipe/" + cateData.idMeal}>
                <div className="recipe_card">
                  <div className="recipe_body">
                    <img src={cateData.strMealThumb} alt={cateData.strTags} />
                  </div>
                  <div className="recipe_footer">
                    <p>{cateData.strMeal.length < 20 ? `${cateData.strMeal}` : `${cateData.strMeal.substring(0,20)}...`}</p>
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

export default CateCard;
