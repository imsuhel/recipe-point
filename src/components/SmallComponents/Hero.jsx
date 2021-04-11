import React from "react";
import { Link } from "react-router-dom";

function Hero(props) {
  
  return (
    <div className="hero_background">
      <h4 className="hero_heading">
        search all fevroit recipes <br /> <span>at one place</span>
      </h4>

      <Link to="/recipes" className="btn recipe_view">search recipes</Link>
      
    </div>
  );
}

export default Hero;
