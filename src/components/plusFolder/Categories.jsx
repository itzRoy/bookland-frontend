import React from "react";
import styled from "styled-components";
import "./Categories.scss";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <>
      <div className="categories-container">
        <h1>Categories</h1>
        <div className="container">
          <CategoryCard
            genre="Adventure"
            img="https://cdn.suwalls.com/wallpapers/fantasy/book-filled-with-adventures-19532-1920x1200.jpg"
          />
          <CategoryCard
            genre="Horror"
            img="https://static.onecms.io/wp-content/uploads/sites/9/2017/10/horror-food-books-header-ft-blog1017.jpg"
          />
          <CategoryCard
            genre="Romance"
            img="https://media.istockphoto.com/photos/heart-shape-picture-id94381370?b=1&k=20&m=94381370&s=170667a&w=0&h=Wg1QE5rf9Ask8L7sAte0dbNMYzohB-mP5Jl4dO8SPXU="
          />
          <CategoryCard
            genre="Mystery"
            img="https://media.istockphoto.com/photos/retro-key-and-opened-book-picture-id488801411?k=20&m=488801411&s=612x612&w=0&h=LK_6hJ62YLrhMlsUgbwr0IaHcDDJfiOBJb3sG4pRY0U="
          />
          <CategoryCard
            genre="Fiction"
            img="https://wallpapercave.com/wp/wp3539323.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
