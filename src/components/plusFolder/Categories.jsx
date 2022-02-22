import React from "react";
import "./Categories.scss";
import CategoryCard from "./CategoryCard";
import { categoriesData } from "./categoriesData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="categories-container">
        <h1>Categories</h1>
        <div className="container">
          {categoriesData.map((category) => (
            <Link
              to={`/books/${category.name}`}
              style={{ textDecoration: "none" }}
            >
              <CategoryCard
                genre={category.name}
                img={category.img}
                color={category.color}
                key={category.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
