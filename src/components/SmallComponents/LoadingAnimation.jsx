import React from "react";
import "./LoadingAnimation.css";

function LoadingAnimation() {
  return (
    <div className="container loading_animation">
      <div className="row">
        {[...Array(8)].map((x, i) => (
          <div className="col-md-3" key={i}>
            <div className="animation_card">
              <div className="animation_body"></div>
              <div className="animation_footer"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default LoadingAnimation;
