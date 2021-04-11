import React from "react";

function RecipeName(props) {
  return (
    <div className="page_banner">
      <h4 className="view_recipe_name">
        {props.name} {props.cate}
      </h4>
    </div>
  );
}

export default RecipeName;
