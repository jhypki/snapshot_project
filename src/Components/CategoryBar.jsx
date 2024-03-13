import React from "react";
import CategoryButton from "./CategoryButton";

function CategoryBar() {
  return (
    <ul className="category-bar">
      <CategoryButton category="All" />
      <CategoryButton category="Mountains" />
      <CategoryButton category="Forests" />
      <CategoryButton category="Desserts" />
    </ul>
  );
}

export default CategoryBar;
