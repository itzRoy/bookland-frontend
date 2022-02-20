import React from "react";
import "./CategoryCard.scss";

const CategoryCard = (item) => {
  return (
    <>
      <div className="card-container">
        <img src={item.img} alt="" />
        <div class="layer">
          <h3>{item.genre}</h3>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
