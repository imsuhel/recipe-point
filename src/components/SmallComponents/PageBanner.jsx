import React from "react";
import InputField from "./InputField";

function PageBanner(props) {
  return (
    <div className="page_banner">
      <InputField
        placeholder={"Search Your Recipe"}
        heroInput={"hero_input"}
        searchRecipe={props.searchRecipe}
      />
      <h4>{props.text}</h4>
    </div>
  );
}

export default PageBanner;
