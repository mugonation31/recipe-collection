import React from "react";
import "./Recipe.scss";

export default function Recipe(props) {
  const { image, dish, restaurant } = props;
  return (
    <div className="recipe">
      <img src={image} width="190px" alt="" />
      <h2>{dish}</h2>
      <p>{restaurant}</p>
    </div>
  );
}
