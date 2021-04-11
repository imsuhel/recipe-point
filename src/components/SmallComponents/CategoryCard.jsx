import React from "react";
import { Link } from "react-router-dom";

function CategoryCard(props) {
  const categories = props.category;
  //   console.log(categories);
  return (
    <div className="container">
      <div className="row">
        {categories.map((cate, i) => {
          return (
            <div
              className="col-md-3"
              key={cate.idCategory}
              id={cate.idCategory}>
              <Link exact to={"/recipes/"+cate.strCategory}>
                <div className="category_card">
                  <div className="category_img">
                    <img src={cate.strCategoryThumb} alt={cate.strCategory} />
                  </div>
                  <div className="category_desc">
                    <span>{cate.strCategory}</span>
                    <p>{cate.strCategoryDescription}</p>
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

export default CategoryCard;
